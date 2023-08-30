import Menubar from './menubar';
import { Outlet } from "react-router-dom";
import StockCSS from '../stock/Stock.module.css'


function Menu() {

    return (
        <div style={{display:"flex"}}>
            <Menubar/>
            <div className={StockCSS.contents}>
            <Outlet />
            </div>
        </div>
    )
}

export default Menu;