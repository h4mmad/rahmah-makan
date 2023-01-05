
const StatusBox = ({ displayText }) => {
  return (
    <div className="border rounded-lg border-darkGreen w-full p-5">
      <h2>Name: {displayText.name}</h2>
      <h2>Location: {displayText.address}</h2>
    </div>
  );
};
export default StatusBox;
