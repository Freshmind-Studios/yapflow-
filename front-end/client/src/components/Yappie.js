import React, { useEffect, useState } from "react";
import YapService from "../services/YapService";

const Yappie = (props) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { users } = await YapService.yappies(props.yappie);
                const userId = users.find(user => user !== props.userId);
                const { user } = await YapService.user(userId);
                setUser(user);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, [props.yappie, props.userId]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="yappie">
            <img className="profile-picture" src={user.picture} alt="" />
            <div className="text-container">
                <span className="user-name">{user.tag}</span>
                <span className="user-status">{
                    (user.status.substring(0, 30) + "...")

                }</span>
            </div>
        </div>
    );
};

export default Yappie;
