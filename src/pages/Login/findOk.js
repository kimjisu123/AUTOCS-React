import './findIOk.css'
import img from './loginMain.png'
import {Link} from "react-router-dom";

const findId = () => {
    return (
        <div style={{backgroundColor: "#1C2C10"}}>
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>인증번호를 입력해주세요</h1>
                    <div className="separator" style={{width: "60%"}}></div>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>인증번호</h4>
                    <input className="lo" type="text" id="no" name="no" required />

                    <button type="logGo">확인</button>



                    <Link to="/login" style={{ color: "#1C2C10", marginTop: "40px"}}>로그인 하러가기</Link>

                </main>
            </div>
        </div>
    )
}

export default findId;