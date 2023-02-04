import { useEffect, useState } from "react";
import IssueBox from "../components/IssueBox";

import { getDatabase, ref, child, get } from "firebase/database";
import DonationDetailsBox from "../components/DonationDetailsBox";

const Admin = ({userData}) => {
  const [issues, setIssues] = useState(null);
  const [donations, setDonations] = useState(null);

  function fetchIssues() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `issues/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());

          const tempArr = [];
          for (const [key, value] of Object.entries(snapshot.val())) {
            console.log(key);
            tempArr.push(value);
          }
          setIssues(tempArr);

          console.log(tempArr);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function fetchDonations() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `donations/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());

          const tempArr = [];
          for (const [key, value] of Object.entries(snapshot.val())) {
            console.log(key);
            tempArr.push(value);
          }
          setDonations(tempArr);

          console.log(tempArr);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchDonations();
    fetchIssues();
  }, []);

  return (
    <div className="container mx-auto px-6 mt-10">
      {

        (userData && userData.email === 'mohammedhammad07@gmail.com') ?
        <div className="flex flex-col md:flex-row justify-between">
          <div className="">
            <div className="flex flex-row justify-between items-baseline">
              <h2 className="font-bold text-3xl text-red-500">Issues</h2>
              <button
                onClick={fetchIssues}
                className="border p-2 text-white font-bold bg-red-500 rounded-md mt-3 hover:bg-red-400"
              >
                Get issues
              </button>
            </div>

            {issues &&
              issues.map((element) => {
                return <IssueBox issues={element} />;
              })}
          </div>

          <div className="">
            <div className="flex flex-row  justify-between items-baseline">
              <h2 className="font-bold text-3xl text-blue-500">Donations</h2>
              <button
                onClick={fetchDonations}
                className="border p-2 text-white font-bold bg-blue-500 rounded-md mt-3 hover:bg-blue-400"
              >
                Get donations
              </button>
            </div>
            {donations &&
              donations.map((element) => {
                return <DonationDetailsBox donations={element} />;
              })}
          </div>
        </div>
        :
        <div className="flex flex-col items-center pb-32 pointer-events-none"><iframe title="goalkeeper-gif" src="https://giphy.com/embed/dpJX6BkwptfbclunyK" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p className="font-bold text-xl pt-4">You're not an admin</p></div>
      }
    </div>
  );
};

export default Admin;
