import './Header.css';
import img from './logo-black1.png';
import { useEffect, useState } from 'react';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decodeJwt } from '../../util/tokenUtils';
import { callLogoutAPI } from '../../apis/MemberAPICalls';
import login from '../Login/Login';
import Modal from 'react-modal';
import TodoApp from "../Todolist/TodoApp";
import './CoustomModal.css';
import { useUserContext } from "../Todolist/TodoContext";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = window.localStorage.getItem('accessToken');

    const [login, setLogin] = useState(false);

    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;

    //창띄울때  요거 NavLink to 에 location.pathname 넣으면 현재페이지 유지됩니다.
    const location = useLocation();

    const getMenuItems = (role) => {
        if (role === "EMPLOYEE") {
            return [
                { to: "/home", label: "홈" },
                { to: "/dashboard", label: "게시판" },
                { to: "chart", label: "조직도" },
                { to: "approval", label: "전자결재" },
                { to: "calendar", label: "캘린더" },
                { to: "management", label: "근태관리" },
                // { to: "todo", label: "+Todo" },
                { to: "mail", label: "쪽지함" }
            ];
        } else if (role === "STORE") {
            return [
                { to: "/home", label: "홈" },
                { to: "/dashboard", label: "게시판" },
                { to: "calendar", label: "캘린더" },
                // { to: "todo", label: "+Todo" },
                { to: "stock", label: "재고관리" }
            ];
        }
        return [];
    };

    const menuItems = getMenuItems(role);

    const activestyle = {
        backgroundColor: '#8d8a6d'
    };


    // TodoList 모달 값
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { todoModal, setTodoModal } = useUserContext(); // Use todos and setTodos from the context



    const mypageHandler = () => {
        const token = decodeJwt(window.localStorage.getItem("accessToken"));

        if (token.exp * 1000 < Date.now()) {
            setLogin(true);
            return;
        }

        navigate("/마이페이지경로", { replace: true });
    };

    const onClickLogoutHandler = () => {
        window.localStorage.removeItem('accessToken');
        dispatch(callLogoutAPI());

        alert('로그인 화면으로 이동합니다.');
        navigate("/login", { replace: true });
        window.location.reload();
    };

    const handleTodoClick = () => {
        setModalIsOpen(true);
    };

    return (
        <>
            {login ? <login setLoginModal={setLogin} /> : null}
            <div className="headerWrapper">
                <div className="topNav">
                    <NavLink to="/">
                        <div className="gohome">
                            <div className="logo">
                                <img src={img} style={{ width: "40px", marginTop: "6px", marginRight: "5px", marginLeft: "10px" }} />
                            </div>
                            <div className="officName">
                                AUTOCSS
                            </div>
                        </div>
                    </NavLink>
                    <div className="menuContainer">
                        {menuItems.map((menuItem) => (
                            <NavLink key={menuItem.to} to={menuItem.to} isActive={(match, location) => match || location.pathname === menuItem.to} style={({ isActive }) => isActive ? activestyle : undefined} className="menu"onClick={menuItem.to === "/todo" ? handleTodoClick : undefined}>
                                {menuItem.label}
                            </NavLink>

                        ))}
                        <NavLink
                            to={location.pathname}
                            className={`menu todo ${location.pathname === '/todo' ? 'activeMenu' : ''}`}
                            onClick={() => setModalIsOpen(true)}
                        >
                            +Todo
                        </NavLink>
                        <div className="profileAndLogout">
                        <NavLink to="myPage" isActive={(match, location) => match || location.pathname === '/myPage'} style={({ isActive }) => isActive ? activestyle : undefined} className="profile" onClick={mypageHandler}>
                            <div className="profileImg" onClick={mypageHandler}></div>
                            {decodedToken ? (
                                <h5 className="userName" style={{ marginTop: "-0.5px", fontSize: "16px" }}>
                                    {decodedToken.Name}님 안녕하세요!
                                </h5>
                            ) : (
                                window.location = "/login"
                            )}
                        </NavLink>
                        <button onClick={onClickLogoutHandler} style={{ marginRight: "-50px" }} className="logOut">
                            로그아웃
                        </button>
                    </div>
                </div>
                </div>
            </div>



            {/*<NavLink to={ location.pathname } style={({isActive}) => isActive? activestyle:undefined} className="todo"*/}
            {/*         onClick={()=> setModalIsOpen(true)}>*/}
            {/*    +Todo*/}
            {/*</NavLink>*/}

            {/*투두 리스트 모달창 띄우기 */}
            {modalIsOpen && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    className={`customModalStyle ${modalIsOpen? 'isOpen':''}`}
                    overlayClassName="ReactModal__Overlay"
                    contentLabel="Modal"
                >
                    <div style={{ width:"600px", height:"500px", margin:"60px auto"}}>
                        <TodoApp todoModal={ todoModal } setTodoModal={ setTodoModal } />
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Header;