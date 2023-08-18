import { Outlet } from "react-router-dom";
import Header from "../pages/compoments/LoginHeader/Header";

function LoginLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default LoginLayout;