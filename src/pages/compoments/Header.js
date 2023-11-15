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
import Login from "../Login/Login";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

// 예제


const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = window.localStorage.getItem('accessToken');

    const [login, setLoginModal] = useState(false);

    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;
    const department = decodedToken ? decodedToken.Department : null;

    //로그인 세션만료 관련
    const iatTimestamp = decodedToken ? decodedToken.exp * 1000 : null;
    const currentTimestamp = Date.now();

    //토큰값
    //console.log("토큰값>>>>>>>>>>>>>>>>>" + accessToken);

    //창띄울때  요거 NavLink to 에 location.pathname 넣으면 현재페이지 유지됩니다.
    const location = useLocation();

    const [wsMessage, setWsMessage] = useState('');

    // 서버와 동일한 엔드포인트 url로 소켓 설정
    const socket = new SockJS('/webSocket');
    const stompClient = Stomp.over(socket);

    // 웹소켓 코드
    // 서버와 클라이언트 소켓 연결
    stompClient.connect({},  function (frame) {
        console.log('ConnectedTest: ' + frame);

        // 구독 설정
        stompClient.subscribe('/topic/mail', function (msg) {
            console.log('구독 중', msg);
            setWsMessage(msg.body)
        });

        // 값 요청
        const employeeNo = decodedToken.EmployeeNo;
        stompClient.send(`/app/mail/${employeeNo}`,{}, '{Test : test}');
    });



    const getMenuItems = (role, department) => {

        let menuItems = [

            // { to: "calendar", label: "캘린더" },
            // { to: "todo", label: "+Todo" }
        ];

        if (role === "EMPLOYEE") {
            menuItems.push(
                { to: "/main", label: "홈" },
                { to: "/board/notieE", label: "게시판" },
                { to: "chart", label: "조직도" },
                { to: "approval", label: "전자결재" },
                { to: "workstatus", label: "근태관리" },
                { to: `/mail/${decodedToken.EmployeeNo}`, label: `쪽지함 ` },
                { Notifications : "Notifications", label:`${wsMessage}` },
                { to: "stock", label: "재고관리" },
                { to: `/myPage`, label: "마이페이지" },
            );


            if (department === "인사부") {
                menuItems.push({ to: "menu/registration", label: "인사관리" });
            }
            // if (department === "경영부") {
            //     menuItems.push({ to: "stock", label: "재고관리" });
            // }
        } else if (role === "STORE") {
            menuItems.push(
                { to: "/mainstore", label: "홈" },
                { to: "/board/notieM", label: "게시판" },
                { to: "stock", label: "발주관리" },
                { to: `/mypagestore`, label: "마이페이지" },
            );
        }

        return menuItems;
    };

    const menuItems = getMenuItems(role, department);


    // TodoList 모달 값
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { todoModal, setTodoModal } = useUserContext();

    useEffect(() => {
        const interval = setInterval(() => {
            handleTokenExpiration();
        }, 14 * 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, [currentTimestamp]);

    // 로그인 만료(토큰 비우기)
    const handleTokenExpiration = () => {

        if (currentTimestamp > iatTimestamp) {
            dispatch(callLogoutAPI());
            alert('세션이 만료되어 로그아웃됩니다.');
            navigate('/login', { replace: true });
        } else {
            setLoginModal(true);
        }
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
            {login ? <Login setLoginModal={setLoginModal} /> : null}
            <div className="headerWrapper">
                <div className="topNav">
                    { role === "EMPLOYEE" ? (<NavLink to="/main">
                        <div className="gohome">
                            <div className="logo">
                                <img src={img} style={{ width: "40px", marginTop: "6px", marginRight: "5px", marginLeft: "10px" }} />
                            </div>
                            <div className="officName">
                                AUTOCSS
                            </div>
                        </div>
                    </NavLink>) :(<NavLink to="/mainstore">
                        <div className="gohome">
                            <div className="logo">
                                <img src={img} style={{ width: "40px", marginTop: "6px", marginRight: "5px", marginLeft: "10px" }} />
                            </div>
                            <div className="officName">
                                AUTOCSS
                            </div>
                        </div>
                    </NavLink>)

                    }
                    <div className="menuContainer">
                        {menuItems.map((menuItem) => (
                            menuItem.Notifications === "Notifications" ?
                            <div style={ {color: "red", marginLeft:"-60px"} } >
                                {menuItem.label}
                            </div>:
                            <NavLink
                                key={menuItem.to}
                                to={menuItem.to}
                                className={`menu ${menuItem.to === location.pathname ? 'activeMenu' : ''}`}
                            >
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
                            {decodedToken ? (
                                <h5 className="userName" style={{ marginTop: "-0.5px", fontSize: "16px" }}>
                                    {decodedToken.Name}님 안녕하세요!
                                </h5>
                            ) : (
                                window.location = "/login"
                            )}
                            <button onClick={onClickLogoutHandler} style={{ marginRight: "-50px" }} className="logOut">
                                로그아웃
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*투두 리스트 모달창 띄우기 */}
            {modalIsOpen && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    className={`customModalStyle ${modalIsOpen? 'isOpen':''}`}
                    overlayClassName="ReactModal__Overlay"
                    contentLabel="Modal"
                >
                    <div style={{ width:"650px", margin:"60px auto",boxShadow:"2px 2px 10px #cdcec974"} }>
                        <TodoApp todoModal={ todoModal } setTodoModal={ setTodoModal } />
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Header;