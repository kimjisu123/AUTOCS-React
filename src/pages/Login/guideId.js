import img from './loginMain.png'
import './guideId.css'
import {Link, Navigate} from "react-router-dom";
import React from "react";

const GuideId = () => {

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

                    <h1 style={{ color: "#1C2C10" }}>XXX님의 아이디는</h1>
                    <div className="separator" style={{width: "40%"}}></div>

                    <h3 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>
                        아이디 안내
                    </h3>


                    <Link to="/login" type="button" className="ok">로그인하러가기</Link>
                </main>
            </div>
        </div>
    )
}

export default GuideId;