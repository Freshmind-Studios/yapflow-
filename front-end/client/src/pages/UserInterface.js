import React, { useEffect } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";


const UserInterface = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const { valid } = await AuthService.status();
            if (valid) {
                navigate("/");
            
            } 

        };

        fetchData();
    },);

    return (
        <>
            <h1>User Interface</h1>
        </>
    );
};

export default UserInterface;
