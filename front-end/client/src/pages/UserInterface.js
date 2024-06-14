import React, { useEffect, useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import YapService from "../services/YapService";
import YappiesSelector from "../modules/YappiesSelector";
import YapsSelector from "../modules/YapsSelector";
import Chat from "../modules/Chat";
import "./styles/UserInterface.css";
import AddYappie from "../modules/AddYappie";

const UserInterface = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [showAddYappie, setShowAddYappie] = useState(false); // Přidáno pro správu viditelnosti pop-up

    const handleShowAddYappie = () => setShowAddYappie(true);
    const handleCloseAddYappie = () => setShowAddYappie(false);

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
                <YappiesSelector user={userData} onAddYappieClick={handleShowAddYappie} />
                <Chat />
            </div>
            <div className="container-bottom">
                <YapsSelector />
            </div>
            {showAddYappie && (
                <>
                    <div className="add-yappie-overlay" onClick={handleCloseAddYappie}></div>
                    <AddYappie onClose={handleCloseAddYappie} />
                </>
            )}
        </div>
    );
};

export default UserInterface;