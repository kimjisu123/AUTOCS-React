import { Outlet } from "react-router-dom";
import Header from "../pages/compoments/Header";
import Footer from "../pages/compoments/Footer";
import { UserProvider } from "../pages/Todolist/TodoContext";


function Layout() {

    return (
        <>
            <UserProvider>
                <Header />
                <Outlet/>
                <Footer/>
            </UserProvider>
        </>
    )
}

export default Layout;