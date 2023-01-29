import Form from "../components/Form";

const Register = ({setUserData, goTo}) => {
    return(
        <>
            <Form setUserData={setUserData} goTo={goTo}></Form>
        </>
    );

};

export default Register;