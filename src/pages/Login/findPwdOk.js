import './findIdOk.css'
import img from './loginMain.png'
import {Link, Navigate} from "react-router-dom";
import React from "react";

const FindPwdOk = () => {

    // 로그인 상태일 시 페이지로 접근 방지
    const Token = localStorage.getItem('accessToken');
    if (Token) {
        return <Navigate to="/" replace />;
    }

    return (
        <div style={{backgroundColor: "#1C2C10"}}>
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>인증번호를 입력해주세요</h1>
                    <div className="separator" style={{width: "60%"}}></div>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>인증번호</h4>
                    <input className="lo" type="text" id="no" name="no" required />

                    <Link to="/login/fPOk/guidePwd" className="guideId">확인</Link>
                </main>
            </div>
        </div>
    )
}

export default FindPwdOk;