import updateCSS from './UpdatePW.module.css';

function UpdatePW() {

    return (
        <>
            <div className={updateCSS.updatePwModal}>
                    <div className={updateCSS.changePwPage}>
                        <form className="" onSubmit="">
                            <input type="hidden" value="아이디 찾기"/>
                                <div className={updateCSS.inputBox}>
                                    <div>
                                        <label htmlFor={updateCSS.userId}>현재 비밀번호</label>
                                        <input type="text" className={updateCSS.userId} placeholder="현재 비밀번호를 입력해주세요" autoFocus value=""/>
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
                                            <button className={updateCSS.findingButton} type="submit">
                                                <span className={ updateCSS.longinName }>비밀번호 변경</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        </form>
                    </div>
            </div>
        </>

    )
}
export default UpdatePW;