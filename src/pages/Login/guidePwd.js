import img from './loginMain.png'
import './guideId.css'
import {Link} from "react-router-dom";

const GuidePwd = () => {

    return (
        <div style={{backgroundColor: "#1C2C10"}}>
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h2 style={{ color: "#1C2C10", marginTop: "90px" }}>XXX님의 임시 비밀번호를 이메일로 발급하였습니다.</h2>
                    <div className="separator" style={{width: "80%"}}></div>

                    <Link to="/login" type="button" className="ok">로그인하러가기</Link>
                </main>
            </div>
        </div>
    )
}

export default GuidePwd;