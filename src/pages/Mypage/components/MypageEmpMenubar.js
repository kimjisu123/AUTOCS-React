import {Link, NavLink} from "react-router-dom";
import React, {useState} from "react";
import Modal from "react-modal";
import UpdatePwApp from "../UpdatePwApp";
import style from '../../approvalPage/approval.module.css'

function MypageEmpMenubar(){

    //  모달 값
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <div className={style.menubar} style={{width: "295px", height: "890px",  paddingTop: "30px"}}>
                <Link to='/myPage' style={{textDecoration:"none"}}><div className={style.newApp}>마이페이지</div></Link>
                <br/><br/>
                {/*<div className={style.documentForm}>*/}
                {/*    사원 정보*/}
                {/*</div>*/}
                {/*<div className={style.purchase}><button style={{border:"none"}} onClick={() => setModalIsOpen(true)}>비밀번호 변경</button></div>*/}
            </div>

            {/*비밀번호 변경 모달창 띄우기 */}
            {modalIsOpen && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    className={`customModalStyle ${modalIsOpen ? 'isOpen' : ''}`}
                >
                    <UpdatePwApp/>
                </Modal>
            )}
        </>


    )
}
export default MypageEmpMenubar;