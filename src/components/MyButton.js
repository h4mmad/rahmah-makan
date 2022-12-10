import { Link } from "react-router-dom";

const MyButton = ({text}) => {
    return (
        <Link className="p-3 text-white px-6 pt-2 bg-myBlue rounded-full hover:bg-brightRedLight baseline">
            {text}
        </Link>
    );
};

export default MyButton;