import { useState } from "react";

const DonationDetails = ({ infoBoxData, redirectTo, userData}) => {
  const [active, setActive] = useState(false);


  function toggleModal(e) {
    redirectTo();
    setActive(!active);
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="border p-2 text-white font-bold bg-blue-600 rounded-md mt-3 hover:bg-blue-500"
      >
        Enter donation details
      </button>

      {active ? (
        <>
          <div
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            className="w-100 h-screen left-0 right-0 fixed top-0"
          ></div>

          <div className="m-auto w-96 h-auto absolute right-0 top-1/3 left-0 bg-white  shadow-2xl rounded-lg">
            <span
              onClick={() => {
                setActive(!active);
              }}
              className="p-2 cursor-pointer float-right text-red-600 text-2xl"
            >
              &#x2715;
            </span>

            <form className="flex flex-col  p-3 m-auto">
              <h3 className="text-xl md:text-left">
                You're donating to {infoBoxData.name}, please declare your items
              </h3>
              <input
                placeholder="Food type"
                type="text"
                className="p-2 rounded-md border mt-3  border-blue-600"
              />
              <input
                placeholder="Amount"
                type="text"
                className="p-2 rounded-md border mt-3 border-blue-600"
              />
              <label className="mt-9">Use by:</label>
              <input
                type="date"
                className="p-2 rounded-md border border-blue-600"
              />
              <button
                className="border p-2 text-white font-bold bg-blue-600 rounded-md mt-3 hover:bg-blue-500"
                onClick={(e) => e.preventDefault()}
              >
                Submit
              </button>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default DonationDetails;
