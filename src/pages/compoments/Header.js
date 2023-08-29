import './Header.css'
import img from './logo-black1.png'
import {useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { decodeJwt } from '../../util/tokenUtils';
import { callLogoutAPI } from '../../apis/MemberAPICalls';
import login from '../Login/Login';
import Modal from 'react-modal';
import TodoApp from "../Todolist/TodoApp";
import './CoustomModal.css';
import { useUserContext } from "../Todolist/TodoContext";

const Header = () => {

    //const isLogin = false;
    const navigate = useNavigate();
    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch();
    // const loginMember = useSelector(state => state.memberReducer);
    // const accessToken = window.localStorage.getItem('accessToken');

    //토큰값 확인
    //나중에 지워주자
    // console.log("토큰값 : ", accessToken);

    const [login, setLogin] = useState(false);

    //토큰 정보 추출
    //const decodedToken = accessToken ? decodeJwt(accessToken) : null;

    const activestyle = {

        backgroundColor: '#8d8a6d'
    }


    // TodoList 모달 값
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { todoModal, setTodoModal } = useUserContext(); // Use todos and setTodos from the context

    //창띄울때  요거 NavLink to 에 location.pathname 넣으면 현재페이지 유지됩니다.
    const location = useLocation();

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
        navigate("/login", { replace: true })
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
                    <NavLink to="/main/home" style={({isActive}) => isActive? activestyle:undefined} className="home">
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
                    <NavLink to={ location.pathname } style={({isActive}) => isActive? activestyle:undefined} className="todo"
                             onClick={()=> setModalIsOpen(true)}>
                        +Todo
                    </NavLink>
                    <NavLink to="stock" style={({isActive}) => isActive? activestyle:undefined} className="stock">
                        재고관리
                    </NavLink>
                    <NavLink to="myPage" style={({isActive}) => isActive? activestyle:undefined} className="profile" onClick={ mypageHandler }>
                        <div className="profileImg" onClick={ mypageHandler }>
                        </div>
                        {/*{decodedToken ? (*/}
                        {/*    <h5 className="userName" style={{ marginTop: "-0.5px", fontSize: "16px" }}>*/}
                        {/*        {decodedToken.Name}님 안녕하세요!*/}
                        {/*    </h5>*/}
                        {/*) : (*/}
                        {/*    window.location="/login"*/}
                        {/*)}*/}
                    </NavLink>
                        <button onClick={onClickLogoutHandler} style={{marginRight: "-50px"}} className="logOut">
                            로그아웃
                        </button>
                </div>
            </div>


            {/*투두 리스트 모달창 띄우기 */}
            {modalIsOpen && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    className={`customModalStyle ${modalIsOpen? 'isOpen':''}`}
                    // contentLabel="Modal"
                >
                    <div style={{ width:"500px", height:"500px", margin:"60px auto"}}>
                        <TodoApp todoModal={ todoModal } setTodoModal={ setTodoModal } />
                    </div>

                </Modal>
            )}




        </div>
        </>
    )
}

export default Header;