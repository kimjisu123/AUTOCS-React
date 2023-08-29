import StockCSS from './Stock.module.css'
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {Navigate, useNavigate} from "react-router-dom";

import {
    callIOListWithGroupingAPI,
} from '../../apis/StockAPICalls'

function Check() {

    /*******************************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const io = useSelector(state => state.productReducer);
    const ioList = io.data;

    const pageInfo = io.pageInfo;

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
                s: form.s,
                startDate: form.startDate,
                endDate: form.endDate
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

        formData.append("s", form.s);
        formData.append("startDate", form.startDate);
        formData.append("endDate", form.endDate);

        dispatch(callIOListWithGroupingAPI({
            s: form.s,
            startDate: form.startDate,
            endDate: form.endDate,
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
                           onChange={ onChangeHandler }
                    />
                    <div>~</div>
                    <input name='endDate'
                           className={StockCSS.dateSelectbox}
                           type="date"
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
                        <th>기간<br/>폐기</th>
                        <th>단가</th>
                        <th>비고</th>
                    </tr>
                    {
                        Array.isArray(ioList) && ioList.map((io, index) => (
                            <tr key={index}>
                                <td>{ io.refProductNo}</td>
                                <td>{ io.categoryName}</td>
                                <td>{ io.productName}</td>
                                <td>{ io.standardName}</td>
                                <td>{ io.unitName}</td>
                                <td>{ io.stock}</td>
                                <td>{ io.io}</td>
                                <td>{ io.totalQuantity}</td>
                                <td></td>
                                <td></td>
                                <td>{ io.price}</td>
                                <td>{ io.etc}</td>
                            </tr>
                        ))
                    }
                </table>
                <div style={{ listStyleType: "none", display: "flex", justifyContent: "center", marginTop:"2%"}}>
                    { Array.isArray(ioList) &&
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
                    { Array.isArray(ioList) &&
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
