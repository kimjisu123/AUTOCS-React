import React from 'react';
import TableCSS from '../Mypage/Table.module.css';
import {NavLink} from "react-router-dom";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";

function DailyList() {
    return (
        <div className={TableCSS.container}>
            <div className={TableCSS.section}>
                <figcaption className={TableCSS.docuList}>
                    <u style={{margin:"auto 0"}}><h3><NavLink to="/stock/myorderlist/detail">일정</NavLink></h3></u>
                    <span className={TableCSS.line}></span>
                    <ul>
                        <li>개인일정<strong>3</strong></li>
                        <li>부서일정<strong>5</strong></li>
                        <li>전체일정<strong>3</strong></li>
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
