import './findPwdOk.css'
import img from './loginMain.png'
import {Link, Navigate, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callChangePwdAPI} from "../../apis/MemberAPICalls";

const FindPwdOk = () => {

    const [no, setNo] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const data = useSelector(state => state.memberReducer.data);

    // 로그인 상태일 시 페이지로 접근 방지
    const Token = localStorage.getItem('accessToken');
    if (Token) {
        return <Navigate to="/main" replace />;
    }

    //임시 비밀번호 발급 및 비밀번호 업데이트
    const handleGo = () => {
        try {
            if (no === data[0]) {
                window.alert('인증번호가 확인 되었습니다.');
                const changInfo = {
                    email: data[1],
                     Id: data[2],
                    name: data[3]
                };

                console.log('Info to Pass:', changInfo);

                dispatch(callChangePwdAPI(changInfo, navigate)); // 직원 API 호출

                // 성공 시 페이지 이동
                navigate('/login/fPOk/guidePwd');
            } else {
                console.log("Invalid role");
                window.alert('인증번호가 맞지 않습니다.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleNoChange = (event) => {
        setNo(event.target.value);
    };

    return (
        <div style={{backgroundColor: "#1C2C10"}}>
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>인증번호를 입력해주세요</h1>
                    <div className="separator" style={{width: "60%"}}></div>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>인증번호</h4>
                    <input className="lo" type="text" id="no" name="no" value={no} onChange={handleNoChange} required />

                    <button type="button" className="guideId" onClick={handleGo}>
                        확인
                    </button>
                </main>
            </div>
        </div>
    )
}

export default FindPwdOk;