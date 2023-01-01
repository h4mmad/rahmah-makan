import React from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "10px",
};

const center = {
  lat: 5.3559,
  lng: 100.3025,
};

const markers = [
  {
    name: "Fridge 1",
    coordinates: {
      lat: 5.3559,
      lng: 100.3025,
    },
  },
  {
    name: "Fridge 2",
    coordinates: {
      lat: 5.3508,
      lng: 100.3084,
    },
  },
  {
    name: "Fridge 3",
    coordinates: {
      lat: 5.3559,
      lng: 100.2891,
    },
  },
];

function MyComponent({setFridgeInfo}) {
  const { isLoaded } = useJsApiLoader({
    id: "rahmah-makan-map",
    googleMapsApiKey: "AIzaSyDOvs1mDjda5i-chLsSimeVBGucp-O8ZTE",
  });

  const [map, setMap] = React.useState(null);

  console.log(map);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
      clickableIcons={true}
    >
      {markers.map((marker) => {
        return (
          <Marker position={marker.coordinates} label={marker.name} onClick={() => setFridgeInfo(marker)}/>
          );
      })}

    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
