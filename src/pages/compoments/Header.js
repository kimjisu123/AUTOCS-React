import './Header.css'
import img from './logo-black1.png'
import {useEffect, useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { decodeJwt } from '../../util/tokenUtils';
import { callLogoutAPI } from '../../apis/MemberAPICalls';
import login from '../Login/Login';

const Header = () => {

    //const isLogin = false;
    const navigate = useNavigate();
    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);
    const accessToken = window.localStorage.getItem('accessToken');

    //나중에 지워주자
    console.log("토큰값 : ", accessToken);

    const [login, setLogin] = useState(false);

    //토큰 정보 추출
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;

    useEffect(() => {

            console.log(loginMember);
            if(loginMember.status === 200){
                console.log("[Login] Login SUCCESS ||||||||||||||| {}", loginMember);
                navigate("/main", { replace: true });
            }
        }
        ,[loginMember]);

    const activestyle = {

        backgroundColor: '#8d8a6d'
    }

    const mypageHandler = () => {

        // 토큰이 만료되었을때 다시 로그인
        const token = decodeJwt(window.localStorage.getItem("accessToken"));
        console.log('[Header] mypageHandler token : ', token);

        if (token.exp * 1000 < Date.now()) {
            setLogin(true);
            return ;
        }

        navigate("/마이페이지경로", { replace: true });
    }

    const onClickLogoutHandler = () => {
        window.localStorage.removeItem('accessToken');
        //로그아웃
        dispatch(callLogoutAPI());

        alert('로그인 화면으로 이동합니다.');
        navigate("/", { replace: true })
        window.location.reload();
    }

    return (
        <>
            { login ? <login setLoginModal={ setLogin }/> : null}
        <div className="headerWrapper">
            <div className="topNav">
                <NavLink to="/"><div className="gohome">
                    <div className="logo">
                        <img src={ img } style={{ width: "40px", marginTop: "6px", marginRight: "5px", marginLeft: "10px"}}/>
                    </div>
                    <div className="officName">
                        AUTOCSS
                    </div>
                </div></NavLink>
                <div style={{display: "flex", justifyContent: "space-between", width: "100%", paddingRight: "80px"}}>
                    <NavLink to="/" style={({isActive}) => isActive? activestyle:undefined} className="home">
                        홈
                    </NavLink>
                    <NavLink to="/dashborad" style={({isActive}) => isActive? activestyle:undefined} className="dashboard">
                        게시판
                    </NavLink>
                    <NavLink to="chart" style={({isActive}) => isActive? activestyle:undefined} className="chart">
                        조직도
                    </NavLink>
                    <NavLink to="approval" style={({isActive}) => isActive? activestyle:undefined} className="approval">
                        전자결재
                    </NavLink>
                    <NavLink to="calendar" style={({isActive}) => isActive? activestyle:undefined} className="calendar">
                        캘린더
                    </NavLink>
                    <NavLink to="management" style={({isActive}) => isActive? activestyle:undefined} className="management">
                        근태관리
                    </NavLink>
                    <NavLink to="todo" style={({isActive}) => isActive? activestyle:undefined} className="todo">
                        +Todo
                    </NavLink>
                    <NavLink to="stock" style={({isActive}) => isActive? activestyle:undefined} className="stock">
                        재고관리
                    </NavLink>
                    <NavLink to="myPage" style={({isActive}) => isActive? activestyle:undefined} className="profile" onClick={ mypageHandler }>
                        <div className="profileImg" onClick={ mypageHandler }>
                        </div>
                        <h5 className="userName" style={{marginTop: "-0.5px", fontSize: "16px"}}>{decodedToken.Name}님 안녕하세요!</h5>
                    </NavLink>
                    <NavLink to="/" style={({isActive}) => isActive? activestyle:undefined} className="logOut">
                        <button onClick={onClickLogoutHandler} style={{marginRight: "-50px"}}>
                            로그아웃
                        </button>
                    </NavLink>

                </div>
            </div>
        </div>
        </>
    )
}

export default Header;