import StockCSS from './Stock.module.css'
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

import {
    callProductListAPI,
    callProductListByNameAPI
} from '../../apis/StockAPICalls'


function ListPopup() {

    /*******************************************************************************/
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer);
    const productList = products.data;

    const [selectedProductName, setSelectedProductName] = useState(""); // 선택된 물품명
    const [selectedProductNameInProductDelete, setSelectedProductNameInProductDelete] = useState('');


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
            s: form.s,
            currentPage: 1
        }));
    }

    const onEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClickSearchHandler();
        }
    };

    // 물품명 셀 클릭 이벤트 핸들러
    const onProductNameClick = (productNo, productName, productStandard, productUnit, productStock, productPrice ) => {
        window.opener.document.getElementById( "parentCodeValue" ).value = productNo;
        window.opener.document.getElementById( "parentNameValue" ).value = productName;
        window.opener.document.getElementById( "parentStandardValue" ).value = productStandard;
        window.opener.document.getElementById( "parentUnitValue" ).value = productUnit;
        window.opener.document.getElementById( "parentStockValue" ).value = productStock.toLocaleString();
        window.opener.document.getElementById( "parentPriceValue" ).value = productPrice.toLocaleString();
        console.log('선택한 제품 번호:', productNo);
        console.log('선택한 제품 이름:', productName);
        window.close();
    };

    /*******************************************************************************/

    return (
        <div className={StockCSS.listbox}>
            <div className={StockCSS.contentsbox}>
                <h1>조회목록</h1>
                <input
                    name='s'
                    placeholder={'품목명을 입력하세요'}
                    onChange={ onChangeHandler }
                    onKeyPress={onEnterKeyPress}
                />
                    <button onClick={onClickSearchHandler}>조회</button>
                    <table className={StockCSS.stockTable}>
                        <tr>
                            <th>CODE</th>
                            <th>카테고리명</th>
                            <th>품목명</th>
                            <th>단위</th>
                            <th>규격</th>
                            <th>불용일</th>
                        </tr>
                        {
                            Array.isArray(productList) && productList.map((product) => (
                                <tr key={ product.productNo }
                                    onClick={() =>
                                        onProductNameClick(product.productNo, product.name, product.standard.name,
                                            product.unit.name, product.stock, product.price)} // 선택 핸들러 수정
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td>{ product.productNo }</td>
                                    <td>{ product.category.name}</td>
                                    <td>{ product.name }</td>
                                    <td>{ product.standard.name }</td>
                                    <td>{ product.unit.name }</td>
                                    <td>{ product.unusedDate }</td>
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
