import updateCSS from './UpdatePW.module.css';
import React, {useCallback, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import UpdatePWok from "./UpdatePWok";
import { decodeJwt } from '../../util/tokenUtils';
import {callPostPwdCheckAPI, callPutChangePwdAPI} from "../../apis/MypageAPICalls";

import {useSelector} from "react-redux";

function UpdatePW(resultMessage) {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    //비밀번호 입력 값
    const [checkPw, setCheckPw ] = useState(''); // 기존비밀번호 입력
    const [checkResult, setCheckResult] = useState(null); // 기존 비밀번호의 결과값
    const [newPwd, setNewPwd] = useState('');  // 새 비밀번호
    const [newPwCheck , setNewPwCheck] = useState(''); // 새 비밀번호확인
    const [ableinput , setAbleinput] = useState('true');

    // 메세지 확인 오류 메세지 저장
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

    //유효성 검사
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

    // 회원 정보 가지고 오기
    const accessToken = window.localStorage.getItem('accessToken');
    const memberTodoList = useSelector(state => state.myPageReducer);
    const memberNo = memberTodoList.data.memberNo;


    console.log("토큰값 : ", accessToken);

    useEffect(() => {

        const decodedToken = decodeJwt(
            window.localStorage.getItem('accessToken')
        );
        console.info("memberTodoList =========== {} ", memberTodoList);
    }, []);




    // 비밀번호 확인 확인 함수
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
                if(response === "true"){setAbleinput()};
                console.info("메세지. {} ", checkResult );
            } catch (error) {
                // 오류 처리
                console.error("비밀번호 확인 오류:", error);
            }

        }


    },[memberNo]);


    // 새비밀번호 유효성 검사
    const onNewpwd = useCallback(  e=> {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const newPw = e.target.value;
        console.log(e.target);
        console.log(e.target.value)
        console.log('------------- ', newPwd)
        setNewPwd(newPw);
        console.info("newPw  ", newPw );
        if(!passwordRegex.test(newPw)){
            setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요');
            setIsPassword(false);
            console.info("새 비밀번호 입력 실패 {} ");
        } else {
            setPasswordMessage('안전한 비밀번호 입니다. ');
            setIsPassword(true);

            console.info("새 비밀번호 입력 성공 ");
        }
    },[newPwd])


    // 새 비밀번호 확인
    const onNewPwdConfirm = useCallback(e => {
        const newPwConfirm = e.target.value;
        setNewPwCheck(newPwConfirm);

        console.info("newPwd", newPwd);
        console.info("newPwConfirm ", newPwConfirm);
        if(newPwd === newPwConfirm) {
            setPasswordConfirmMessage('비밀번호가 일치합니다. ');
            setIsPasswordConfirm(true)
            console.info("비밀번호 일치 {} ");
        } else {
            setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
            setIsPasswordConfirm(false);
            console.info("비밀번호가 일치하지 않습니다. ");
        }

    },[newPwd])



    // 비밀번호 변경 제출
    const onChangePwd = async () => {
            console.log('NewPwCheck ====>', newPwCheck)
            console.log('newPwd =======>', newPwd);
        try {
            const response = await callPutChangePwdAPI(memberNo,newPwd);
            setCheckResult(response);
            if(response === "true"){setAbleinput()};
            console.info("메세지. {} ", checkResult );
        } catch (error){
            console.error(error)
        }
    }

    return (
        <>
            <div className={updateCSS.updatePwModal}>
                    <div className={updateCSS.changePwPage}>
                        {/*<form className="" onSubmit={ onChangePwd }>*/}
                            <input type="hidden" value="비밀번호 변경"/>
                                <div className={updateCSS.inputBox}>
                                    <div>
                                        <label htmlFor="currentPW">현재 비밀번호</label>
                                        <input type="password" className="currentPW" placeholder="현재 비밀번호를 입력해주세요" autoFocus onChange={onChange} value={checkPw}/>
                                        {/*비밀번호 확인 */}
                                        {checkResult && checkResult == "true"? <p style={{color:"green",margin:"3px"}}>비밀번호가 일치합니다.</p> : checkResult == "false"? <p style={{color:"red",margin:"3px"}}>비밀번호가 일치하지 않습니다.</p> : ''}
                                    </div>
                                    <div className={updateCSS.boxMargin2}>
                                        <label htmlFor="newpw">새 비밀번호 입력</label>
                                        {/*비밀번호 가 일치하지 않으면 입력창이 활성화 되지 않는다.*/}
                                        <input
                                            disabled={ableinput}
                                            onChange= { onNewpwd }
                                            type="password"
                                            className="newpw"
                                            placeholder="새 비밀번호를 입력해주세요"
                                            autoComplete="off"
                                        />
                                        {newPwd.length > 0 && (
                                            <p className={`message ${isPassword ? 'success' : 'error'}`} style={isPassword? {color:"green",margin:"3px"} : {color:"red",margin:"3px"}}>{passwordMessage}</p>
                                        )}
                                    </div>
                                    <div className={updateCSS.checkMail}>
                                        <label htmlFor="newPwCheck">비밀번호 확인</label>
                                        <input
                                            onChange={ onNewPwdConfirm }
                                            disabled={ableinput}
                                            type="password"
                                            className="newPwCheck"
                                            placeholder="다시한번 입력해주세요"
                                            autoComplete="off"
                                        />
                                        {newPwCheck.length > 0 && (
                                            <p className={`message ${isPasswordConfirm ? '.success' : '.error'}`} style={isPasswordConfirm? {color:"green",margin:"3px"} : {color:"red",margin:"3px"}}>{passwordConfirmMessage}</p>
                                        )}
                                    </div>
                                    <div className={updateCSS.buttons}>
                                        <div>
                                            <button
                                                // 비밀번호 유효성이 확인이 되어야 버튼 활성화가 된다.
                                                style={isPassword && isPasswordConfirm ? {background:"#2A3C1E"} : {background:"gray"}}
                                                disabled={!(isPassword && isPasswordConfirm)}
                                                type='submit' className={updateCSS.findingButton}
                                                onClick={ onChangePwd }
                                            >
                                                <span className={ updateCSS.longinName }>비밀번호 변경</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        {/*</form>*/}
                    </div>
            </div>

            {/*{modalIsOpen && (*/}
            {/*    <Modal*/}
            {/*        isOpen={modalIsOpen}*/}
            {/*        onRequestClose={() => setModalIsOpen(false)}*/}
            {/*        className={`customModalStyle ${modalIsOpen ? 'isOpen' : ''}`}*/}
            {/*    >*/}
            {/*        <UpdatePWok/>*/}
            {/*    </Modal>*/}
            {/*)}*/}
        </>

    )
}
export default UpdatePW;