import img from './loginMain.png'
import {Link} from "react-router-dom";
import './auuount.css'

//이건 인사팀에서만 볼 수 있는 페이지 !
const accountCreate = () => {

    return (
            <div>
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>계정 생성</h1>
                    <div className="separator" style={{ width: "15%" }}></div>

                    <div className="button-container">
                        <button className="create-button">직원 계정 생성</button>
                        <button className="create-button">영업점 계정 생성</button>
                    </div>
                </main>
            </div>
    )
}

export default accountCreate;