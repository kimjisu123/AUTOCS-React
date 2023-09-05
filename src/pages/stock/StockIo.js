import StockCSS from './Stock.module.css'
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {Navigate, useNavigate} from "react-router-dom";

import {
    callIoListAPI,
    callIoRegistAPI,
} from '../../apis/StockAPICalls'
import ioReducer from "../../modules/IoModule";

function showPopup()
{ window.open('/ListPopup', "a", "width=400, height=800, left=100, top=50");
    document.getElementById( "parentCodeValue" ).value = '';
    document.getElementById( "parentNameValue" ).value = '';
    document.getElementById( "parentStandardValue" ).value = '';
    document.getElementById( "parentUnitValue" ).value = '';
    document.getElementById( "parentStockValue" ).value = '';
    document.getElementById( "parentPriceValue" ).value = '';
}
function StockIo() {

    /*******************************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // 입출고 조회
    const io = useSelector(state => state.ioReducer);
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
    console.log(ioList)

    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callIoListAPI({
                currentPage: currentPage
            }));
        }
        ,[currentPage]
    );


    // 입출고 등록
    const [form, setForm] = useState({
        quantity: '',
        io: '',
        refProductNo: '',
    });


    // form 데이터 세팅
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name)
        console.log(e.target.value)
    };

    /* 입출고 등록 */
    const onClickRegistHandler = () => {
        const confirmed = window.confirm('등록 하시겠습니까?');
        if (confirmed) {

            const formData = new FormData();

            formData.append("refProductNo", document.getElementById( "parentCodeValue" ).value);
            formData.append("quantity", form.quantity);
            formData.append("io", form.io);

            dispatch(callIoRegistAPI({
                form: formData
            }));

            alert('등록되었습니다.');
            navigate('/stock/stockio', { replace: true });
            window.location.reload();
        }
    }


    /*******************************************************************************/

    return (
        <div>
            <div className={StockCSS.headLine}>입고 폐기 등록</div>
            <table className={StockCSS.stockTable}>
                <tr>
                    <td>
                        CODE
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}
                               type="text"
                               id="parentCodeValue"
                               placeholder="품목명을 조회하세요"
                               readOnly/>
                    </td>
                    <td>
                        <button onClick={()=> showPopup()}>조회</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        품목명
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}
                               type="text"
                               id="parentNameValue"
                               readOnly/>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        규격
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}
                               type="text"
                               id="parentStandardValue"
                               readOnly/>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        단위
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}
                               type="text"
                               id="parentUnitValue"
                               readOnly/>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        적정재고
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}
                               type="text"
                               id="parentStockValue"
                               readOnly/>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        단가
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}
                               type="text"
                               id="parentPriceValue"
                               readOnly/>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        입고/폐기 선택
                    </td>
                    <td>
                        <input name='io' type="radio" value="IN" onChange={onChangeHandler}/> 입고
                        <input name='io' type="radio" value="OUT" onChange={onChangeHandler}/> 폐기
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        수량
                    </td>
                    <td>
                        <input type="text"
                        name='quantity'
                        onChange={onChangeHandler}/>
                    </td>
                    <td>
                    </td>
                </tr>
            </table>
            <button style={{marginTop: "5%"}} onClick={ onClickRegistHandler }>등록</button>
            <div style={{marginTop: "5%"}}>

                <div className={StockCSS.middleLine}>
                    입출고 목록
                </div>

                <div>
                    <table className={StockCSS.stockTable}>
                        <tr>
                            {/*<th>NO</th>*/}
                            <th>등록일</th>
                            <th>카테고리</th>
                            <th>품목명</th>
                            <th>규격</th>
                            <th>단위</th>
                            <th className={StockCSS.mainline}>구분</th>
                            <th className={StockCSS.mainline}>수량</th>
                            <th>단가</th>
                        </tr>

                        {
                            Array.isArray(ioList) && ioList.map((io, index) => (
                                <tr key={ io.productIoNo }>
                                    {/*<td>{ index + 1 }</td>*/}
                                    <td>{ io.registDate }</td>
                                    <td>{ io.refProductNo.category.name}</td>
                                    <td>{ io.refProductNo.name}</td>
                                    <td>{ io.refProductNo.unit.name}</td>
                                    <td>{ io.refProductNo.standard.name}</td>
                                    <td className={StockCSS.mainline}>{ io.io}</td>
                                    <td className={StockCSS.mainline}>{ io.quantity }</td>
                                    <td>{ io.refProductNo.price }</td>
                                </tr>
                            ))
                        }

                    </table>
                </div>

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

export default StockIo;
