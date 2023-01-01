import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: "10px",
};

const center = {
  lat: 5.3559,
  lng: 100.3025
};

const fridge1 = {
  lat: 5.3559,
  lng: 100.3025
};

const fridge2 = {
  lat: 5.3508,
  lng: 100.3084
};

const fridge3 = {
  lat: 5.3559,
  lng: 100.2891
};

function sendRequest(e){
  console.log("Request sent");
}

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "rahmah-makan-map",
    googleMapsApiKey: "AIzaSyDOvs1mDjda5i-chLsSimeVBGucp-O8ZTE"
  })

  const [map, setMap] = React.useState(null)
  console.log(map);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    
    
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        
        <Marker position={fridge1} label="Fridge 1" onClick={sendRequest} id="fr-1"/>
        <Marker position={fridge2} label="Fridge 2" onClick={sendRequest} id="fr-2"/>
        <Marker position={fridge3} label="Fridge 3" onClick={sendRequest} id="fr-3"/>

       
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)