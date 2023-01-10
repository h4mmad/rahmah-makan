import spinner from "../images/spinner.gif";

const Spinner = () => {
  return (
    <div >
      <img className="h-24 md:h-auto" src={spinner} alt="loading spinner"/>
    </div>
  );
};

export default Spinner;
