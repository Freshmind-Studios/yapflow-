import React, { useEffect, useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import YapService from "../services/YapService";
import YappiesSelector from "../modules/YappiesSelector";
import YapsSelector from "../modules/YapsSelector";
import Chat from "../modules/Chat";
import "./styles/UserInterface.css";

const UserInterface = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {
        try {
            const { valid, userId } = await AuthService.status();
            console.log(userId);

            if (!valid) {
                navigate("/auth");
                return;
            }

            const { user } = await YapService.user(userId);
            setUserData(user);
            setLoading(false); // Data načtena
            console.log(user);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, [navigate]);

if (loading) {
    return <div>Loading...</div>;
}

return (
    <div id="user-interface">
        <div className="container-top">
            <YappiesSelector user={userData}></YappiesSelector>
            <Chat></Chat>
        </div>
        <div className="container-bottom">
            <YapsSelector></YapsSelector>
        </div>
    </div>
);

}

export default UserInterface;