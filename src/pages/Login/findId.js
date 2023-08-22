import './findId.css'
import img from './loginMain.png'
import {Link} from "react-router-dom";

const findId = () => {
    return (
        <div style={{backgroundColor: "#1C2C10"}}>
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>아이디 찾기</h1>
                    <div className="separator" style={{width: "30%"}}></div>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>이름</h4>
                    <input className="lo" type="text" id="name" name="name" required />

                    <h4 style={{ marginBottom: "10px", marginTop: "5px", background: "white" }}>이메일</h4>
                    <input className="lo" type="text" id="email" name="email" required />

                    <Link to="/login/fIOk" type="button" className="find">아이디 찾기</Link>



                        <Link to="/login/findPwd" style={{ color: "#1C2C10", marginTop: "20px", marginLeft: "250px"}}>비밀번호 찾기</Link>

                </main>
            </div>
        </div>
    )
}

export default findId;