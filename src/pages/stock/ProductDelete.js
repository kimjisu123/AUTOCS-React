import StockCSS from './Stock.module.css'
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

import {
    callProductListAPI
} from '../../apis/StockAPICalls'
import Product from "../compoments/stock/Product";

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function ProductDelete() {

    /*******************************************************************************/


    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch();
    const products = useSelector(state => state.stockReducer);
    const productList = products.data;

    const pageInfo = products.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callProductListAPI({
                currentPage: currentPage
            }));
        }
        ,[currentPage]
    );

    /*******************************************************************************/


    const onClickRegistHandler= () => {
        alert('등록하시겠습니까?');
    }
    
    return(
        <div>
            <div className={StockCSS.headLine}>물품 불용등록</div>


            <table className={StockCSS.stockTable}>
                <tr>
                    <td>
                        물품명
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox} type="text" placeholder="물품명을 조회하세요" readOnly/>
                    </td>
                    <td>
                        <button onClick={()=> showPopup()}>조회</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        불용시작일
                    </td>
                    <td>
                        <input type="date"/>
                    </td>
                    <td>
                        <button onClick={ onClickRegistHandler }>등록</button>
                    </td>
                </tr>
            </table>

            <div style={{marginTop: "5%"}}>

                <div className={StockCSS.middleLine}>
                    물품 목록
                </div>

                <div>
                    <table className={StockCSS.stockTable}>
                        <tr>
                            <th>CODE</th>
                            <th>카테고리명</th>
                            <th>품목명</th>
                            <th>규격</th>
                            <th>단위</th>
                            <th>적정재고</th>
                            <th>단가</th>
                            <th>비고</th>
                            <th>등록일</th>
                            <th>불용일</th>
                            <th>사용상태</th>
                        </tr>
                    {
                        Array.isArray(productList) && productList.map((product) => (<Product key={ product.productNo } product={ product } />))
                    }
                    </table>
                </div>

                <div style={{ listStyleType: "none", display: "flex", justifyContent: "center", marginTop:"2%"}}>
                    { Array.isArray(productList) &&
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
                    { Array.isArray(productList) &&
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

export default ProductDelete;