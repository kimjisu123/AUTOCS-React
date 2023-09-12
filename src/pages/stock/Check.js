import StockCSS from './Stock.module.css'
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {Navigate, useNavigate} from "react-router-dom";

import {
    callIOListWithGroupingAPI,
} from '../../apis/StockAPICalls'
import ioGroupReducer from "../../modules/IoGroupModule";

function getFirstDayOfMonth() {
    const now = new Date();
    console.log(now)
    return new Date(now.getFullYear(), now.getMonth(), 2).toISOString().split('T')[0];
}

// 오늘 날짜를 가져오는 함수
function getCurrentDate() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

function getCurrentDatePlusOneDay() {
    const now = new Date();
    // 현재 날짜에 1을 더해 하루를 더합니다.
    now.setDate(now.getDate() + 1);
    return now.toISOString().split('T')[0];
}

function Check() {

    /*******************************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const ioGroup = useSelector(state => state.ioGroupReducer);
    const ioGroupList = ioGroup.data;

    const pageInfo = ioGroup.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }

    // 입출고 조회

    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callIOListWithGroupingAPI({
                currentPage: currentPage,
                s: '',
                startDate: getFirstDayOfMonth(), // 이번 달의 첫째 날로 초기화
                endDate: getCurrentDatePlusOneDay() // 오늘 날짜로 초기화
            }));
        }
        ,[currentPage]
    );

    // 물품 조회
    const [form, setForm] = useState({
        s: '',
        startDate: '',
        endDate: ''
    });

    // form 데이터 세팅
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value)
    };

    /* 물품 조회 */
    const onClickSearchHandler = () => {

        const formData = new FormData();

        let selectedStartDate = '';
        let selectedEndDate = '';

        if(form.startDate === ''){
            selectedStartDate =getFirstDayOfMonth();
        } else {
            selectedStartDate= form.startDate;
        }

        if(form.endDate === ''){
            selectedEndDate =getCurrentDatePlusOneDay();
        } else if(form.endDate === getCurrentDate()){
            selectedStartDate = getCurrentDatePlusOneDay();
        }else {
            selectedEndDate= form.endDate;
        }

        formData.append("s", form.s);
        formData.append("startDate", selectedStartDate);
        formData.append("endDate", selectedEndDate);

        dispatch(callIOListWithGroupingAPI({
            s: form.s,
            startDate: selectedStartDate,
            endDate: selectedEndDate,
            currentPage: 1
        }));
        console.log(form.startDate)
        console.log(form.endDate)
    }

    const onEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClickSearchHandler();
        }
    };

    /*******************************************************************************/


    return (
        <div>
            <div className={StockCSS.headLine}>재고조회</div>
            <div className={StockCSS.contentsHeader}>
                <div className={StockCSS.datebox}>
                    <div>조회기간</div>
                    <input name='startDate'
                           className={StockCSS.dateSelectbox}
                           type="date"
                           defaultValue={getFirstDayOfMonth()}
                           onChange={ onChangeHandler }
                    />
                    <div>~</div>
                    <input name='endDate'
                           className={StockCSS.dateSelectbox}
                           type="date"
                           defaultValue={getCurrentDate()}
                           onChange={ onChangeHandler }
                    />
                </div>

                <div className={StockCSS.contentsHeader}>
                    <div>품목명</div>
                    <input className={StockCSS.searchbox}
                           name='s'
                           type="text"
                           placeholder="품목명을 조회하세요"
                           onChange={ onChangeHandler }
                           onKeyPress={onEnterKeyPress}
                    />
                        <button onClick={onClickSearchHandler}>조회</button>
                </div>
            </div>

            <div>
                <table className={StockCSS.stockTable}>
                    <tr>
                        <th>CODE</th>
                        <th>카테고리</th>
                        <th>품목명</th>
                        <th>규격</th>
                        <th>단위</th>
                        <th>적정<br/>재고</th>
                        <th className={StockCSS.mainline}>현재<br/>재고</th>
                        <th>기간<br/>입고</th>
                        <th>기간<br/>출고</th>
                        <th>기간<br/>환불</th>
                        <th>기간<br/>폐기</th>
                        <th>단가</th>
                        <th>비고</th>
                    </tr>
                    {
                        Array.isArray(ioGroupList) && ioGroupList.map((ioGroup) => (
                            <tr key={ioGroup.productNo}>
                                <td>{ ioGroup.productNo}</td>
                                <td>{ ioGroup.categoryName}</td>
                                <td>{ ioGroup.productName}</td>
                                <td>{ ioGroup.standardName}</td>
                                <td>{ ioGroup.unitName}</td>
                                <td>{ ioGroup.stock}</td>
                                <td className={StockCSS.mainline}>{ ioGroup.currentQuantity}</td>
                                <td>{ ioGroup.totalQuantityIn}</td>
                                <td>{ ioGroup.completeQuantity}</td>
                                <td>{ ioGroup.refundQuantity}</td>
                                <td>{ ioGroup.totalQuantityOut}</td>
                                <td>{ ioGroup.price}</td>
                                <td>{ ioGroup.etc}</td>
                            </tr>
                        ))
                    }
                </table>
                <div style={{ listStyleType: "none", display: "flex", justifyContent: "center", marginTop:"2%"}}>
                    { Array.isArray(ioGroupList) &&
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
                    { Array.isArray(ioGroupList) &&
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

export default Check;
