import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";


const ReportIssue = ({ redirectTo, userData }) => {
  const [active, setActive] = useState(false);
  const [issue, setIssue] = useState('');
  const [message, setMessage] = useState(null);


  function toggleModal(e) {
    redirectTo();
    setActive(!active);
  }
  function issueHandler(e) {
    setIssue(e.target.value);
  }
  async function submitHandler(e){
    e.preventDefault();
    console.log(issue, userData.uid, userData.displayName);

    const db = getDatabase();
    set(ref(db, "issues/" + uuidv4()), {
      displayName: userData.displayName,
      userID: userData.uid,
      issue : issue,
      createdAt: String(new Date())
    })
      .then(() => {
        setMessage("Your issue has been reported");
        setIssue('');
        console.log("issue saved successfully");
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
        className="border p-2 text-white font-bold bg-red-600 rounded-md mt-3 hover:bg-red-500"
      >
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

            <form className="flex flex-col  p-3 m-auto" onSubmit={submitHandler}>
              <p className="mt-3 text-red-600 font-bold">{message}</p>
              <h3 className="text-xl md:text-left">Report Issue</h3>
              <textarea
              maxLength={250}
                
                value={issue}
                onChange={issueHandler}
                rows="5"
                cols="50"
                className="mt-2 border rounded-md border-red-500 p-2"
                required
              ></textarea>

              <button
                className="border p-2 text-white font-bold bg-red-500  rounded-md mt-3 hover:bg-brightRedLight"
                
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
