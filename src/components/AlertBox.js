import { useState } from "react";

const AlertBox = ({ text }) => {
  
    const [close, setClose] = useState(false);

    function closeAlertBox(){
        setClose(!close);
    }
  
    return (
    <div className={close ? 'hidden': ""}>
      <div className="relative text-center p-4 bg-yellow-400 font-bold rounded-lg">
        {text}
        <span onClick={closeAlertBox} className="absolute right-2 top-1 text-xl cursor-pointer">X</span>
      </div>
    </div>
  );
};

export default AlertBox;
