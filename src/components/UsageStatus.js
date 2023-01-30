import { useEffect, useState } from "react";

const StatusCircle = ({ serverData }) => {
  const [className, setClassName] = useState("");
  const [message, setMessage] = useState(
    "JSON response not meeting the requirements"
  );

  useEffect(() => {
    if (serverData) {
      if (serverData.usage === "low") {
        setClassName("green-color-status");
        setMessage("Low Usage");
      }

      if (serverData.usage === "medium") {
        setClassName("yellow-color-status");
        setMessage("Medium Usage");
      }
      if (serverData.usage === "high") {
        setClassName("red-color-status");
        setMessage("High Usage");
      }
    }
  }, [serverData]);

  return (
    <>
      <div className="hidden md:block ml-4">
        <div id="outer-circle" className={className}>
          <div id="inner-circle" className="text-xl font-bold">
            {message}
          </div>
        </div>
      </div>

      <div className="md:hidden w-full rounded-lg mt-2 text-center">
        <div className={className + " p-4 rounded-lg"}>{message}</div>
      </div>
    </>
  );
};

export default StatusCircle;
