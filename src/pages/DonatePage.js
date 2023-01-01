import { useState } from "react";
import MyMap from "../components/MyMap";

const DonatePage = () => {

    const [fridgeInfo, setFridgeInfo ] = useState('');

    return(
        <div className="container mx-auto px-6 mt-10">
            <h1 className="text-2xl font-bold">Select a fridge</h1>
            <MyMap setFridgeInfo={setFridgeInfo}/>

            <div className="rounded-lg w-80 text-center p-2 mt-10 hover:bg-veryLightGray border border-darkGreen">
                <p>{fridgeInfo.name}</p>
            </div>


        </div>

    );
}

export default DonatePage;