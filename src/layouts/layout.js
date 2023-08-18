import { Outlet } from "react-router-dom";
import Header from "../pages/compoments/Header";
import Footer from "../pages/compoments/Footer";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Layout;