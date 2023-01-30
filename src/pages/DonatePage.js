import { useState } from "react";
import Map from "../components/Map";
import Marker from "../components/Marker";
import { markers, center } from "../data/fridges";
import GoogleMapsButton from "../components/GoogleMapsButton";
import UsageStatus from "../components/UsageStatus";
import InfoBox from "../components/InfoBox";
import Spinner from "../components/Spinner";
import AlertBox from "../components/AlertBox";
import DonationDetails from "../components/DonationDetails";
import ReportIssue from "../components/ReportIssue";
import { useNavigate } from "react-router-dom";

const DonatePage = ({ setGoTo, userData }) => {
  const [serverData, setServerData] = useState(null);
  const [infoBoxData, setInfoBoxData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      setErrorMessage(null);
      setLoading(true);
      const request = await fetch("http://localhost:5000/api/fridges");
      const response = await request.json();
      console.log(response);
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
        key={marker.name}
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

  function redirectTo(){
    if(!userData){
      navigate('/register/login')
    }
  }

  return (
    <>
      <div className="container mx-auto px-6 mt-10">
        {errorMessage ? <AlertBox text={errorMessage} /> : ""}
        <h1 className="text-xl mb-4">Select a fridge</h1>
        <Map
          setServerData={setServerData}
          center={center}
          mapMarkers={mapMarkers}
          infoBoxData={infoBoxData}
        />

        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-8 justify-between">
          {infoBoxData && (
            <InfoBox infoBoxData={infoBoxData} serverData={serverData} />
          )}
          {loading ? (
            <Spinner />
          ) : (
            serverData && <UsageStatus serverData={serverData} />
          )}
          {infoBoxData && <GoogleMapsButton infoBoxData={infoBoxData} />}
        </div>

        <div className="mt-3 flex flex-col md:flex-row">
          {infoBoxData ? <DonationDetails userData={userData} infoBoxData={infoBoxData} redirectTo={redirectTo} setGoTo={setGoTo}/> : <></>}
          {infoBoxData ? <ReportIssue userData={userData} redirectTo={redirectTo} setGoTo={setGoTo}/> : <></>}
        </div>

      </div>
    </>
  );
};

export default DonatePage;
