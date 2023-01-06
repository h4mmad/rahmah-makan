import { useEffect, useState } from "react";

const StatusBox = ({ usage }) => {

  const [colorClassText, setColorClassText] = useState('');
  

  useEffect(()=>{
    const colorClass =  () => {
      if(usage === 1){
        setColorClassText('md:hidden font-bold text-center bg-darkGreen p-2 rounded-lg');
      }
      if(usage === 2){
        setColorClassText('md:hidden font-bold text-center bg-fullRed p-2 rounded-lg');
      }
      if(usage === 3){
        setColorClassText('md:hidden font-bold text-center bg-fullRed p-2 rounded-lg');
      }
    }
    colorClass();
  }, [usage]);



  return (
    <div className={colorClassText}>


      {usage === 1 ? 'Not full' : null}
      {usage === 2 ? 'Almost full' : null}
      {usage === 3 ? 'Completely full' : null}

    </div>
  );
};
export default StatusBox;
