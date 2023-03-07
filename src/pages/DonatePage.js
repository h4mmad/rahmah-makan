import { useReducer } from "react";
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

const reducer = (state, action) => {
  switch (action.type) {
    case "setServerData": {
      console.log("dispatch received");
      console.log(action.payload);
      return {
        ...state,
        serverData: action.payload,
      };
    }
    case "setInfoBoxData": {
      console.log("infobox dispatch recieved");
      return {
        ...state,
        infoBoxData: action.payload,
      };
    }
    case "setLoading": {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case "setErrorMessage": {
      console.log("error dispatch recieved");
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    default: {
      console.log("reached the default case, an error may have occured");
    }
  }
};

const DonatePage = ({ setGoTo, userData }) => {
  // const [serverData, setServerData] = useState(null);
  //const [infoBoxData, setInfoBoxData] = useState(null);
  // const [loading, setLoading] = useState(null);
  // const [errorMessage, setErrorMessage] = useState(null);

  const [state, dispatch] = useReducer(reducer, {
    serverData: null,
    infoBoxData: null,
    loading: false,
    errorMessage: null,
  });

  const navigate = useNavigate();

  // The sendRequest function requests the flask server for status of the fridge
  // setServerData() is used to set the response from the server
  // setLoading() is used to display a loding spinner while the data is being fetched
  // setErrorMessage() is used to set error message incase fetching fails

  async function sendRequest() {
    let response = "yooooo";
    try {
      // setErrorMessage(null);
      dispatch({ type: "setLoading", payload: true });
      const request = await fetch("http://localhost:5000/api/fridges");
      response = await request.json();
      console.log(response);
      dispatch({ type: "setServerData", payload: response });

      // setServerData(response);

      dispatch({ type: "setLoading", payload: false });
    } catch (error) {
      dispatch({ type: "setLoading", payload: false });

      console.log(error);
      dispatch({ type: "setErrorMessage", payload: String(error) });

      // setErrorMessage(String(error));
    }
  }

  // The coordinates of fridge markers is located in /src/data/fridges.js
  // The data is structured as an array of objects
  // mapMarkers variable is assigned an array of <Marker/> components after reading from the array
  // longitude and latitude are set for each marker

  const mapMarkers = markers.map((marker) => {
    return (
      <Marker
        key={marker.name}
        text={marker.name}
        onClick={async () => {
          sendRequest();
          dispatch({ type: "setInfoBoxData", payload: marker });
          // setInfoBoxData(marker);
        }}
        lat={marker.coordinates.lat}
        lng={marker.coordinates.lng}
      />
    );
  });

  function redirectTo() {
    if (!userData) {
      navigate("/register/login");
    }
  }

  return (
    <>
      <div className="container mx-auto px-6 mt-10">
        {state.errorMessage ? <AlertBox text={state.errorMessage} /> : ""}
        <h1 className="text-xl mb-4">Select a fridge</h1>
        <Map
          setServerData={state.setServerData}
          center={center}
          mapMarkers={mapMarkers}
          infoBoxData={state.infoBoxData}
        />

        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-8 justify-between">
          {state.infoBoxData && (
            <InfoBox
              infoBoxData={state.infoBoxData}
              serverData={state.serverData}
            />
          )}
          {state.loading ? (
            <Spinner />
          ) : (
            state.serverData && <UsageStatus serverData={state.serverData} />
          )}
          {state.infoBoxData && (
            <GoogleMapsButton infoBoxData={state.infoBoxData} />
          )}
        </div>

        <div className="mt-3 flex flex-col md:flex-row">
          {state.infoBoxData ? (
            <DonationDetails
              userData={userData}
              infoBoxData={state.infoBoxData}
              redirectTo={redirectTo}
              setGoTo={setGoTo}
            />
          ) : (
            <></>
          )}
          {state.infoBoxData ? (
            <ReportIssue
              userData={userData}
              redirectTo={redirectTo}
              setGoTo={setGoTo}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default DonatePage;
