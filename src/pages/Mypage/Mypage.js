import MypageEmp from "./MypageEmp";
import MypageEmpMenubar from "./MypageEmpMenubar";

function Mypage(){
    return (
        <div style={{display:"flex"}}>
            <MypageEmpMenubar />
            <MypageEmp />
        </div>

    )
}
export default Mypage;