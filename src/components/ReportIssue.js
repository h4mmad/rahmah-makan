import { useState } from "react";

const ReportIssue = ({redirectTo, userData}) => {
  const [active, setActive] = useState(false);

  function toggleModal(e) {
    redirectTo()
    setActive(!active);
  }

  return (
    <>
      <button onClick={toggleModal} className="border p-2 text-white font-bold bg-red-600 rounded-md mt-3 hover:bg-red-500">
        Report issue
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
                Report Issue
              </h3>
              <textarea rows="5" cols="50" className="mt-2 border rounded-md border-red-500 p-2"></textarea>
             
              <button
                className="border p-2 text-white font-bold bg-red-500  rounded-md mt-3 hover:bg-brightRedLight"
                onClick={(e) => e.preventDefault()}
              >
                Report
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

export default ReportIssue;
