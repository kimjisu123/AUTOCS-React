import { NavLink } from 'react-router-dom';
import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callBillListWithPagingAPI,
} from '../../apis/StockAPICalls'

function Bill() {

    return (
        <div>
            <div className={StockCSS.headLine}>세금계산서 발행내역</div>
            <div className={StockCSS.contentsHeader}>
                <div className={StockCSS.datebox}>
                    <div>조회기간</div>
                    <input className={StockCSS.dateSelectbox} type="date"/>
                    <div>~</div>
                    <input className={StockCSS.dateSelectbox} type="date"/>
                </div>

                <div className={StockCSS.contentsHeader}>
                    <div>영업점</div>
                    <input className={StockCSS.searchbox} type="text" placeholder="영업점을 조회하세요"/>
                    <button>조회</button>
                </div>
            </div>

            <div style={{marginTop: "1%"}}>
                <table className={StockCSS.stockTable}>
                    <tr>
                        <th>NO</th>
                        <th>거래번호</th>
                        <th>영업점</th>
                        <th>발행일</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><NavLink to="/stock/bill/detail">20201234</NavLink></td>
                        <td>종로점</td>
                        <td>2023-08-01</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><NavLink to="/stock/bill/detail">20201234</NavLink></td>
                        <td>종로점</td>
                        <td>2023-08-01</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Bill;
