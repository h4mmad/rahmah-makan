import { useState } from "react";
import Map from "../components/Map";
import Marker from "../components/Marker";
import StatusBox from "../components/StatusBox";
import { markers, center } from "../data/fridges";
import GoogleMapsButton from "../components/GoogleMapsButton";
import StatusCircle from "../components/StatusCircle";
import InfoBox from "../components/InfoBox";
import Spinner from "../components/Spinner";
import AlertBox from "../components/AlertBox";


const DonatePage = () => {

  const [serverData, setServerData] = useState(null);
  const [infoBoxData, setInfoBoxData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
  async function sendRequest() {
    try {
      setErrorMessage(null);
      setLoading(true);
      const request = await fetch("http://localhost:5000/api/fridges");
      const response = await request.json();
      setServerData(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setErrorMessage(String(error));
    }
  }

  const mapMarkers = markers.map((marker) => {
    return (
      <Marker
        text={marker.name}
        onClick={async () => {
          sendRequest();
          setInfoBoxData(marker);
        }}
        lat={marker.coordinates.lat}
        lng={marker.coordinates.lng}
      />
    );
  });

  return (
    <div className="container mx-auto px-6 mt-10 mb-64">
      {errorMessage ? <AlertBox text={errorMessage}/> : ''}
      <h1 className="text-xl mb-4">Select a fridge</h1>
      <Map
        setServerData={setServerData}
        center={center}
        mapMarkers={mapMarkers}
        infoBoxData={infoBoxData}
      />

      <div className="flex flex-col md:flex-row items-center mt-4 md:mt-8 justify-between">

        { serverData && <StatusBox serverData={serverData}/>}
        { infoBoxData && <InfoBox infoBoxData={infoBoxData}/>}
        {loading ? <Spinner/> : (serverData && <StatusCircle serverData={serverData}/>)}
        { infoBoxData && <GoogleMapsButton infoBoxData={infoBoxData}/>}
        
      </div>
      
    </div>
  );
};

export default DonatePage;
