import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import Modal from "react-modal";
import UpdatePwApp from "../UpdatePwApp";


function MypageEmpMenubar(){

    //  모달 값
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <div className="menubar" style={{width: "295px",  height: "959px", paddingTop: "30px"}}>
                <div className="myPgateNavTitle" style={{marginLeft:"auto", marginRight:"auto",textAlign:"center"}}><h1>마이페이지</h1></div>
                <div className="documentForm">
                    사원 정보
                </div>
                <div className="purchase">사원정보 변경</div>
                <div className="purchase"><button style={{border:"0", outline:"0", background:"none"}} onClick={() => setModalIsOpen(true)}>비밀번호 변경</button></div>
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