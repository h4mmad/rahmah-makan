import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getDatabase, ref, set } from "firebase/database";

const DonationDetails = ({ infoBoxData, redirectTo, userData }) => {
  const [active, setActive] = useState(false);
  const [foodType, setFoodType] = useState("");
  const [amount, setAmount] = useState("");
  const [useBy, setUseBy] = useState("");
  const [message, setMessage] = useState(null);

  function toggleModal(e) {
    redirectTo();
    setActive(!active);
  }

  function foodTypeHandler(e) {
    setFoodType(e.target.value);
  }
  function amountHandler(e) {
    setAmount(e.target.value);
  }
  function useByHandler(e) {
    setUseBy(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(foodType, amount, useBy);

    const db = getDatabase();
    set(ref(db, "donations/" + uuidv4()), {
      displayName: userData.displayName,
      fridgeName: infoBoxData.name,
      userID: userData.uid,
      foodType: foodType,
      amount: amount,
      useBy: useBy,
      createdAt: String(new Date())
    })
      .then(() => {
        setMessage("Your details have been submitted successfully");
        setAmount("");
        setFoodType("");
        setUseBy("");
        console.log("data saved successfully");
        setTimeout(()=>{setMessage('')}, 3000);
      })
      .catch((error) => {
        setMessage(error);
        console.log("write failed");
      });
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

            <form className="flex flex-col  p-3 m-auto" onSubmit={submitHandler}>
            <p className="mt-3 text-green-600 font-bold">{message}</p>
              <h3 className="text-xl md:text-left">
                You're donating to {infoBoxData.name}, please declare your items
              </h3>
              <input
              required
                placeholder="Food type"
                value={foodType}
                type="text"
                className="p-2 rounded-md border mt-3  border-blue-600"
                onChange={foodTypeHandler}
              />
              <input
              required
                placeholder="Amount"
                type="text"
                value={amount}
                className="p-2 rounded-md border mt-3 border-blue-600"
                onChange={amountHandler}
              />
              <label className="mt-9">Use by:</label>
              <input
              required
                value={useBy}
                type="date"
                className="p-2 rounded-md border border-blue-600"
                onChange={useByHandler}
              />
              <button
                className="border p-2 text-white font-bold bg-blue-600 rounded-md mt-3 hover:bg-blue-500"
                
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
