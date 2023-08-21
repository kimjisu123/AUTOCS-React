import './registration.css';
import img from './loginMain.png';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { useDispatch } from 'react-redux';
import { ADD_EMPLOYEE } from '../../modules/MemberModule';
import { callInsertEmployeeAPI } from '../../apis/MemberAPICalls'; // Import the correct function

const Registration = () => {
    const dispatch = useDispatch();

    // Define state variables for form inputs
    const [name, setName] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [department, setDepartment] = useState('default');
    const [position, setPosition] = useState('default');

    const handleRegistration = async () => {
        try {
            const infoToPass = {
                name: name,
                joinDate: selectedDate,
                department: department,
                position: position
            };

            await callInsertEmployeeAPI(infoToPass, dispatch);

            // Move this to the API call's success response
            // window.location.href = "/registration/registOk";
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (

            <div>
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>사원 등록</h1>
                    <div className="separator" style={{width: "30%"}}></div>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>이름</h4>
                    <input className="lo" type="text" id="name" name="name" required />

                    <h4 style={{ marginBottom: "10px", marginTop: "5px", background: "white" }}>입사일</h4>
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="입사일을 입력하세요"
                        id="join"
                        name="join"
                        className="date-pickers"
                        locale={ko}
                    />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>부서</h4>
                    <select id="department" name="department" className="fixed-select">
                        <option value="default">부서를 선택하세요</option>
                        <option value="HR">인사부</option>
                        <option value="finance">재무/회계부</option>
                        <option value="management">경영부</option>
                        <option value="marketing">마케팅부</option>
                        <option value="sales">영업부</option>
                        <option value="service">서비스부</option>
                    </select>

                    <h4 style={{ marginBottom: "10px", marginTop: "20px", background: "white"}}>직급</h4>
                    <select id="position" name="position" className="fixed-select">
                        <option value="default">직급을 선택하세요</option>
                        <option value="BooJang">부장</option>
                        <option value="ChaJang">차장</option>
                        <option value="GaJang">과장</option>
                        <option value="DaeRi">대리</option>
                        <option value="SaWon">사원</option>
                        <option value="Intern">인턴</option>
                    </select>

                    <button type="button" className="regist" onClick={handleRegistration}>
                        등록하기
                    </button>
                </main>
            </div>
    )
}

export default Registration;