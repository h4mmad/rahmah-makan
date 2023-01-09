const StatusCircle = ({ usage }) => {
  return (
    <div className="hidden md:block">
      <div id="outer-circle" className="circle-green-color">
        <div id="inner-circle" className="text-xl font-bold">
          {usage === 1 ? "Not full" : null}
          {usage === 2 ? "Almost full" : null}
          {usage === 3 ? "Completely full" : null}
        </div>
      </div>
    </div>
  );
};

export default StatusCircle;
