import { Outlet } from "react-router-dom";
import StockCSS from '../stock/Stock.module.css'
import BoardMenubar from "./boardMenubar";


function Menu() {

    return (
        <div style={{display:"flex"}}>
            <BoardMenubar/>
            <div className={StockCSS.contents}>
            <Outlet />
            </div>
        </div>
    )
}

export default Menu;