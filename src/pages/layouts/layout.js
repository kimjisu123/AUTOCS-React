import { Outlet } from "react-router-dom";
import Header from "../compoments/Header";
import Footer from "../compoments/Footer";

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