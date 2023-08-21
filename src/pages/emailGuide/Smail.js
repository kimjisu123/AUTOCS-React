import './Mmail.css'
import img from './loginMain.png'
import React from 'react';

const Smail = () => {
    return (
        <div style={{backgroundColor: "#1C2C10"}}>
        <div className="border">
            <main>
                <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                <h1 style={{ color: "#1C2C10" }}>계정 안내</h1>
                <div className="separator" style={{width: "30%"}}></div>

                <h2>XXX님(영업점)</h2>

                <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white"}}>아이디 : </h4>
                <h4 style={{ marginBottom: "10px", marginTop: "5px", background: "white" }}>임시 비밀번호 : </h4>

            </main>
        </div>
        </div>
    )
}

export default Smail;