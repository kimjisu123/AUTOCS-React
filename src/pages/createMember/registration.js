import './registration.css';
import img from './loginMain.png';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { useSelector, useDispatch } from 'react-redux';
import { callInsertEmployeeAPI } from '../../apis/MemberAPICalls';
import {Link, Navigate} from 'react-router-dom';

const Registration = () => {
    const dispatch = useDispatch();
    const regist  = useSelector(state => state.memberReducer);

    const [name, setName] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState('default');
    const [selectedPosition, setSelectedPosition] = useState('default');
    const [manager, setManager] = useState('');

    const isFormValid = () => {
        return name !== '' && selectedDate !== null && selectedDepartment !== 'default' && selectedPosition !== 'default';
    };


    const handleRegistration = () => {
        try {
            if (!isFormValid()) {
                window.alert('모든 필드를 입력해주세요.');
                window.location="/registration"
            }

            const infoToPass = {
                name: name,
                employeeJoin: selectedDate,
                departmentCode: selectedDepartment,
                positionCode: selectedPosition,
                manager: manager
            };

            console.log('Info to Pass:', infoToPass);

            callInsertEmployeeAPI({ infoToPass, dispatch });

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
    };

    const handlePositionChange = (event) => {
        setSelectedPosition(event.target.value);

        // 선택된 직급에 따라 managerCode 값을 업데이트
        let managerCode = "";
        if (event.target.value === "i1") { // "인턴"이 선택되었을 때
            managerCode = "s1"; // 원하는 값을 설정
        } else if (event.target.value === "s1") { // "사원"이 선택되었을 때
            managerCode = "d1"; // 원하는 값을 설정
        } else if (event.target.value === "d1") { // "대리"이 선택되었을 때
            managerCode = "g1"; // 원하는 값을 설정
        } else if (event.target.value === "g1") { // "과장"이 선택되었을 때
            managerCode = "c1"; // 원하는 값을 설정
        } else if (event.target.value === "c1") { // "차장"이 선택되었을 때
            managerCode = "b1"; // 원하는 값을 설정
        } else if (event.target.value === "b1") { // "부장"이 선택되었을 때
            managerCode = "null"; // 원하는 값을 설정
        }

        setManager(managerCode);
    };


    const handleNameChange = (event) => {
        setName(event.target.value);
    };


    return (
        <div>
            <main>
                <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />
                <h1 style={{ color: "#1C2C10" }}>사원 등록</h1>
                <div className="separator" style={{width: "30%"}}></div>
                <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>이름</h4>
                <input
                    className="lo"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />

                <h4 style={{ marginBottom: "10px", marginTop: "5px", background: "white" }}>입사일</h4>
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="입사일을 입력하세요"
                    id="employeeJoin"
                    name="employeeJoin"
                    className="date-pickers"
                    locale={ko}
                />

                <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>부서</h4>
                <select
                    id="departmentCode"
                    name="departmentCode"
                    className="fixed-select"
                    value={selectedDepartment}
                    onChange={handleDepartmentChange}
                >
                    <option value="default">부서를 선택하세요</option>
                    <option value="H1">인사부</option>
                    <option value="F1">재무/회계부</option>
                    <option value="M1">경영부</option>
                    <option value="M2">마케팅부</option>
                    <option value="S1">영업부</option>
                    <option value="S2">서비스부</option>
                </select>

                <h4 style={{ marginBottom: "10px", marginTop: "20px", background: "white"}}>직급</h4>
                <select
                    id="positionCode"
                    name="positionCode"
                    className="fixed-select"
                    value={selectedPosition}
                    onChange={handlePositionChange}
                >
                    <option value="default">직급을 선택하세요</option>
                    <option value="b1">부장</option>
                    <option value="c1">차장</option>
                    <option value="g1">과장</option>
                    <option value="d1">대리</option>
                    <option value="s1">사원</option>
                    <option value="i1">인턴</option>
                </select>

                <Link to="/registOk">
                <button type="button" className="regist" onClick={handleRegistration}>
                    등록하기
                </button>
                </Link>
            </main>
        </div>
    )
}

export default Registration;