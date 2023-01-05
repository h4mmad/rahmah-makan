import MapsIcon from "../images/google-maps.png";

const GoogleMapsButton = ({displayText}) => {
  return (
    <a href={displayText.googleMapsURL} className="rounded-lg w-full text-center p-2 mt-5 hover:bg-veryLightGray border-2  border-darkGreen font-bold md:hidden">
      
        <img className="inline mr-5 w-10" src={MapsIcon} alt="" />

        Navigate with Google Maps
     
    </a>
  );
};

export default GoogleMapsButton;
