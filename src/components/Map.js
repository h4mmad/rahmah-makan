import GoogleMapReact from "google-map-react";
import InfoBox from "./InfoBox";

const Map = ({mapMarkers, center, displayText}) => {

  return (
    <div className="relative w-full h-96">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDOvs1mDjda5i-chLsSimeVBGucp-O8ZTE" }}
        defaultCenter={center}
        defaultZoom={14}
      >

        {mapMarkers}

      </GoogleMapReact>

      { displayText && <InfoBox displayText={displayText}/>}

    </div>
  );
};
export default Map;
