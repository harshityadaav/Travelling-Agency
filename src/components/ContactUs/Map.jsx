import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../../Style/ContactUs/Map.css';

const Map = () => {
  const defaultProps = {
    center: {
      lat: 30.293586,
      lng: 77.9974004,
    },
    zoom: 19,
  };

  return (
    <div className='Map-main'>
      <GoogleMapReact
         bootstrapURLKeys={{ key: "AIzaSyBu4p3ZP9zL0BHOW2j1UU1odWIwu-3asBg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={30.293586} lng={77.9974004} text='Marker' />
      </GoogleMapReact>
    </div>
  );
};

const Marker = () => (
  <div style={{ color: 'red', fontSize: '24px' }}>
    <i className='fas fa-map-marker-alt'></i>
  </div>
);

export default Map;