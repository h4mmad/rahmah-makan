import FridgeIcon from "../images/fridge-icon.png";

const Marker = ({ onClick, text }) => {


function clickSideEffects(){
    onClick();
}

  return (
    <div onClick={clickSideEffects} style={{cursor: "pointer"}}>
        <h1 className="font-bold">{text}</h1>
      <img src={FridgeIcon} style={{width: "30px"}} alt=""/>
    </div>
  );
};
export default Marker;
