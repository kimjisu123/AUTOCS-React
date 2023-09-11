import { NavLink } from 'react-router-dom';
import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callBillListWithPagingAPI,
} from '../../apis/StockAPICalls'
import billReducer from "../../modules/BillModule";

// 이번달 첫째일
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

function Bill() {

    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 조회
    const bill = useSelector(state => state.billReducer);
    const billList = bill.data;

    const pageInfo = bill.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }


    // 계산서 조회
    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callBillListWithPagingAPI({
                currentPage: currentPage,
                store: '',
                startDate: getFirstDayOfMonth(),
                endDate: getCurrentDatePlusOneDay()
            }));
        }
        ,[currentPage]
    );

    // 계산서 조회
    const [form, setForm] = useState({
        store: '',
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

    /* 계산서 조회 핸들러 */
    const onClickSearchHandler = (e) => {

        const formData = new FormData();

        let selectedStartDate = '';
        let selectedEndDate = '';

        if(form.startDate === ''){
            selectedStartDate = getFirstDayOfMonth();
        }
        else {
            selectedStartDate= form.startDate;
        }

        if(form.endDate === ''){
            selectedEndDate =getCurrentDatePlusOneDay();
        } else if(form.endDate === getCurrentDate()){
            selectedStartDate = getCurrentDatePlusOneDay();
        }else {
            selectedEndDate= form.endDate;
        }

        formData.append("store", form.store);
        formData.append("startDate", selectedStartDate);
        formData.append("endDate", selectedEndDate);

        dispatch(callBillListWithPagingAPI({
            store: form.store,
            startDate: selectedStartDate,
            endDate: selectedEndDate,
            currentPage: 1
        }));
    }

    const onEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClickSearchHandler();
        }
    };

    // 주문번호 클릭 핸들러
    const onBillNoClick = (orderNo) => {
        // 클릭한 주문의 상세 페이지로 이동합니다.
        navigate(`/stock/bill/detail/${orderNo}`);
    };


    return (
        <div>
            <div className={StockCSS.headLine}>세금계산서 발행내역</div>
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
                    <div>영업점</div>
                    <input className={StockCSS.searchbox}
                           name='store'
                           type="text"
                           placeholder="영업점을 조회하세요"
                           onChange={ onChangeHandler }
                           onKeyPress={onEnterKeyPress}
                    />
                    <button onClick={onClickSearchHandler}>조회</button>
                </div>
            </div>

            <div style={{marginTop: "1%"}}>
                <table className={StockCSS.stockTable}>
                    <tr>
                        <th>발행번호</th>
                        <th>거래번호</th>
                        <th>영업점</th>
                        <th>발행일</th>
                    </tr>
                    {
                        Array.isArray(billList) && billList.map((bill) => (
                            <tr >
                                <td>{ bill.billNo}</td>
                                <td
                                    style={{ cursor: 'pointer' }} // 클릭 가능한 스타일로 변경
                                    onClick={() => onBillNoClick(bill.orderNo)} // 클릭 시 이벤트 핸들러 호출
                                >
                                    {bill.orderNo}
                                </td>
                                <td>{ bill.storeInfoName}</td>
                                <td>{ bill.registDate}</td>
                            </tr>
                        ))
                    }
                </table>
                <div style={{ listStyleType: "none", display: "flex", justifyContent: "center", marginTop:"2%"}}>
                    { Array.isArray(billList) &&
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
                    { Array.isArray(billList) &&
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

export default Bill;
