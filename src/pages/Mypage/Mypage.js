import MypageEmp from "./MypageEmp";
import MypageEmpMenubar from "./components/MypageEmpMenubar";
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";
import {useEffect} from "react";
import {callGetMemberInfoAPI} from "../../apis/MypageAPICalls";






function Mypage(){

    const dispatch = useDispatch();
    const employees = useSelector(state => state.myPageReducer);
    const employeeList = employees.data;
    const accessToken = window.localStorage.getItem('accessToken');
    console.log("employeeList : " , employeeList);
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;

    useEffect(() => {

        console.log("callGetMemberInfoAPI : {} " + callGetMemberInfoAPI(decodedToken.MemberNo))
        dispatch(callGetMemberInfoAPI(decodedToken.MemberNo));


    }, []);


    return (
        <>


        <div style={{display:"flex"}}>
            <MypageEmpMenubar />
            <MypageEmp />
        </div>



        </>
    )
}
export default Mypage;