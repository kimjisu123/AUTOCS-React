import img from './loginMain.png'
import './outMForm.css'
import {Link} from "react-router-dom";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';

const OutMForm = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div style={{backgroundColor: "#1C2C10"}}>
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px"}} />

                    <h1 style={{ color: "#1C2C10" }}>계정 비활성화 신청</h1>
                    <div className="separator" style={{width: "50%"}}></div>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>이름</h4>
                    <input className="lo" type="text" id="name" name="name" required />

                    <h4 style={{ marginBottom: "10px", marginTop: "5px", background: "white" }}>퇴사일</h4>
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="퇴사일을 입력하세요"
                        id="join"
                        name="join"
                        className="date-pickers"
                        locale={ko}
                    />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>부서</h4>
                    <select id="department" name="department">
                        <option value="default" selected>부서를 선택하세요</option>
                        <option value="HR">인사부</option>
                        <option value="finance">재무/회계부</option>
                        <option value="management">경영부</option>
                        <option value="marketing">마케팅부</option>
                        <option value="sales">영업부</option>
                        <option value="service">서비스부</option>
                    </select>

                    <h4 style={{ marginBottom: "10px", marginTop: "20px", background: "white"}}>직급</h4>
                    <select id="position" name="position">
                        <option value="default" selected>직급을 선택하세요</option>
                        <option value="BooJang">부장</option>
                        <option value="ChaJang">차장</option>
                        <option value="GaJang">과장</option>
                        <option value="DaeRi">대리</option>
                        <option value="SaWon">사원</option>
                    </select>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>퇴사 사유</h4>
                    <input className="reson" type="text" id="reson" name="reson" required />

                    <Link to="/OutOk" type="button" className="regist" style={{marginTop: "10px"}}>신청하기</Link>
                </main>
            </div>
        </div>
    )
}

export default OutMForm;