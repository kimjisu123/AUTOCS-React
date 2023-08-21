import MypageEmp from "./MypageEmp";
import MypageEmpMenubar from "./MypageEmpMenubar";
import MypageStore from "./MypageStore";

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