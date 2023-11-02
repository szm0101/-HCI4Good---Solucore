import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import "./Map.css";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const apiKey = process.env.REACT_APP_apiKey;
/** ref:
 * Styling wizard: Google maps apis. 
 * Retrieved 7 October 2023, 
 * from https://mapstyle.withgoogle.com/
 */
const darkMapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2e2e2e"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels",
    "stylers": [
      {
        "color": "#bdbdbd"
      },
      {
        "visibility": "simplified"
      },
      {
        "weight": 4
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "stylers": [
      {
        "color": "#757575"
      },
      {
        "lightness": 60
      },
      {
        "bold": 4
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#121212"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "weight": 8
      },
      {
        "color": "#121212"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd" // "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#171717"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#080808"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#080808"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "on",
      },
      {
        "color": "#171717" // Set the trsnsit color to black
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#252525"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1f1f20"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#252525"
      }
    ]
  }
];

const MapContainer = ({ google }) => {
  
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);  // Hides or shows the InfoWindow
  const [activeMarker, setActiveMarker] = useState({});               // Shows the active marker upon click
  const [selectedPlace, setSelectedPlace] = useState({});             // Shows the InfoWindow to the selected place upon a marker
  const [data, setData] = useState([]);                               // Stores the data from the Building API call
  const [cookies, setCookie] = useCookies();
  
  const defaultLat = cookies.defaultLat;
  const defaultLng = cookies.defaultLng;
  const token = cookies.token;

  useEffect(() => {
    const headers = new Headers({
      'Valid-token': token,
    });

    // call getBuildingInfos API and store Data array
    fetch('https://services.solucore.com/solutrak/api/buildings/getBuildingInfos', {"method": "GET",headers})
      .then((response) => response.json())
      .then((result) => {
        setData(result.Data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }, []);
  
  const onMarkerClick = (props, marker, e) => {
      setSelectedPlace(props);
      setActiveMarker(marker);
      setShowingInfoWindow(true);
    };

  const onClose = () => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

    return (
      <div className="map-container">
        <Map
          google={google}
          zoom={11}
          styles={darkMapStyles}
          initialCenter={
            {
              lat: defaultLat,
              lng: defaultLng
            }
          }
          mapTypeControl={false} // disable Map and Satellite options
          streetViewControl={false} // disable street view control
          zoomControlOptions={{
            position: google.maps.ControlPosition.BOTTOM_LEFT, // Set the zoom position
          }}
        >
          <Marker
            position={{ lat: 41.8780, lng: -87.6298 }}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: '#2096f3', // fill color to blue
              fillOpacity: 1, // 1 means fully opaque
              scale: 10, // the size
              strokeColor: '#161617',
              strokeWeight: 8
            }}
            onClick={onMarkerClick}
            name={'Building 1'}
          />
          <Marker
            position={{ lat: 41.8730, lng: -87.6200 }}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: '#2096f3', // fill color to blue
              fillOpacity: 1, // 1 means fully opaque
              scale: 10, // the size
              strokeColor: '#161617',
              strokeWeight: 8
            }}
            // onClick={onMarkerClick}
            name={'Building 2'}
          />
          <Marker
            position={{ lat: 41.8670, lng: -87.6470 }}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: '#2096f3', // fill color to blue
              fillOpacity: 1, // 1 means fully opaque
              scale: 10, // the size
              strokeColor: '#161617',
              strokeWeight: 8
            }}
            // onClick={onMarkerClick}
            name={'Building 3'}
          />
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            onClose={onClose}
          >
            <div>
              <h4>{selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
};

export default GoogleApiWrapper({
  apiKey
})(MapContainer);
