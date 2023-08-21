import img from './loginMain.png'
import './outMForm.css'
import {Link} from "react-router-dom";
import React from "react";


const OutSForm = () => {

    return (
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>계정 비활성화 신청</h1>
                    <div className="separator" style={{width: "50%"}}></div>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>영업점 주소</h4>
                    <input className="lo" type="text" id="address" name="address" required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>대표자명</h4>
                    <input className="lo" type="text" id="name" name="name" required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>계약 종료/해지 확인서</h4>
                    <input className="lo" type="file" id="file" name="file" required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>이메일</h4>
                    <input className="lo" type="text" id="email" name="email" required />

                    {/*신청 되었다는 알림 띄워주기 */}
                    <button type="button" className="regist">신청하기</button>
                </main>
            </div>
    )
}

export default OutSForm;