import './Header.css'
import img from './logo-black1.png'
import {NavLink, useLocation} from 'react-router-dom';
import React, { useState } from "react";
import Modal from 'react-modal';
import TodoApp from "../Todolist/TodoApp";
import './CoustomModal.css';
import { useUserContext } from "../Todolist/TodoContext";

const Header = () => {

    const activestyle = {

        backgroundColor: '#8d8a6d'
    }

    // TodoList 모달 값
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { todoModal, setTodoModal } = useUserContext(); // Use todos and setTodos from the context

    //창띄울때  요거 NavLink to 에 location.pathname 넣으면 현재페이지 유지됩니다.
    const location = useLocation();

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
                <div style={{display: "flex", justifyContent: "space-between", width: "100%", paddingRight: "10px"}}>
                    <NavLink to="/home" style={({isActive}) => isActive? activestyle:undefined} className="home">
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
                    <NavLink to="myPage" style={({isActive}) => isActive? activestyle:undefined} className="profile">
                        <div className="profileImg">

                        </div>
                        마이페이지
                    </NavLink>
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
                    <div style={{ width:"500px", height:"500px"}}>
                        <TodoApp todoModal={ todoModal } setTodoModal={ setTodoModal } />
                    </div>

                </Modal>
            )}




        </div>


    )
}

export default Header;