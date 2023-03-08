import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { getDatabase, ref, set } from "firebase/database";

const reducer = (state, action) => {
  switch (action.type) {
    case "setActive": {
      console.log("setActive reached", state.active);
      return {
        ...state,
        active: !state.active,
      };
    }
    case "setFoodType": {
      return {
        ...state,
        foodType: action.payload,
      };
    }
    case "setAmount": {
      return {
        ...state,
        amount: action.payload,
      };
    }
    case "setUseBy": {
      return {
        ...state,
        useBy: action.payload,
      };
    }
    case "setMessage": {
      return {
        ...state,
        message: action.payload,
      };
    }
    default: {
      console.log("Reached default case in reducer of DonationDetails.js");
    }
  }
};

const DonationDetails = ({ infoBoxData, redirectTo, userData }) => {
  // const [active, setActive] = useState(false);
  // const [foodType, setFoodType] = useState("");
  // const [amount, setAmount] = useState("");
  // const [useBy, setUseBy] = useState("");
  // const [message, setMessage] = useState(null);

  const [state, dispatch] = useReducer(reducer, {
    active: false,
    foodType: "",
    amount: "",
    useBy: "",
    message: null,
  });

  function submitHandler(e) {
    e.preventDefault();
    console.log(state.foodType, state.amount, state.useBy);

    const db = getDatabase();
    set(ref(db, "donations/" + uuidv4()), {
      displayName: userData.displayName,
      fridgeName: infoBoxData.name,
      userID: userData.uid,
      foodType: state.foodType,
      amount: state.amount,
      useBy: state.useBy,
      createdAt: String(new Date()),
    })
      .then(() => {
        // setMessage("Your details have been submitted successfully");
        dispatch({
          type: "setMessage",
          payload: "Your details have been submitted successfully",
        });
        // setAmount("");
        // setFoodType("");
        // setUseBy("");
        dispatch({ type: "setAmount", payload: "" });
        dispatch({ type: "setFoodType", payload: "" });
        dispatch({ type: "setUseBy", payload: "" });

        console.log("data saved successfully");
        setTimeout(() => {
          dispatch({ type: "setMessage", payload: "" });
        }, 3000);
      })
      .catch((error) => {
        dispatch({ type: "setMessage", payload: String(error) });
        console.log("write failed");
      });
  }

  return (
    <>
      <button
        onClick={() => dispatch({ type: "setActive" })}
        className="border p-2 text-white font-bold bg-blue-600 rounded-md mt-3 hover:bg-blue-500"
      >
        Enter donation details
      </button>

      {state.active ? (
        <>
          <div
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            className="w-100 h-screen left-0 right-0 fixed top-0"
          ></div>

          <div className="m-auto w-96 h-auto absolute right-0 top-1/3 left-0 bg-white  shadow-2xl rounded-lg">
            <span
              onClick={() => {
                dispatch({ type: "setActive" });
              }}
              className="p-2 cursor-pointer float-right text-red-600 text-2xl"
            >
              &#x2715;
            </span>

            <form
              className="flex flex-col  p-3 m-auto"
              onSubmit={submitHandler}
            >
              <p className="mt-3 text-green-600 font-bold">{state.message}</p>
              <h3 className="text-xl md:text-left">
                You're donating to {infoBoxData.name}, please declare your items
              </h3>
              <input
                required
                placeholder="Food type"
                value={state.foodType}
                type="text"
                className="p-2 rounded-md border mt-3  border-blue-600"
                onChange={(e) =>
                  dispatch({ type: "setFoodType", payload: e.target.value })
                }
              />
              <input
                required
                placeholder="Amount"
                type="text"
                value={state.amount}
                className="p-2 rounded-md border mt-3 border-blue-600"
                onChange={(e) =>
                  dispatch({ type: "setAmount", payload: e.target.value })
                }
              />
              <label className="mt-9">Use by:</label>
              <input
                required
                value={state.useBy}
                type="date"
                className="p-2 rounded-md border border-blue-600"
                onChange={(e) =>
                  dispatch({ type: "setUseBy", payload: e.target.value })
                }
              />
              <button className="border p-2 text-white font-bold bg-blue-600 rounded-md mt-3 hover:bg-blue-500">
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
