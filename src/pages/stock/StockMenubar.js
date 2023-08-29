import { NavLink } from 'react-router-dom';
import StockCSS from './Stock.module.css'
import {useEffect, useState} from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { decodeJwt } from '../../util/tokenUtils';

function StockMenubar() {

    // //const isLogin = false;
    // // const navigate = useNavigate();
    // // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    // const dispatch = useDispatch();
    // const loginMember = useSelector(state => state.memberReducer);
    // const accessToken = window.localStorage.getItem('accessToken');
    //
    // //나중에 지워주자
    // console.log("토큰값 : ", accessToken);
    //
    // const [login, setLogin] = useState(false);
    //
    // //토큰 정보 추출
    // const decodedToken = accessToken ? decodeJwt(accessToken) : null;


    return(
            <div style={{width: "295px",  height: "959px", paddingTop: "30px"}}>
                <div className={StockCSS.menuHeader}>재고관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/check" style={{textDecoration: "none" , color:"black"}} >재고조회</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/orderlist" style={{textDecoration: "none" , color:"black"}}>신청내역관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/bill" style={{textDecoration: "none" , color:"black"}}>세금계산서</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/statistics" style={{textDecoration: "none" , color:"black"}}>매출통계</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/stockio" style={{textDecoration: "none" , color:"black"}}>입고 폐기 등록</NavLink></div>

                <div className={StockCSS.menuHeader}>물품관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/productregist" style={{textDecoration: "none" , color:"black"}}>물품 신규등록</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/productdelete" style={{textDecoration: "none" , color:"black"}}>물품 불용등록</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/category" style={{textDecoration: "none" , color:"black"}}>카테고리 관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/standard" style={{textDecoration: "none" , color:"black"}}>규격 관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/unit" style={{textDecoration: "none" , color:"black"}}>단위 관리</NavLink></div>

                <div className={StockCSS.menuHeader}>발주관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/order" style={{textDecoration: "none" , color:"black"}}>발주신청</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/myorderlist" style={{textDecoration: "none" , color:"black"}}>신청내역관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/mybill" style={{textDecoration: "none" , color:"black"}}>세금계산서</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/mystatistics" style={{textDecoration: "none" , color:"black"}}>발주통계</NavLink></div>
            </div>
    )
}

export default StockMenubar;