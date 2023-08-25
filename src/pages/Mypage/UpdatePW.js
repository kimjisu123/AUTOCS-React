import updateCSS from './UpdatePW.module.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import UpdatePwApp from "./UpdatePwApp";
import UpdatePWok from "./UpdatePWok";

function UpdatePW() {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleButtonClick = () => {
         // 페이지 이동
        navigate('/main/pwpopup');
    };

    return (
        <>
            <div className={updateCSS.updatePwModal}>
                    <div className={updateCSS.changePwPage}>
                        <form className="" onSubmit="">
                            <input type="hidden" value="비밀번호 변경"/>
                                <div className={updateCSS.inputBox}>
                                    <div>
                                        <label htmlFor={updateCSS.userId}>현재 비밀번호</label>
                                        <input type="password" className={updateCSS.userId} placeholder="현재 비밀번호를 입력해주세요" autoFocus value=""/>
                                    </div>
                                    <div className={updateCSS.boxMargin2}>
                                        <label htmlFor="">새 비밀번호 입력</label>
                                        <input type="password" className="newpw" placeholder="새 비밀번호를 입력해주세요" autoComplete="off" value=""/>
                                    </div>
                                    <div className={updateCSS.checkMail}>
                                        <label className="">비밀번호 확인</label>
                                        <input type="password" className="newPwCheck" placeholder="다시한번 입력해주세요" autoComplete="off" value=""/>
                                    </div>
                                    <div className={updateCSS.buttons}>
                                        <div>
                                            <button type='button' className={updateCSS.findingButton} onClick={() => setModalIsOpen(true)}>
                                                <span className={ updateCSS.longinName }>비밀번호 변경</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        </form>
                    </div>
            </div>

            {/*비밀번호 변경 모달창 띄우기 */}
            {modalIsOpen && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    className={`customModalStyle ${modalIsOpen ? 'isOpen' : ''}`}
                >
                    <UpdatePWok/>
                </Modal>
            )}
        </>

    )
}
export default UpdatePW;