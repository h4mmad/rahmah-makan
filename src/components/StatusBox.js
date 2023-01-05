import MapsIcon from "../images/google-maps.png";

const StatusBox = ({ displayText }) => {
  return (
    <div className="border-4 rounded-2xl border-darkGreen w-full p-5">
      <h2>Name: {displayText.name}</h2>
      <h2>Location: {displayText.address}</h2>

      <a href={displayText.googleMapsURL}>
        <div className="p-2 border-4 active:bg-darkGreen active:text-white border-darkGreen rounded-2xl flex items-center justify-center space-x-2 md:hidden">
          <img className="w-12" src={MapsIcon} alt="" />

          <h4>Open with Google Maps</h4>
        </div>
      </a>
    </div>
  );
};
export default StatusBox;
