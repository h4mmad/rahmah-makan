import GoogleMapReact from "google-map-react";

const Map = ({mapMarkers, center}) => {

  return (
    <div className="relative w-full h-96">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDOvs1mDjda5i-chLsSimeVBGucp-O8ZTE" }}
        defaultCenter={center}
        defaultZoom={14}
      >

        {mapMarkers}

      </GoogleMapReact>

      

    </div>
  );
};
export default Map;
