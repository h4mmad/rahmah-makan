import { useEffect, useState } from "react";

const StatusCircle = ({ serverData }) => {
  const [className, setClassName] = useState("");
  const [message, setMessage] = useState("JSON response not meeting the requirements");

  useEffect(() => {
    if (serverData) {
      if (serverData.usage === "low") {
        setClassName("circle-color-green");
        setMessage("Low Usage");
      }

      if (serverData.usage === "medium") {
        setClassName("circle-color-yellow");
        setMessage("Medium Usage");
      }
      if (serverData.usage === "high") {
        setClassName("circle-color-red");
        setMessage("High Usage");
      }
    }
  }, [serverData]);

  return (
    <div className="hidden md:block ">
      <div id="outer-circle" className={className}>
        <div id="inner-circle" className="text-xl font-bold">
          {message}
        </div>
      </div>
    </div>
  );
};

export default StatusCircle;
