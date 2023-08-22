import MypageEmp from "./MypageEmp";
import MypageEmpMenubar from "./MypageEmpMenubar";
import MypageStore from "./MypageStore";
import UpdatePW from "./UpdatePwd/UpdatePW";

function Mypage(){
    return (
        <div style={{display:"flex"}}>
            <MypageEmpMenubar />
            {/*<MypageEmp />*/}
            <MypageStore />
        </div>

    )
}
export default Mypage;