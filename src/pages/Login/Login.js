import './Login.css'

const Login = () => {

    return (
        <div>
            <main>
                <h1 style={{color: "#1C2C10"}}>로그인</h1>
                <div className="separator"></div>

                <label htmlFor="id" style={{marginBottom: "20px" , marginTop: "15px"}}>아이디</label>
                <input type="text" id="id" name="id" required/>

                    <label htmlFor="pwd" style={{marginBottom: "20px", marginTop: "10px"}}>비밀번호</label>
                    <input type="text" id="pwd" name="pwd" required/>

                        <input type="submit" value="로그인" style={{marginTop: "40px"}}/>
            </main>
        </div>
    )
}

export default Login;