import './Login.css'
import img from './loginMain.png'

const Login = () => {
    return (
        <div style={{backgroundColor: "#1C2C10"}}>
        <div className="border">
            <main>
                <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                <h1 style={{ color: "#1C2C10" }}>로그인</h1>
                <div className="separator"></div>

                <label style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>아이디</label>
                <input type="text" id="id" name="id" required />

                <label style={{ marginBottom: "10px", marginTop: "5px", background: "white" }}>비밀번호</label>
                <input type="password" id="pwd" name="pwd" required />

                <button type="login">로그인</button>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                    <div style={{ display: "flex", alignItems: "center", marginRight: "-255px", marginTop: "-21px" }}>
                        <input type="checkbox" id="accountSave" name="accountSave"/>
                        <h4>계정 저장</h4>
                    </div>
                    <a href="#" style={{ color: "#1C2C10", marginRight: "170px" }}>아이디/비밀번호 찾기</a>
                </div>
            </main>
        </div>
        </div>
    )
}

export default Login;