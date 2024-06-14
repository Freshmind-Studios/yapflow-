import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Yappie from "../components/Yappie";
import Profile from "../components/Profile";
import "./styles/YappiesSelector.css";

const YappiesSelector = (props) => {
    console.log(props);

    return (
        <div className="block yappies-selector">
            <span className="heading">yappies</span>
            <input type="search" name="search" id="search-yappies" placeholder="Search by tag, messages, ..." />
            <div className="yappies-scroll-wrapper">
                <div id="add-yappie" onClick={props.onAddYappieClick}>
                    <FontAwesomeIcon className="image" icon={faPlus} /> {/* Správné použití ikony */}
                </div>
                {props.user.yappies.map((yappie, index) => (
                    <Yappie key={index} yappie={yappie} />
                ))}
            </div>
            <Profile user={props.user} />
        </div>
    );
};

export default YappiesSelector;
