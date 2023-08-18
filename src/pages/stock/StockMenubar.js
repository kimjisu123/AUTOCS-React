import { NavLink } from 'react-router-dom';
import StockCSS from './Stock.module.css'

function StockMenubar() {

    return(
            <div style={{width: "295px",  height: "959px", paddingTop: "30px"}}>
                <div className={StockCSS.menuHeader}>재고관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/check">재고조회</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/">신청내역관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/">세금계산서</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/">통계</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/">입고 폐기 등록</NavLink></div>

                <div className={StockCSS.menuHeader}>재고변경</div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/category">카테고리 관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/product">물품 관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/">규격 관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/">단위 관리</NavLink></div>
            </div>
    )
}

export default StockMenubar;