import MapsIcon from "../images/google-maps.png";

const GoogleMapsButton = ({displayText}) => {
  return (
    <a href={displayText.googleMapsURL} className="rounded-lg w-full text-center p-2 mt-10 hover:bg-veryLightGray border  border-darkGreen font-bold md:hidden">
      
        <img className="inline mr-5 w-10" src={MapsIcon} alt="" />

        Open with Google Maps
     
    </a>
  );
};

export default GoogleMapsButton;
