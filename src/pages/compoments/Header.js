import './Header.css'
import img from './logo-black1.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { decodeJwt } from '../../util/tokenUtils';

const Header = () => {

    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);  // 저장소에서 가져온 loginMember 정보
    const isLogin = window.localStorage.getItem('accessToken');    // Local Storage 에 token 정보 확인
    const [search, setSearch] = useState('');

    const [loginModal, setLoginModal] = useState(false);

    const activestyle = {

        backgroundColor: '#8d8a6d'
    }

    return (
        <div className="headerWrapper">
            <div className="topNav">
                <NavLink to="/"><div className="gohome">
                    <div className="logo">
                        <img src={ img } style={{ width: "40px", marginTop: "2px"}}/>
                    </div>
                    <div className="officName">
                        AUTOCSS
                    </div>
                </div></NavLink>
                <div style={{display: "flex", justifyContent: "space-between", width: "100%", paddingRight: "50px"}}>
                    <h5 className="userName">님 안녕하세요!</h5>
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
                    <NavLink to="myPage" style={({isActive}) => isActive? activestyle:undefined} className="profile">
                        <div className="profileImg">

                        </div>
                        마이페이지
                    </NavLink>
                    <NavLink to="/" style={({isActive}) => isActive? activestyle:undefined} className="logOut">
                        <button>
                            로그아웃
                        </button>
                    </NavLink>

                </div>
            </div>
        </div>


    )
}

export default Header;