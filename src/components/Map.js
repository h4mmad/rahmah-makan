import { markers, center } from "../data/fridges";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { useState } from "react";

const Map = () => {

const [displaytext, setDisplaytext] = useState(null);
  
const mapMarkers = markers.map((marker) => {
    return(
        <Marker text={marker.name}
        onClick={()=>setDisplaytext(marker)}
        lat={marker.coordinates.lat}
        lng={marker.coordinates.lng}/>
    );
})

  return (
    <div style={{ height: "500px", width: "100%" , borderRadius: "100%", position: "relative"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDOvs1mDjda5i-chLsSimeVBGucp-O8ZTE" }}
        defaultCenter={center}
        defaultZoom={14}
      >

        {mapMarkers}

      </GoogleMapReact>

      {

        displaytext &&
      
      <div style={{color: "white", backgroundColor: "rgba(0,0,0,0.5)", position: "absolute", top: "50px", left: "50px",
      padding: "1rem",
      borderRadius: "10px"

        }}>
        
        <h3>{displaytext.name}</h3>
        <h4>{displaytext.address}</h4>
      </div>

    }
    </div>
  );
};
export default Map;
