import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MiniCalender.css'
import moment from "moment-timezone";
import {MdOutlineMood, MdStarRate} from "react-icons/md";
import { DateRange } from 'react-date-range';
import {useDispatch, useSelector} from "react-redux";
import {callGetDailyMainAPI} from "../../apis/MainAPICalls";
import {decodeJwt} from "../../util/tokenUtils";
import {format} from "date-fns";
//css 적용시키기

export const MiniCalender = () => {

    const accessToken = window.localStorage.getItem('accessToken');
    const dispatch = useDispatch();
    const employees = useSelector(state => state.mainReducer);
    // console.log("캘린더 일정 리스트를 위한 멤버 번호 조회 {}", callGetDailyMainAPI(240));
    // console.log("캘린더 일정 리스트를 위한 멤버 번호 조회 {}", employees);
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;


    // // 회원정보 가지고 오기
    useEffect(  () => {
        dispatch(callGetDailyMainAPI(decodedToken.MemberNo));
    },[]);

    const [value, onChange] = useState(new Date());
    const [mark, setMark] = useState([]);
    // const dayList = [
    //     '2023-09-21',
    //     '2023-09-23',
    //     '2023-09-08',
    // ];
    const dayList = employees.data?.map(daily => format(new Date(daily.startDate), 'yyyy-MM-dd')) || [];


    // 각 날짜 타일에 컨텐츠 추가
    const addContent = ({ date }: any) => {
        // 해당 날짜(하루)에 추가할 컨텐츠의 배열
        const contents = [];

        // date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
        if (dayList.find((day) => day === moment(date).format('YYYY-MM-DD'))) {
            contents.push(
                <>
                     <div className="dot" style={{ height:"2px", margin:"auto"}}><span>●</span></div>
                    {/*<MdStarRate*/}
                    {/*    className="diaryImg"*/}
                    {/*    width="10px"*/}
                    {/*    height="10px"*/}
                    {/*    alt="today is..."*/}
                    {/*/>*/}
                </>
            );
        }
        return <div>{contents}</div>; // 각 날짜마다 해당 요소가 들어감
    };

    return (
        <div className="custom-calender">
            <Calendar
                onChange={onChange}
                value={value}
                formatDay={(locale,date)=> new Date(date).toLocaleDateString("en-us",{day:"2-digit"})}
                selectRange={true}
                tileContent={addContent}
            />

        </div>
    );
}
export default MiniCalender;