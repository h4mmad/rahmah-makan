const IssueBox = ({ issues }) => {
  return (
    <>
      <div className="border-4 border-red-400 flex-col rounded-lg p-2 w-fit mt-2">
        <p>
          Name: <span className="font-bold">{issues.displayName}</span>
        </p>
        <p>User ID: {issues.userID}</p>
        <p>
          Issue: <span className="font-bold">{issues.issue}</span>
        </p>
      </div>
    </>
  );
};
export default IssueBox;
