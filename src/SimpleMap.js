import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class SimpleMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 28.59695804283646,
          lng: 77.19853987045884
        }}
        zoom={15}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick} name={"current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(SimpleMap);
