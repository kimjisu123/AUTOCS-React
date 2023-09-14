import React from 'react';
import TableCSS from './Table.module.css';
import {NavLink} from "react-router-dom";

function YourComponent() {
    return (
        <div className={TableCSS.container}>
            <div className={TableCSS.section}>
                <figcaption className={TableCSS.docuList}>
                    <u style={{margin:"auto 0"}}><h3><NavLink to="/stock/myorderlist/detail">문서</NavLink></h3></u>
                    <span className={TableCSS.line}></span>
                    <ul>
                        <li>대기 문서<strong>3</strong></li>
                        <li>진행중 문서<strong>3</strong></li>
                        <li>수신 문서<strong>3</strong></li>
                    </ul>
                    <button><NavLink to="/stock/myorderlist/detail">더보기</NavLink></button>
                </figcaption>
                <div style={{marginTop: "1%"}}>
                    <table className={TableCSS.docuContent}>
                        <tr>
                            <th>NO</th>
                            <th>거래번호</th>
                            <th>발주일</th>
                            <th>상태</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><NavLink to="/stock/myorderlist/detail">문서제목1</NavLink></td>
                            <td>2023-08-01</td>
                            <td><button>대기</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><NavLink to="/stock/myorderlist/detail">문서제목2</NavLink></td>
                            <td>2023-08-01</td>
                            <td><button>반려</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><NavLink to="/stock/myorderlist/detail">문서제목3</NavLink></td>
                            <td>2023-08-01</td>
                            <td><button>승인</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><NavLink to="/stock/myorderlist/detail">문서제목4</NavLink></td>
                            <td>2023-08-01</td>
                            <td><button>완료</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default YourComponent;
