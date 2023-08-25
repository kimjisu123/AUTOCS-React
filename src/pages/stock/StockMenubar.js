import { NavLink } from 'react-router-dom';
import StockCSS from './Stock.module.css'

function StockMenubar() {

    return(
            <div style={{width: "295px",  height: "959px", paddingTop: "30px"}}>
                <div className={StockCSS.menuHeader}>재고관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/check" style={{textDecoration: "none" , color:"black"}} >재고조회</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/orderlist" style={{textDecoration: "none" , color:"black"}}>신청내역관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/bill" style={{textDecoration: "none" , color:"black"}}>세금계산서</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/statistics" style={{textDecoration: "none" , color:"black"}}>매출통계</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/stockio" style={{textDecoration: "none" , color:"black"}}>입고 폐기 등록</NavLink></div>

                <div className={StockCSS.menuHeader}>물품관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/productregist" style={{textDecoration: "none" , color:"black"}}>물품 신규등록</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/productdelete" style={{textDecoration: "none" , color:"black"}}>물품 불용등록</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/category" style={{textDecoration: "none" , color:"black"}}>카테고리 관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/standard" style={{textDecoration: "none" , color:"black"}}>규격 관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/unit" style={{textDecoration: "none" , color:"black"}}>단위 관리</NavLink></div>

                <div className={StockCSS.menuHeader}>발주관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/order" style={{textDecoration: "none" , color:"black"}}>발주신청</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/myorderlist" style={{textDecoration: "none" , color:"black"}}>신청내역관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/mybill" style={{textDecoration: "none" , color:"black"}}>세금계산서</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/main/stock/mystatistics" style={{textDecoration: "none" , color:"black"}}>발주통계</NavLink></div>
            </div>
    )
}

export default StockMenubar;