import { NavLink } from 'react-router-dom';
import StockCSS from '../stock/Stock.module.css'

function Menubar() {


    return(
            <div style={{width: "295px",  height: "959px", paddingTop: "30px"}}>
                <div className={StockCSS.menuHeader}>직원 관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/menu/registration" style={{textDecoration: "none" , color:"black"}} >사원 등록</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/menu/registOk" style={{textDecoration: "none" , color:"black"}}>사원 목록</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/menu/outE" style={{textDecoration: "none" , color:"black"}}>비활성화 신청 내역</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/menu/outEOK" style={{textDecoration: "none" , color:"black"}}>비활성화 완료</NavLink></div>

                <div className={StockCSS.menuHeader}>영업점 관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/menu/applyFormW" style={{textDecoration: "none" , color:"black"}}>영업점 계정 대기</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/menu/applyFormO" style={{textDecoration: "none" , color:"black"}}>영업점 목록</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/menu/outFormW" style={{textDecoration: "none" , color:"black"}}>비활성화 신청 내역</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/menu/outSOK" style={{textDecoration: "none" , color:"black"}}>비활성화 완료</NavLink></div>
            </div>
    )
}

export default Menubar;