import updateCSS from './UpdatePW.module.css';
import React, {useCallback, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import UpdatePwApp from "./UpdatePwApp";
import UpdatePWok from "./UpdatePWok";
import { decodeJwt } from '../../util/tokenUtils';
import {POST_CHECKPWD} from "../../modules/MypageModule";
import {callPostPwdCheckAPI} from "../../apis/MypageAPICalls";
import {callGetMemberTodoAPI} from "../../apis/TodoAPICalls";
import {useSelector} from "react-redux";

function UpdatePW(resultMessage) {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [checkPw, setCheckPw ] = useState(''); // 새비밀번호
    const [checkResult, setCheckResult] = useState(null);
    const [ newPwCheck , setNewPwCheck] = useState(''); // 새 비밀번호확인
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const memberTodoList = useSelector(state => state.myPageReducer);
    const memberNo = memberTodoList.data.memberNo;

    console.log("토큰값 : ", accessToken);

    useEffect(() => {

        const decodedToken = decodeJwt(
            window.localStorage.getItem('accessToken')
        );
        console.info("토큰값",decodedToken.memberNo);
        console.info("리스트",memberTodoList.data.memberNo);


    }, []);




    const onChange= useCallback(
        async e => {
        const checkPw = e.target.value;
        console.info(e.target.value);
        setCheckPw(checkPw); // 입력된 값을 상태로 업데이트
        console.info("checkPw =========== {} ", checkPw);
        console.info("memberNo =========== {} ", memberNo);

        if(memberNo !== null && checkPw) {
            try{
                const response = await callPostPwdCheckAPI(memberNo,checkPw);

                setCheckResult(response);

                    console.info("메세지. {} ", checkResult );
                    // setCheckResult(resultMessage); // 서버에서 받은 결과 메시지를 상태에 설정
                // } else {
                //     throw new Error("서버 응답 오류: 메시지 없음");


            } catch (error) {
                // 오류 처리
                console.error("비밀번호 확인 오류:", error);
            }

        }


    },[memberNo]);


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
                                        <label htmlFor="currentPW">현재 비밀번호</label>
                                        <input type="password" className="currentPW" placeholder="현재 비밀번호를 입력해주세요" autoFocus onChange={onChange} value={checkPw}/>
                                        {console.log("checkResult==========================",checkResult)}
                                        {checkResult && checkResult == "true"? <p style={{color:"green"}}>비밀번호가 일치합니다.</p> : checkResult == "false"? <p style={{color:"red"}}>비밀번호가 일치하지 않습니다.</p> : ''}
                                        {/*<span id="password-error" class="error-message"/>*/}
                                    </div>
                                    <div className={updateCSS.boxMargin2}>
                                        <label htmlFor="newpw">새 비밀번호 입력</label>
                                        <input type="password" className="newpw" placeholder="새 비밀번호를 입력해주세요" autoComplete="off" />
                                        <span id="password-error" class="error-message"/>
                                    </div>
                                    <div className={updateCSS.checkMail}>
                                        <label htmlFor="newPwCheck">비밀번호 확인</label>
                                        <input type="password" className="newPwCheck" placeholder="다시한번 입력해주세요" autoComplete="off" />
                                        <span id="password-error" class="error-message"/>
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