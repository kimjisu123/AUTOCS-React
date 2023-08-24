import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callCategoryListAPI,
    callStandardListAPI,
    callUnitListAPI,

} from '../../apis/StockAPICalls'

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }


function ProductRegist() {


    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categories = useSelector(state => state.stockReducer);
    const categoryList = categories;


// 카테고리 조회
    useEffect(() => {
        dispatch(callCategoryListAPI());
    }, []);


    // 규격 조회
    const standards = useSelector(state => state.stockReducer);
    const standardList = standards;

    useEffect(() => {
        dispatch(callStandardListAPI());
    }, []);



// 등록
    const [form, setForm] = useState({
        name: '',
        useYn: 'Y',
    });


// form 데이터 세팅
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };



// 등록
// const onClickRegistHandler = () => {
//
//     const confirmed = window.confirm('등록하시겠습니까?');
//     if (confirmed) {
//         console.log('[CategoryRegistration] onClickRegistHandler');
//
//         const formData = new FormData();
//
//         formData.append("name", form.name);
//         formData.append("useYn", form.useYn);
//
//         dispatch(callCategoryRegistAPI({
//             form: formData
//         }));
//
//         alert('등록되었습니다.');
//         navigate('/main/stock/category', {replace: true});
//         window.location.reload();
//     }
// }


    /********************************************************************/

    const onClickRegistHandler= () => {
        alert('등록하시겠습니까?');
    }

    return(
        <div>
            <div className={StockCSS.headLine}>물품 신규등록</div>
            <table className={StockCSS.stockTable}>
                <tr>
                    <td>
                        카테고리
                    </td>
                    <td>
                        <select>
                        {
                            Array.isArray(categoryList) && categoryList.map((category) => (
                                <option value={category.productCategoryNo}>{category.name}</option>
                            ))
                        }
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        품목명
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        규격
                    </td>
                    <td>
                        <select>
                            {
                                Array.isArray(standardList) && standardList.map((standard) => (
                                    <option value={standard.productStandardNo}>{standard.name}</option>
                                ))
                            }
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        단위
                    </td>
                    <td>
                        <select></select>
                    </td>
                </tr>
                <tr>
                    <td>
                        적정재고
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        단가
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        비고
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
            </table>
            <button style={{marginTop: "5%"}} onClick={ onClickRegistHandler }>등록</button>
        </div>
    )
}

export default ProductRegist;