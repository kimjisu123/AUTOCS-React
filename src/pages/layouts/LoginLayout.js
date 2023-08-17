import { Outlet } from "react-router-dom";
import Header from "../compoments/LoginHeader/Header";

function LoginLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default LoginLayout;