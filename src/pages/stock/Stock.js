import StockMenubar from './StockMenubar';
import { Outlet } from "react-router-dom";
import StockCSS from "./Stock.module.css";


function Stock() {

    return (
        <div style={{display:"flex"}}>
            <StockMenubar/>
            <div className={StockCSS.contents}>
            <Outlet />
            </div>
        </div>
    )
}

export default Stock;