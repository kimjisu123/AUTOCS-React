import React, {useEffect, useState} from 'react';
import TableCSS from './DailyList.module.css';
import {NavLink} from "react-router-dom";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {callGetDailyMainAPI} from "../../apis/MainAPICalls";
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";
import { format, isToday } from 'date-fns'; // date-fns 라이브러리의 isToday 함수 추가

function DailyList(emp) {
    const accessToken = window.localStorage.getItem('accessToken');
    const dispatch = useDispatch();
    const employees = useSelector(state => state.mainReducer);
    // console.log("캘린더 일정 리스트를 위한 멤버 번호 조회 {}", callGetDailyMainAPI(240));
    // console.log("캘린더 일정 리스트를 위한 멤버 번호 조회 {}", employees);
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;



    // // 회원정보 가지고 오기
    useEffect(() => {
        // dispatch(callGetDailyMainAPI(decodedToken.MemberNo));
    },[]);

    // employees.data를 날짜 순으로 정렬
    const sortedData = employees.data
        ? [...employees.data].sort(
            (a, b) => new Date(a.startDate) - new Date(b.startDate)
        )
        : [];

    return (
        <div className={TableCSS.container}>
            <div className={TableCSS.section}>
                <figcaption className={TableCSS.docuList}>
                    {/*<u style={{margin:"auto 0"}}><h3><NavLink to="/stock/myorderlist/detail">일정</NavLink></h3></u>*/}
                    {/*<span className={TableCSS.line}></span>*/}
                    <ul style={{marginBottom:"-30px"}}>
                        <li>일정<strong>{sortedData.length}</strong></li>
                        <li>한주일정<strong>{sortedData.length}</strong></li>
                        <li>월별일정<strong>{sortedData.length}</strong></li>
                        <NavLink to="/stock/myorderlist/detail"><MdKeyboardDoubleArrowRight/></NavLink>
                    </ul>
                </figcaption>
                <div style={{marginTop: "1%"}}  className={TableCSS.docuContent}>
                    <table className={TableCSS.docuContent}>
                        <tr>
                            <th>날짜</th>
                            <th>내용</th>
                            <th>상태</th>

                        </tr>
                        {sortedData && sortedData.length > 0 ? (sortedData.map((daily) => (
                        <tr  key={daily.id} style={isToday(new Date(daily.startDate)) ? { border:"1px solid", background: 'beige' , fontWeight:"700", fontSize:"1.2em"} : {}}>
                            <td>{format(new Date(daily.startDate), 'MM월 dd일')}</td>
                            <td>{daily.content}</td>
                            <td><button>{daily.place}</button></td>
                        </tr>
                        ))): <tr><td colSpan="3" style={{color:"#ceced0", textAlign: "center", margin: "300px 0"}}> 일정이 없습니다.</td></tr>}

                    </table>
                </div>
            </div>
        </div>
    );
}

export default DailyList;
