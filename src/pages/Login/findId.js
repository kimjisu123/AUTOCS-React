import './findId.css'
import img from './loginMain.png'
import {Link, Navigate, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import {callEmployeeFindIdAPI, callStoreFindIdAPI} from "../../apis/MemberAPICalls";
import {useDispatch} from "react-redux";

const FindId = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // 로그인 상태일 시 페이지로 접근 방지
    const Token = localStorage.getItem('accessToken');
    if (Token) {
        return <Navigate to="/main" replace />;
    }

    //아이디 찾기
    const handleFindId = () => {
        try {
            if (!role || !name || !email) {
                window.alert('모든 필드를 입력해주세요.');
                return;
            }
            const findIdInfo = {
                name: name,
                employeeEmail: email
            };

            console.log('Info to Pass:', findIdInfo);

            if (role === "EMPLOYEE") {
                dispatch(callEmployeeFindIdAPI(findIdInfo, navigate)); // 직원 API 호출

                // 성공 시 페이지 이동
                navigate('/login/fIOk/guideId');

            } else if (role === "STORE") {
                dispatch(callStoreFindIdAPI(findIdInfo, navigate)); // 영업점 API 호출

                // 성공 시 페이지 이동
                navigate('/login/fIOk/guideSId');
            } else {
                console.log("Invalid role");
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div style={{backgroundColor: "#1C2C10"}}>
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>아이디 찾기</h1>
                    <div className="separator" style={{width: "30%"}}></div>

                    <select
                        id="role"
                        name="role"
                        className="imfoSelect"
                        value={role}
                        onChange={handleRoleChange}
                    >
                        <option value="default">찾으실 계정 정보를 선택하세요</option>
                        <option value="EMPLOYEE">직원</option>
                        <option value="STORE">영업점</option>
                    </select>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>이름</h4>
                    <input className="lo" type="text" id="name" name="name" value={name} onChange={handleNameChange} required />

                    <h4 style={{ marginBottom: "10px", marginTop: "5px", background: "white" }}>이메일</h4>
                    <input className="lo" type="text" id="email" name="email" value={email} onChange={handleEmailChange} required />

                    <button type="login" onClick={handleFindId}>
                        아이디 찾기
                    </button>

                    <h6 style={{color: "red"}}>마이페이지에 입력하신 이메일을 입력해주세요.</h6>


                    <Link to="/login/findPwd" style={{ color: "#1C2C10", marginTop: "20px", marginLeft: "250px"}}>비밀번호 찾기</Link>

                </main>
            </div>
        </div>
    )
}

export default FindId;