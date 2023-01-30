const DonationDetailsBox = ({ donations }) => {
  return (
    <>
      <div className="border-4 border-blue-400 flex-col rounded-lg p-2 w-fit mt-2">
        <p>
          Name: <span className="font-bold">{donations.displayName}</span>
        </p>
        <p>User ID: {donations.userID}</p>
        <p>
          Fridge: <span className="font-bold"> {donations.fridgeName}</span>
        </p>
        <p>
          Type: <span className="font-bold"> {donations.foodType}</span>
        </p>
        <p>
          Amount: <span className="font-bold"> {donations.amount}</span>
        </p>
        <p>
          Use By: <span className="font-bold"> {donations.useBy}</span>
        </p>
      </div>
    </>
  );
};
export default DonationDetailsBox;
