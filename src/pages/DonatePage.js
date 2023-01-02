import { useState } from "react";
import Map from "../components/Map";

const DonatePage = () => {

    const [fridgeInfo, setFridgeInfo ] = useState('');

    return(
        <div className="container mx-auto px-6 mt-10">
            
            <Map/>

            

        </div>

    );
}

export default DonatePage;