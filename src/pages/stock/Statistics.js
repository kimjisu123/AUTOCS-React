import StockCSS from './Stock.module.css'
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {Navigate, useNavigate} from "react-router-dom";

import {
    callStatisticsAPI,
} from '../../apis/StockAPICalls'
import ioGroupReducer from "../../modules/IoGroupModule";
import statisticsReducer from "../../modules/StatisticsModule";


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

function Statistics() {

    /*******************************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const ioGroupList = useSelector(state => state.statisticsReducer);

    const totalAmount = ioGroupList.reduce((total, ioGroup) => {
        const orderAmount = (((ioGroup.completeQuantity + ioGroup.refundQuantity)
                -(ioGroup.totalQuantityIn+ioGroup.totalQuantityOut)) *
            ioGroup.price);
        return total + orderAmount;
    }, 0); // 초기값 0으로 시작


    // 입출고 조회
    useEffect(
        () => {
            dispatch(callStatisticsAPI({
                s: '',
                startDate: getFirstDayOfMonth(), // 이번 달의 첫째 날로 초기화
                endDate: getCurrentDatePlusOneDay() // 오늘 날짜로 초기화
            }));
        }
        ,[]
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
            [e?.target.name]: e?.target.value
        });
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

        dispatch(callStatisticsAPI({
            s: form.s,
            startDate: selectedStartDate,
            endDate: selectedEndDate
        }));
    }

    const onEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClickSearchHandler();
        }
    };

    /*******************************************************************************/

    return (
        <div>
            <div className={StockCSS.headLine}>매출통계</div>
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
                        <th>기간<br/>입고</th>
                        <th>기간<br/>출고</th>
                        <th>기간<br/>환불</th>
                        <th>기간<br/>폐기</th>
                        <th className={StockCSS.mainline}>매출<br/>수량</th>
                        <th>단가</th>
                        <th>합계<br/>매출</th>
                    </tr>
                    {
                        Array.isArray(ioGroupList) && ioGroupList.map((ioGroup) => {
                            if ((ioGroup.completeQuantity + ioGroup.refundQuantity)
                                -(ioGroup.totalQuantityIn+ioGroup.totalQuantityOut) !== 0) {
                                return (
                            <tr key={ioGroup.productNo}>
                                <td>{ ioGroup.productNo}</td>
                                <td>{ ioGroup.categoryName}</td>
                                <td>{ ioGroup.productName}</td>
                                <td>{ ioGroup.standardName}</td>
                                <td>{ ioGroup.unitName}</td>
                                <td>{ ioGroup.totalQuantityIn.toLocaleString()}</td>
                                <td>{ ioGroup.completeQuantity.toLocaleString()}</td>
                                <td>{ ioGroup.refundQuantity.toLocaleString()}</td>
                                <td>{ ioGroup.totalQuantityOut.toLocaleString()}</td>
                                <td className={StockCSS.mainline}>
                                    {(ioGroup.completeQuantity + ioGroup.refundQuantity)
                                    -(ioGroup.totalQuantityIn+ioGroup.totalQuantityOut)}
                                </td>
                                <td>{ ioGroup.price.toLocaleString()}</td>
                                <td>
                                    {(((ioGroup.completeQuantity + ioGroup.refundQuantity)
                                    -(ioGroup.totalQuantityIn+ioGroup.totalQuantityOut)) *
                                        ioGroup.price).toLocaleString()}</td>
                            </tr>
                                );
                            }
                            return null; // Return null for other statuses, effectively skipping them
                        })
                    }



                    <tr>
                        <td colSpan={11}>매출합계</td>
                        <td>{totalAmount.toLocaleString()}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Statistics;
