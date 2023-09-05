import StockCSS from './Stock.module.css'
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {Navigate, useNavigate} from "react-router-dom";

import {
    callProductListAPI,
    callProductUpdateAPI
} from '../../apis/StockAPICalls'

function showPopup()
{ window.open('/ListPopup', "a", "width=400, height=800, left=100, top=50");
    document.getElementById( "parentCodeValue" ).value = '';
    document.getElementById( "parentNameValue" ).value = '';
}

function ProductDelete() {

    /*******************************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 수정
    const [modifyMode, setModifyMode] = useState(false);

    // 조회
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
            dispatch(callProductListAPI({
                currentPage: currentPage
            }));
        }
        ,[currentPage]
    );


    // 수정
    const [modifyForm, setModifyForm] = useState({
        productNo: '',
        unusedDate: '',
    });

    // form 데이터 세팅
    const onChangeHandler = (e) => {
        setModifyForm({
            ...modifyForm,
            [e.target.name]: e.target.value
        });
        console.log('--------------------',e.target.value)
        console.log('====================',document.getElementById( "parentCodeValue" ).value)
    };

    const onClickRegistHandler = () => {
        const confirmed = window.confirm('등록 하시겠습니까?');
        if (confirmed) {

            // 업데이트 로직 적용
            const formData = new FormData();
            formData.append("productNo", document.getElementById( "parentCodeValue" ).value);
            formData.append("unusedDate", modifyForm.unusedDate);

            dispatch(callProductUpdateAPI({
                form: formData
            }));

            setModifyMode(false);
            alert('등록되었습니다.');
            navigate('/stock/productdelete', { replace: true });
            window.location.reload();
        }
    }


    /*******************************************************************************/

    return(
        <div>
            <div className={StockCSS.headLine}>물품 불용등록</div>

            <table className={StockCSS.stockTable}>
                <tr>
                    <td>
                        CODE
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}
                               name='productNo'
                               type="text"
                               id="parentCodeValue"
                               placeholder="물품명을 조회하세요"
                               readOnly/>
                    </td>
                    <td>
                        <button onClick={()=> showPopup()}>조회</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        물품명
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}
                               type="text"
                               id="parentNameValue"
                               readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        불용시작일
                    </td>
                    <td>
                        <input name='unusedDate' type="date" onChange={onChangeHandler}/>
                    </td>
                    <td>
                        <button onClick={ onClickRegistHandler }>등록</button>
                    </td>
                </tr>
            </table>

            <div style={{visibility: "none"}}>
                <input style={{display: "none"}} type="text" id="parentStandardValue"/>
                <input style={{display: "none"}} type="text" id="parentUnitValue"/>
                <input style={{display: "none"}} type="text" id="parentStockValue"/>
                <input style={{display: "none"}} type="text" id="parentPriceValue"/>
            </div>

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
                            Array.isArray(productList) && productList.map((product) => (
                                <tr key={ product.productNo }>
                                    <td>{ product.productNo }</td>
                                    <td>{ product.category.name}</td>
                                    <td>{ product.name }</td>
                                    <td>{ product.standard.name}</td>
                                    <td>{ product.unit.name}</td>
                                    <td>{ product.stock }</td>
                                    <td>{ product.price }</td>
                                    <td>{ product.etc }</td>
                                    <td>{ product.registDate }</td>
                                    <td>{ product.unusedDate }</td>
                                    <td>{ product.status }</td>
                                </tr>
                            ))
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