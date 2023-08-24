import './Login.css'
import img from './loginMain.png'
import React, {useState, useEffect } from 'react';
import { Link, Navigate  } from 'react-router-dom';
import {useDispatch, useSelector  } from "react-redux";
import { callLoginAPI} from "../../apis/MemberAPICalls";

function Login({setLogin}) {
    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);  // API 요청하여 가져온 loginMember 정보

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    useEffect(() => {

            if(loginMember.status === 200){
                console.log("[Login] Login SUCCESS {}", loginMember);
            }
        }
        ,[loginMember]);

    // 로그인 상태일 시 로그인페이지로 접근 방지
    if(loginMember.length > 0) {
        console.log("[Login] Login is already authenticated by the server");
        return <Navigate to="/main"/>;
    }

    const handlelogin = () => {
        try {
            const loginInfo = {
                id: id,
                pwd: pwd
            };

            console.log('Info to Pass:', loginInfo);

            dispatch(callLoginAPI({
                loginInfo: loginInfo
            }))

            setLogin(false);
            console.log('[LoginModal] Login Process End!!');

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