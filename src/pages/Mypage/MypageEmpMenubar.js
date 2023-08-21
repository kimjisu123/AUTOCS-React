import style from './MypageEmp.module.css';
import empimg from './emp.jpg';
function MypageEmpMenubar(){

    return (
        <>
            <div className="menubar" style={{width: "295px",  height: "959px", paddingTop: "30px"}}>
                <div className="myPgateNavTitle" style={{marginLeft:"auto", marginRight:"auto",textAlign:"center"}}><h1>마이페이지</h1></div>
                <div className="documentForm">
                    사원 정보
                </div>
                <div className="purchase">사원정보 변경</div>
                <div className="traffic">비밀번호 변경</div>
            </div>
        </>

    )
}
export default MypageEmpMenubar;