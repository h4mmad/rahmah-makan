import { useState } from "react";

const DonationDetails = ({ infoBoxData }) => {
  const [active, setActive] = useState(false);

  function toggleModal(e) {
    setActive(!active);
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="border p-2 bg-sky-200 rounded-lg hover:bg-sky-50"
      >
        Enter Donation Details
      </button>

      {active ? (
        <>
          <div
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
            className="w-100 h-screen left-0 right-0 fixed top-0"
          ></div>

          <div className="m-auto w-96 h-auto absolute right-0 top-1/3 left-0 bg-white border-4 shadow-2xl rounded-lg border-darkGreen overflow-hidden">
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
                className="p-2 rounded-md border mt-3  border-darkGreen"
              />
              <input
                placeholder="Amount"
                type="text"
                className="p-2 rounded-md border mt-3 border-darkGreen"
              />
              <label className="mt-9">Use by:</label>
              <input
                type="date"
                className="p-2 rounded-md border border-darkGreen"
              />
              <button
                className="border p-2 text-white font-bold bg-darkGreen rounded-md mt-3 hover:bg-brightRedLight"
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
