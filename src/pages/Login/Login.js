import './Login.css'
import img from './loginMain.png'
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch } from "react-redux";
import { callLoginAPI} from "../../apis/MemberAPICalls";
import { GO_LOGIN } from '../../modules/MemberModule';

const Login = () => {
    const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const handlelogin = () => {
        try {
            const loginInfo = {
                id: id,
                pwd: pwd
            };

            console.log('Info to Pass:', loginInfo);

            callLoginAPI({ loginInfo, dispatch });

        } catch (error) {
            console.error('Error:', error);
        }
    };

const handleIdChange = (event) => {
    setId(event.target.value);
};

const handlePwdChange = (event) => {
    setPwd(event.target.value);
};

    return (
        <div style={{backgroundColor: "#1C2C10"}}>
        <div className="border">
            <main>
                <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                <h1 style={{ color: "#1C2C10" }}>로그인</h1>
                <div className="separator" style={{width: "20%"}}></div>

                <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white"}}>아이디</h4>
                <input className="lo" type="text" id="id" name="id" value={id} onChange={handleIdChange} required />

                <h4 style={{ marginBottom: "10px", marginTop: "5px", background: "white" }}>비밀번호</h4>
                <input className="lo" type="password" id="pwd" name="pwd" value={pwd} onChange={handlePwdChange} required />

                    <button type="login" onClick={handlelogin}>
                        로그인
                    </button>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                    <div style={{ display: "flex", alignItems: "center", marginRight: "-900px", marginTop: "-22px" }}>
                        <input type="checkbox" id="accountSave" name="accountSave" style={{marginTop: "3px"}}/>
                        <h4 style={{marginLeft: "170px"}}>계정 저장</h4>
                    </div>
                    <Link to="/login/findId" style={{ color: "#1C2C10", marginLeft: "1030px" }}>아이디/비밀번호 찾기</Link>
                </div>
                <Link to="/applyS" style={{ color: "#1C2C10", marginLeft: "225px", marginTop: "-10px"}}>영업점 계정 신청하기</Link>
            </main>
        </div>
        </div>
    )
}

export default Login;