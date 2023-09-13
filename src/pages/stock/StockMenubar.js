import {NavLink, useNavigate} from 'react-router-dom';
import StockCSS from './Stock.module.css'
import {useEffect, useState} from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { decodeJwt } from '../../util/tokenUtils';

function StockMenubar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = window.localStorage.getItem('accessToken');

    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;

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

    if (role === "EMPLOYEE") {
    return(
            <div style={{width: "295px",  height: "959px", paddingTop: "30px"}}>
                <div className={StockCSS.menuHeader}>재고관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/check" className={StockCSS.navContents} >재고조회</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/orderlist" className={StockCSS.navContents}>신청내역관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/bill" className={StockCSS.navContents}>세금계산서</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/statistics" className={StockCSS.navContents}>매출통계</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/stockio" className={StockCSS.navContents}>입고 폐기 등록</NavLink></div>

                <div className={StockCSS.menuHeader}>물품관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/productregist" className={StockCSS.navContents}>물품 신규등록</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/productdelete" className={StockCSS.navContents}>물품 불용등록</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/category" className={StockCSS.navContents}>카테고리 관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/standard" className={StockCSS.navContents}>규격 관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/unit" className={StockCSS.navContents}>단위 관리</NavLink></div>
         </div>
    )
    } else if (role === "STORE") {
        return(
            <div style={{width: "295px",  height: "959px", paddingTop: "30px"}}>
                <div className={StockCSS.menuHeader}>발주관리</div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/order" className={StockCSS.navContents}>발주신청</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/myorderlist" className={StockCSS.navContents}>신청내역관리</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/mybill" className={StockCSS.navContents}>세금계산서</NavLink></div>
                <div className={StockCSS.menuContents}><NavLink to="/stock/mystatistics" className={StockCSS.navContents}>발주통계</NavLink></div>
            </div>
        )
    }
}

export default StockMenubar;