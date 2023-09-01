import './Header.css';
import img from './logo-black1.png';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { decodeJwt } from '../../util/tokenUtils';
import { callLogoutAPI } from '../../apis/MemberAPICalls';
import login from '../Login/Login';
import Modal from 'react-modal';
import TodoApp from "../Todolist/TodoApp";
import './CoustomModal.css';
import { useUserContext } from "../Todolist/TodoContext";
import Swal from 'sweetalert2';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = window.localStorage.getItem('accessToken');

    const [login, setLoginModal] = useState(false);

    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;
    const department = decodedToken ? decodedToken.Department : null;
    // const state = decodedToken ? decodedToken.state : null;
    //
    // //비활성화 계정 접근 금지
    // if (state === 'N    ') {
    //     navigate('/login');
    // }

    //토큰값
    //console.log("토큰값>>>>>>>>>>>>>>>>>" + accessToken);
    //console.log("accessToken>>>>>>>>>>>>>>>>>" + accessToken.iat);
    //console.log("decodedToken>>>>>>>>>>>>>>>>>" + decodedToken.iat);


    //창띄울때  요거 NavLink to 에 location.pathname 넣으면 현재페이지 유지됩니다.
    const location = useLocation();

    const getMenuItems = (role, department) => {

        let menuItems = [
            { to: "/main", label: "홈" },
            { to: "/dashboard", label: "게시판" },
            { to: "calendar", label: "캘린더" },
            { to: "todo", label: "+Todo" }
        ];

        if (role === "EMPLOYEE") {
            menuItems.push(
                { to: "chart", label: "조직도" },
                { to: "approval", label: "전자결재" },
                { to: "management", label: "근태관리" },
                { to: "mail", label: "쪽지함" }
            );

            if (department === "인사부") {
                menuItems.push({ to: "menu/registration", label: "계정관리" });
                //나중에 마이페이지 안으로 넣어줘야함
                menuItems.push({ to: "outM", label: "계정비활성화" });
            }
            if (department === "경영부") {
                menuItems.push({ to: "stock", label: "재고관리" });
            }
        } else if (role === "STORE") {
            menuItems.push(
                { to: "stock", label: "재고관리" },
                //나중에 마이페이지 안으로 넣어줘야함
                { to: "outS", label: "계정비활성화" }

            );
        }

        return menuItems;
    };

    const menuItems = getMenuItems(role, department);


    // TodoList 모달 값
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { todoModal, setTodoModal } = useUserContext();

    // //시간 지나면 로그인 만료(토큰 비우기)
    // const handleTokenExpiration = () => {
    //     const fifteenSecondsLater = decodedToken.iat * 1000 + (15 * 1000);
    //
    //     if (decodedToken.exp * 1000 < Date.now()) {
    //         setLoginModal(true);
    //     } else if (fifteenSecondsLater < Date.now()) {
    //         // 토큰이 15초가 지나면 로그아웃 처리
    //         window.localStorage.removeItem('accessToken');
    //         dispatch(callLogoutAPI());
    //         alert('세션이 만료되어 로그아웃됩니다.');
    //         navigate('/login', { replace: true });
    //     }
    // };
    //
    // useEffect(() => {
    //     console.log(decodedToken.iat);
    //     const interval = setInterval(() => {
    //         handleTokenExpiration();
    //     }, 3000); // 3초마다 체크
    //
    //     return () => clearInterval(interval);
    // }, []);


    const mypageHandler = () => {
        // const token = decodeJwt(window.localStorage.getItem("accessToken"));
        //
        // if (token.exp * 1000 < Date.now()) {
        //     setLoginModal(true);
        //     return;
        // }

        navigate("/마이페이지경로", { replace: true });
    };

    const onClickLogoutHandler = () => {
        window.localStorage.removeItem('accessToken');

        Swal.fire({
            icon: 'info',
            title: 'Loout...',
            text: '로그인 화면으로 이동합니다.',
        })

        dispatch(callLogoutAPI());
        navigate("/login", { replace: true });
    };

    const handleTodoClick = () => {
        setModalIsOpen(true);
    };

    return (
        <>
            {login ? <login setLoginModal={setLoginModal} /> : null}
            <div className="headerWrapper">
                <div className="topNav">
                    <NavLink to="/main">
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
                            <NavLink
                                key={menuItem.to}
                                to={menuItem.to}
                                className={`menu ${menuItem.to === location.pathname ? 'activeMenu' : ''}`}
                            >
                                {menuItem.label}
                            </NavLink>
                        ))}
                        <div className="profileAndLogout">
                            <NavLink
                                to="myPage"
                                className={`profile ${'/myPage' === location.pathname ? 'activeProfile' : ''}`}
                                onClick={mypageHandler}
                            >
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

            <NavLink
                to={location.pathname}
                className={`menu todo ${location.pathname === '/todo' ? 'activeMenu' : ''}`}
                onClick={() => setModalIsOpen(true)}
            >
                +Todo
            </NavLink>

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
        </>
    );
};

export default Header;