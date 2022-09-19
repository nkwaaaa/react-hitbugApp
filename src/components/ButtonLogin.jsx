import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function ButtonLogin() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const handleClick = (e) => {
        loginWithRedirect();
    };

    if (isAuthenticated) {
        navigate("/userinfo");
    }
    return <button onClick={handleClick}>login</button>;
}

export default ButtonLogin;
