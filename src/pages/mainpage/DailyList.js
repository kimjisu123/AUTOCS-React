import React, {useEffect, useState} from 'react';
import TableCSS from './DailyList.module.css';
import {NavLink} from "react-router-dom";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {callGetDailyMainAPI} from "../../apis/MainAPICalls";
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";

function DailyList(emp) {
    const accessToken = window.localStorage.getItem('accessToken');
// callGetDailyMainAPI(emp);
    const dispatch = useDispatch();
    const employees = useSelector(state => state.mainReducer);
    console.log("캘린더 일정 리스트를 위한 멤버 번호 조회 {}", callGetDailyMainAPI(240));
    console.log("캘린더 일정 리스트를 위한 멤버 번호 조회 {}", employees);



    // // 회원정보 가지고 오기

    // const [memberNo , setMemberNo] = useState(0);
    //
    //
    // const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    //
    // useEffect = () => {

        // setMemberNo(employees.data.memberNo);


    // };

    return (
        <div className={TableCSS.container}>
            <div className={TableCSS.section}>
                <figcaption className={TableCSS.docuList}>
                    {/*<u style={{margin:"auto 0"}}><h3><NavLink to="/stock/myorderlist/detail">일정</NavLink></h3></u>*/}
                    {/*<span className={TableCSS.line}></span>*/}
                    <ul>
                        <li>오늘일정<strong>3</strong></li>
                        <li>오늘일정<strong>3</strong></li>
                        <li>한주일정<strong>5</strong></li>
                        <li>월별일정<strong>3</strong></li>
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
                        <tr>
                            <td>2023-08-01</td>
                            <td><NavLink to="/stock/myorderlist/detail">부서미팅</NavLink></td>
                            <td><button>진행중</button></td>

                        </tr>
                        <tr>
                            <td>2023-08-01</td>
                            <td><NavLink to="/stock/myorderlist/detail">부서미팅</NavLink></td>
                            <td><button>진행중</button></td>

                        </tr>
                        <tr>
                            <td>2023-08-01</td>
                            <td><NavLink to="/stock/myorderlist/detail">부서미팅</NavLink></td>
                            <td><button>진행중</button></td>

                        </tr>
                        <tr>
                            <td>2023-08-01</td>
                            <td><NavLink to="/stock/myorderlist/detail">부서미팅</NavLink></td>
                            <td><button>진행중</button></td>

                        </tr>
                        <tr>
                            <td>2023-08-01</td>
                            <td><NavLink to="/stock/myorderlist/detail">부서미팅</NavLink></td>
                            <td><button>진행중</button></td>

                        </tr>
                        <tr>
                            <td>2023-08-01</td>
                            <td><NavLink to="/stock/myorderlist/detail">부서미팅</NavLink></td>
                            <td><button>진행중</button></td>

                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DailyList;
