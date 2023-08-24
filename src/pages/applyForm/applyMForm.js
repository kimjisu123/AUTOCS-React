import img from './loginMain.png'
import './applyMForm.css'
import {Link} from "react-router-dom";
import React from "react";

const ApplyMForm = () => {

    return (
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>계정 생성 신청</h1>
                    <div className="separator" style={{width: "40%"}}></div>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>이름</h4>
                    <input className="lo" type="text" id="name" name="name" required />

                    <h4 style={{ marginBottom: "10px", marginTop: "8px", background: "white" }}>부서</h4>
                    <select id="pos" name="department">
                        <option value="default">부서를 선택하세요</option>
                        <option value="H1">인사부</option>
                        <option value="F1">재무/회계부</option>
                        <option value="M1">경영부</option>
                        <option value="M2">마케팅부</option>
                        <option value="S1">영업부</option>
                        <option value="S2">서비스부</option>
                    </select>

                    <h4 style={{ marginBottom: "10px", marginTop: "20px", background: "white"}}>직급</h4>
                    <select id="pos" name="position">
                        <option value="default">직급을 선택하세요</option>
                        <option value="b1">부장</option>
                        <option value="c1">차장</option>
                        <option value="g1">과장</option>
                        <option value="d1">대리</option>
                        <option value="s1">사원</option>
                        <option value="I1">인턴</option>
                    </select>

                     {/*신청 되었다는 알림 띄워주기 */}
                    <button type="button" className="regist" style={{marginTop: "40px"}}>신청하기</button>
                </main>
            </div>
    )
}

export default ApplyMForm;