import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapComponent = ({ onLocationSelect }) => {
    console.log("Google Maps API Key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    const [marker, setMarker] = useState({
        lat: 45.593903, // Default center latitude
        lng: -73.571280 // Default center longitude
    });

    const onMapClick = (e) => {
        setMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        });
        onLocationSelect(e.latLng.lat(), e.latLng.lng());
    };

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
            <div className="map-container">
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={marker}
                    zoom={10}
                    onClick={onMapClick}
                >
                    <Marker position={marker} />
                </GoogleMap>
            </div>
        </LoadScript>
    );
}

export default GoogleMapComponent;