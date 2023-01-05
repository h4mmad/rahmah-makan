const InfoBox = ({displayText}) => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "absolute",
        top: "20px",
        left: "20px",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <h3 className="font-bold text-darkGreen">{displayText.name}</h3>
      <h4>{displayText.address}</h4>
    </div>
  );
};

export default InfoBox;
