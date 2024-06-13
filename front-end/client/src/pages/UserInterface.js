import React, { useEffect } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";


// import modulů
// Grid
import  YappiesSelector from "../modules/YappiesSelector";
import YapsSelector from "../modules/YapsSelector";

// free form

// ostatní
import Chat from "../modules/Chat";

import "./styles/UserInterface.css"


const UserInterface = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const { valid, userId } = await AuthService.status();
            global.status = userId;
            if (!valid) {
                navigate("/auth");
            }
        };

        fetchData();
    },);

    return <div id="user-interface">
    <div className="container-top">
    <YappiesSelector></YappiesSelector>
    <Chat></Chat>
    </div>
    <div className="container-bottom">
    <YapsSelector></YapsSelector>
    </div>
    </div>
};

export default UserInterface;
