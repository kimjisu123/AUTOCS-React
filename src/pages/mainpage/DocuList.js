import React from 'react';
import TableCSS from '../Mypage/Table.module.css';
import {NavLink} from "react-router-dom";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";

function DocuList() {
    return (
        <div className={TableCSS.container}>
            <div className={TableCSS.section}>
                <figcaption className={TableCSS.docuList}>
                    <u style={{margin:"auto 0"}}><h3><NavLink to="/stock/myorderlist/detail">문서</NavLink></h3></u>
                    <span className={TableCSS.line}></span>
                    <ul>
                        <li>결제할 문서<strong>3</strong></li>
                        <li>진행중 문서<strong>3</strong></li>
                        <li>수신 문서<strong>3</strong></li>
                        <NavLink to="/stock/myorderlist/detail"><MdKeyboardDoubleArrowRight/></NavLink>
                    </ul>
                </figcaption>
                <div style={{marginTop: "1%"}}  className={TableCSS.docuContent}>
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
                            <td><button>진행중</button></td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td><NavLink to="/stock/myorderlist/detail">문서제목2</NavLink></td>
                            <td>2023-08-01</td>
                            <td><button>결제완료</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><NavLink to="/stock/myorderlist/detail">문서제목2</NavLink></td>
                            <td>2023-08-01</td>
                            <td><button>대기중</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><NavLink to="/stock/myorderlist/detail">문서제목2</NavLink></td>
                            <td>2023-08-01</td>
                            <td><button>진행중</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DocuList;
