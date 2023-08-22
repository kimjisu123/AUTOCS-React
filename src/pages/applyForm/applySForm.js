import img from './loginMain.png'
import './applyMForm.css'
import {Link} from "react-router-dom";


const ApplySForm = () => {

    return (
        <div style={{backgroundColor: "#1C2C10"}}>
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>계정 생성 신청</h1>
                    <div className="separator" style={{width: "40%"}}></div>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>영업점 주소</h4>
                    <input className="lo" type="text" id="address" name="address" required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>대표자명</h4>
                    <input className="lo" type="text" id="name" name="name" required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>표준가맹계약서</h4>
                    <input className="lo" type="file" id="file" name="file" required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>이메일</h4>
                    <input className="lo" type="text" id="email" name="email" required />

                    <Link to="/ApplyOk" type="button" className="regist">신청하기</Link>

                    <h6 style={{color: "red"}}>생성된 계정은 2영업일 내 이메일로 발송됩니다.</h6>
                </main>
            </div>
        </div>
    )
}

export default ApplySForm;