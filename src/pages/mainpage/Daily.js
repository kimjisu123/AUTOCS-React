import MiniCalender from "../compoments/MiniCalender";
import DailyList from "./DailyList";
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";
import {useEffect} from "react";
import {callGetDailyMainAPI} from "../../apis/MainAPICalls";
import {format} from "date-fns";



const Daily = () => {

    const accessToken = window.localStorage.getItem('accessToken');
    const dispatch = useDispatch();
    const employees = useSelector(state => state.mainReducer);
    // console.log("캘린더 일정 리스트를 위한 멤버 번호 조회 {}", callGetDailyMainAPI(240));
    // console.log("캘린더 일정 리스트를 위한 멤버 번호 조회 {}", employees);
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;


    // // 회원정보 가지고 오기
    useEffect(() => {
        dispatch(callGetDailyMainAPI(decodedToken.MemberNo));
    },[]);

    const dayList = employees.data?.map(daily => format(new Date(daily.startDate), 'yyyy-MM-dd')) || [];

    return
    <>
        <MiniCalender dayList={[dayList]}/>
        <DailyList dayList={dayList}/>
    </>

}
export default Daily;