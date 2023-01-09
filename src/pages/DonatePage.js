import { useState } from "react";
import Map from "../components/Map";
import Marker from "../components/Marker";
import StatusBox from "../components/StatusBox";
import { markers, center } from "../data/fridges";
import GoogleMapsButton from "../components/GoogleMapsButton";
import StatusCircle from "../components/StatusCircle";


const DonatePage = () => {
  const [serverData, setServerData] = useState(1);

  const [displayText, setDisplayText] = useState(null);
  const [QRCode, setQRCode] = useState(null);

  async function sendRequest() {
    try {
      console.log("req sent");
      let req = await fetch("http://localhost:5000/api/fridges");
      const res = await req.text();
      setServerData(res);
      console.log(res);
      console.log(serverData);
    } catch (error) {
      console.log(error);
    }
  }

  const mapMarkers = markers.map((marker) => {
    return (
      <Marker
        text={marker.name}
        onClick={async () => {
          setDisplayText(marker);
          setQRCode(marker.qrCodeURL);
          sendRequest();
        }}
        lat={marker.coordinates.lat}
        lng={marker.coordinates.lng}
      />
    );
  });

  return (
    <div className="container mx-auto px-6 mt-10">
      <h1 className="text-xl mb-4">Select a fridge</h1>
      <Map
        setServerData={setServerData}
        center={center}
        mapMarkers={mapMarkers}
        displayText={displayText}
      />

      <div className="flex flex-col md:flex-row items-center justify-around md:space-x-8 mt-4 md:mt-8">

        { displayText && <img src={QRCode} style={{ width: "12rem" }} className="border-4 rounded-lg border-darkGreen hidden md:block" alt=""/>}
        { displayText && <StatusBox usage={serverData}/>}
        { displayText && <StatusCircle usage={serverData}/>}

        { displayText && <GoogleMapsButton displayText={displayText}/>}
        
      </div>
      
    </div>
  );
};

export default DonatePage;
