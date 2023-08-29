import './Mmail.css'
import img from './loginMain.png'
import React from 'react';
import {Navigate} from "react-router-dom";

const Mmail = () => {

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

                <h1 style={{ color: "#1C2C10" }}>계정 안내</h1>
                <div className="separator" style={{width: "30%"}}></div>

                <h2>XXX사원님(부서명)</h2>

                <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white"}}>아이디 : </h4>
                <h4 style={{ marginBottom: "10px", marginTop: "5px", background: "white" }}>임시 비밀번호 : </h4>

            </main>
        </div>
        </div>
    )
}

export default Mmail;