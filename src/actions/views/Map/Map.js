import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%',
// };

const darkMapStyles = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e', // Background color
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e', // Text stroke color
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855', // Text color
      },
    ],
  },
];

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <div style={{ position: 'fixed', top: '0px', left: '0px', right: '0px', bottom: '0px', zIndex: -10 }}>
        <Map
          google={this.props.google}
          zoom={14}
          styles={darkMapStyles}
          initialCenter={
            {
              lat: 41.8690,
              lng: -87.6270
            }
          }
        >
          <Marker
            position={{ lat: 41.8780, lng: -87.6298 }}
            onClick={this.onMarkerClick}
            name={'Building 1'}
          />
          <Marker
            position={{ lat: 41.8730, lng: -87.6200 }}
            onClick={this.onMarkerClick}
            name={'Building 2'}
          />
          <Marker
            position={{ lat: 41.8670, lng: -87.6470 }}
            onClick={this.onMarkerClick}
            name={'Building 3'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDrRiDIDno9RGZmp6BJCN-OTbvFPbm3-Ic'
})(MapContainer);
