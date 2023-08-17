import { Outlet } from "react-router-dom";
import Header from "../compoments/Login/Header";

function LoginLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default LoginLayout;