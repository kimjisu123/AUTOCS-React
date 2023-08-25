import MypageEmp from "./MypageEmp";
import MypageEmpMenubar from "./components/MypageEmpMenubar";
import MypageStore from "./MypageStore";
import UpdatePW from "./UpdatePW";

function Mypage(){
    return (
        <div style={{display:"flex"}}>
            <MypageEmpMenubar />
            <MypageEmp />
            {/*<MypageStore />*/}
            {/*<UpdatePW />*/}
        </div>

    )
}
export default Mypage;