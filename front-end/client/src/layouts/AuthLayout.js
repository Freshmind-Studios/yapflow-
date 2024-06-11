import { Outlet } from "react-router-dom";
import LoginBackground from "./AuthBackground";
import "./AuthLayout.css"

const AuthLayout = () => {
    return (
        <div className="login-layout">
            <LoginBackground className="background" />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;
