import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import "./Map.css";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import RadialMenu from '../../components/RadialMenu/RadialMenu';
import DeviceInfo from '../../components/DeviceInfo/DeviceInfo';
import ElevatorIcon from "../../assets/elevator-central-image.png";


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
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
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
        "color": "#171717"
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
  const [data, setData] = useState([]);                               // Stores the data from the Device API call
  const [cookies, setCookie] = useCookies();
  // State variables for radial menu 
  const [showRadialMenu, setShowRadialMenu] = useState(false);
  const [radialMenuData, setRadialMenuData] = useState({
    deviceName: '',
    deviceId: '',
    floorLocation: '',
    deviceTemp: '',
    cameraUrl: '',
    doorStatus: '',
    direction: '',
    buildingId: ''
  });
  const [showDeviceInfo, setDeviceInfo] = useState(false);
  // Set up user's default location
  const defaultLat = cookies.defaultLat;
  const defaultLng = cookies.defaultLng;
  const token = cookies.token;
  // Zooms on click event
  const [mapCenter, setMapCenter] = useState({ lat: defaultLat, lng: defaultLng });
  const [mapZoom, setMapZoom] = useState(11);
  useEffect(() => {
    const headers = new Headers({
      'Valid-token': token,
    });
    // call getDeviceInfos API and store Data array
    fetch('https://services.solucore.com/solutrak/api/buildings/getDeviceInfos', { "method": "GET", headers })
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
    // Change map center and zoom level
    setMapCenter({ lat: marker.position.lat(), lng: marker.position.lng() });
    setMapZoom(20); // Zoom level when a marker is clicked, adjust as needed
    // Delay the display of RadialMenu
    setTimeout(() => {
      setShowRadialMenu(true);
      setRadialMenuData({
        deviceName: props.name,
        deviceId: props.deviceId,
        floorLocation: props.floorLocation,
        deviceTemp: props.deviceTemp,
        cameraUrl: props.cameraUrl,
        doorStatus: props.doorStatus,
        direction: props.direction,
        buildingId: props.buildingId
      });
      setDeviceInfo(true);
    }, 1000); // Delay for zoom animation
  };
  // Function to close RadialMenu
  const closeRadialMenu = () => {
    setShowRadialMenu(false);
  };
  const onClose = () => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };
  const mapOutput1 = (
  <div className="map-container">
      <Map
        google={google}
        zoom={mapZoom}
        center={mapCenter}
        styles={darkMapStyles}
        initialCenter={
          {
            lat: defaultLat,
            lng: defaultLng
          }
        }
        mapTypeControl={false}
        streetViewControl={false}
        zoomControlOptions={{
          position: google.maps.ControlPosition.BOTTOM_LEFT,
        }}
      >
        {data ? (
          data.map((device) => (
            <Marker
              key={device.deviceId}
              position={{ lat: device.latitude, lng: device.longitute }}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: '#2096f3',
                fillOpacity: 1,
                scale: 10,
                strokeColor: '#161617',
                strokeWeight: 8
              }}
              onClick={onMarkerClick}
              name={device.deviceName}
              deviceId={device.deviceId}
              floorLocation={device.infoMessage.location}
              deviceTemp={device.infoMessage.temperature}
              cameraUrl={device.cameraUrl}
              doorStatus={device.infoMessage.door}
              direction={device.infoMessage.direction}
              buildingId={device.buildingId}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
        {/* <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={onClose}
        >
          <div>
            <h4>{selectedPlace.name}</h4>
          </div>
        </InfoWindow> */}
      </Map>
      {/* Conditional rendering of RadialMenu */}
      {showRadialMenu && (
        
        <RadialMenu
          imageSrc={ElevatorIcon}
          deviceName={radialMenuData.deviceName}
          deviceId={radialMenuData.deviceId}
          deviceFloor={radialMenuData.floorLocation}
          deviceTemp={radialMenuData.deviceTemp}
          cameraUrl={radialMenuData.cameraUrl}
          doorStatus={radialMenuData.doorStatus}
          direction={radialMenuData.direction}
          onClose={closeRadialMenu}
        />
      )}
      {/* Conditional rendering of DeviceInfo */}
      {showDeviceInfo && (<DeviceInfo buildingId={radialMenuData.buildingId} deviceId={radialMenuData.deviceId}/>)}
    </div>
  );

  return (
    mapOutput1
  );
};
export default GoogleApiWrapper({
  apiKey
})(MapContainer);
