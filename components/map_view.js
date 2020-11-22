import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import Axios from "axios";
import { Div } from "atomize";
import Link from "next/link";
import MapCard from "./map_card";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class Mapview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: this.props.tailors,
      activeStore: {},
      showingInfoWindow: false,
      selectedStore: [],
      selectedImg: "",
    };
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedStore: props.data,
      activeStore: marker,
      showingInfoWindow: true,
      selectedImg: props.data.storeBanner.url,
    });
    console.log(this.state.selectedImg);
  };

  removeActiveMarker = () => {
    setTimeout(() => {
      this.setState({ showingInfoWindow: false });
    }, 3000);
  };

  render() {
    return (
      <Map
        google={this.props.google}
        mapTypeId="roadmap"
        zoom={15}
        style={mapStyles}
        initialCenter={this.props.position}
        styles={mapStyle}
      >
        {this.state.stores.map((store) => (
          <Marker
            key={store._id}
            position={{
              lat: store.geolocation.lat,
              lng: store.geolocation.long,
            }}
            title={store.name}
            data={store}
            onClick={this.onMarkerClick}
          />
        ))}
        <InfoWindow
          marker={this.state.activeStore}
          visible={this.state.showingInfoWindow}
          className="list-link"
        >
          <MapCard
            store={this.state.selectedStore}
            image={this.state.selectedImg}
          />
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD0wFMqqsKP6VuX5lezQQG0QuUFLm9KQxw",
})(Mapview);

// Create custom map style here: https://mapstyle.withgoogle.com/
var mapStyle = [
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#444444",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#46bcec",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2196f3",
      },
    ],
  },
];
