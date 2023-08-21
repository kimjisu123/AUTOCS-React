import { NavLink } from 'react-router-dom';
import StockCSS from './Stock.module.css'

function StockMenubar() {

    return(
            <div style={{width: "295px",  height: "959px", paddingTop: "30px"}}>
                <div className={StockCSS.menuHeader}>재고관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/check">재고조회</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/orderlist">신청내역관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/bill">세금계산서</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/statistics">매출통계</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/stockio">입고 폐기 등록</NavLink></div>

                <div className={StockCSS.menuHeader}>물품관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/productregist">물품 신규등록</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/productdelete">물품 불용등록</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/category">카테고리 관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/standard">규격 관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/unit">단위 관리</NavLink></div>

                <div className={StockCSS.menuHeader}>발주관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/order">발주신청</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/myorderlist">신청내역관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/mybill">세금계산서</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/mystatistics">통계</NavLink></div>
            </div>
    )
}

export default StockMenubar;