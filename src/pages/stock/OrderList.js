import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callOrderProductListAPI
} from '../../apis/StockAPICalls'
import orderProductReducer from "../../modules/OrderProductModule";

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function OrderList() {

    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const orderProduct = useSelector(state => state.orderProductReducer);
    const orderProductList = orderProduct.data;

    const pageInfo = orderProduct.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }

    // 주문물품 조회
    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callOrderProductListAPI({
                currentPage: currentPage,
                // s: '',
                // startDate: getFirstDayOfMonth(), // 이번 달의 첫째 날로 초기화
                // endDate: getCurrentDate() // 오늘 날짜로 초기화
            }));
        }
        ,[currentPage]
    );












    const onClickPermitHandler= () => {
        alert('승인하시겠습니까?');
    }

    const onClickRejectHandler= () => {
        alert('반려하시겠습니까?');
    }

    return (
        <div>
            <div className={StockCSS.headLine}>신청내역관리</div>
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
                <div className={StockCSS.contentsHeader}>
                    <div>상태</div>
                    <select>
                        <option value="wait">대기</option>
                        <option value="cancel">취소</option>
                        <option value="reject">반려</option>
                        <option value="permit">승인</option>
                        <option value="complete">완료</option>
                    </select>
                </div>
            </div>

            <div style={{marginTop: "1%"}}>
                <table className={StockCSS.stockTable}>
                    <tr>
                        <th>거래<br/>번호</th>
                        <th>영업점</th>
                        <th>품목<br/>코드</th>
                        <th>품목명</th>
                        <th>규격</th>
                        <th>단위</th>
                        <th>단가</th>
                        <th>신청<br/>수량</th>
                        <th>비고</th>
                        <th>신청일</th>
                        <th>상태</th>
                        <th>상태<br/>변경</th>
                    </tr>
                    {
                        Array.isArray(orderProductList) && orderProductList.map((orderProduct) => (
                            <tr key={orderProduct.refOrderNo}>
                                <td>{ orderProduct.refOrderNo.orderNo}</td>
                                <td>{ orderProduct.refOrderNo.storeInfoNo.name}</td>
                                <td>{ orderProduct.refProductNo.category.name}</td>
                                <td>{ orderProduct.refProductNo.name}</td>
                                <td>{ orderProduct.refProductNo.unit.name}</td>
                                <td>{ orderProduct.refProductNo.standard.name}</td>
                                <td>{ orderProduct.refProductNo.price}</td>
                                <td>{ orderProduct.quantity}</td>
                                <td>{ orderProduct.refProductNo.etc}</td>
                                <td>{ orderProduct.registDate}</td>
                                <td>{ orderProduct.status}</td>
                                <td><input value={orderProduct.orderProductNo} type="checkbox"/></td>
                            </tr>
                        ))
                    }
                </table>
                <div style={{display: "flex", justifyContent: "flex-end", marginTop: "1%"}}>
                    <button style={{marginRight: "10px"}} onClick={ onClickPermitHandler }>승인</button>
                    <button onClick={ onClickRejectHandler }>반려</button>
                </div>
                <div style={{ listStyleType: "none", display: "flex", justifyContent: "center", marginTop:"2%"}}>
                    { Array.isArray(orderProductList) &&
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &lt;
                        </button>
                    }
                    {pageNumber.map((num) => (
                        <li key={num} onClick={() => setCurrentPage(num)}>
                            <button
                                style={ currentPage === num ? {backgroundColor : '#ecead8' } : null}
                            >
                                {num}
                            </button>
                        </li>
                    ))}
                    { Array.isArray(orderProductList) &&
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === pageInfo.pageEnd  || pageInfo.total == 0}
                        >
                            &gt;
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default OrderList;
