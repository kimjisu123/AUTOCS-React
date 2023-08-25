import StockCSS from './Stock.module.css'
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

import {
    callProductListAPI,
    callProductListByNameAPI
} from '../../apis/StockAPICalls'


function ListPopup() {

    /*******************************************************************************/


    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer);
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
            dispatch(callProductListByNameAPI({
                currentPage: currentPage,
                s: form.s
            }));
        }
        ,[currentPage]
    );

    // 물품 조회
    const [form, setForm] = useState({
        s: '',
    });

    // form 데이터 세팅
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    /* 물품 조회 */
    const onClickSearchHandler = () => {

        const formData = new FormData();

        formData.append("s", form.s);

        dispatch(callProductListByNameAPI({
            form: formData
        }));

    }

    /*******************************************************************************/

    return (
        <div className={StockCSS.listbox}>
            <div className={StockCSS.contentsbox}>
                <h1>조회목록</h1>
                <input
                    name='s'
                    placeholder={'품목명을 입력하세요'}
                    onChange={ onChangeHandler }
                />
                    <button onClick={onClickSearchHandler}>조회</button>
                    <table className={StockCSS.stockTable}>
                        <tr>
                            <th>CODE</th>
                            <th>카테고리명</th>
                            <th>품목명</th>
                            <th>사용상태</th>
                        </tr>
                        {
                            Array.isArray(productList) && productList.map((product) => (
                                <tr key={ product.productNo }>
                                    <td>{ product.productNo }</td>
                                    <td>{ product.category.name}</td>
                                    <td>{ product.name }</td>
                                    <td>{ product.status }</td>
                                </tr>
                            ))
                        }
                    </table>
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
export default ListPopup;
