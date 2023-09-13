import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { batch } from 'react-redux';
import {
    callCategoryListAPI,
    callStandardListAPI,
    callUnitListAPI,
    callProductRegistAPI,

} from '../../apis/StockAPICalls'

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function ProductRegist() {


    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 카테고리, 규격, 단위 조회
    useEffect(() => {
        dispatch(callUnitListAPI());
        dispatch(callCategoryListAPI());
        dispatch(callStandardListAPI());
    }, []);

    const categoryList = useSelector(state => state.categoryReducer);
    const standardList = useSelector(state => state.standardReducer);
    const unitList = useSelector(state => state.unitReducer);

// 물품 등록
    const [form, setForm] = useState({
        name: '',
        stock: '',
        price: '',
        etc: '',
        // registDate: new Date().getTime(),
        // unusedDate: '2022-08-01',
        // status: 'Y',
        refProductCategoryNo: '',
        refProductStandardNo: '',
        refProductUnitNo: '',
    });


// form 데이터 세팅
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };



/* 물품 등록 */
const onClickRegistHandler = () => {

    const confirmed = window.confirm('등록하시겠습니까?');
    if (confirmed) {

        const formData = new FormData();

        formData.append("name", form.name);
        formData.append("stock", form.stock);
        formData.append("price", form.price);
        formData.append("etc", form.etc);
        // formData.append("registDate", form.registDate);
        // formData.append("unusedDate", form.unusedDate);
        // formData.append("status", form.status);
        formData.append("refProductCategoryNo", form.refProductCategoryNo);
        formData.append("refProductStandardNo", form.refProductStandardNo);
        formData.append("refProductUnitNo", form.refProductUnitNo);

        dispatch(callProductRegistAPI({
            form: formData
        }));

        alert('등록되었습니다.');
        navigate('/stock/productregist', {replace: true});
        window.location.reload();
    }        else {
        alert('취소되었습니다.');
    }
}


    /********************************************************************/

    return(
        <div>
            <div className={StockCSS.headLine}>물품 신규등록</div>
            <table className={StockCSS.stockTable}>
                <tr>
                    <td>
                        카테고리
                    </td>
                    <td>
                        <select
                            className={StockCSS.selectOption}
                            name='refProductCategoryNo'
                            onChange={ onChangeHandler }>
                            <option> </option>
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
                        <input
                            name='name'
                            placeholder={'품목명을 입력하세요'}
                            onChange={ onChangeHandler }
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        규격
                    </td>
                    <td>
                        <select
                            className={StockCSS.selectOption}
                            name='refProductStandardNo'
                            onChange={ onChangeHandler }>
                            <option> </option>
                            {
                                Array.isArray(standardList) && standardList.map((standard) => (
                                    <option  value={standard.productStandardNo} >{standard.name}</option>
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
                        <select
                            className={StockCSS.selectOption}
                            name='refProductUnitNo'
                            onChange={ onChangeHandler }>
                            <option> </option>
                        {
                            Array.isArray(unitList) && unitList.map((unit) => (
                                <option value={unit.productUnitNo} >{unit.name}</option>
                            ))
                        }
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        적정재고
                    </td>
                    <td>
                        <input
                            name='stock'
                            placeholder={'적정재고를 입력하세요'}
                            onChange={ onChangeHandler }
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        단가
                    </td>
                    <td>
                        <input
                            name='price'
                            placeholder={'가격을 입력하세요'}
                            onChange={ onChangeHandler }
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        비고
                    </td>
                    <td>
                        <input
                            name='etc'
                            onChange={ onChangeHandler }
                        />
                    </td>
                </tr>
            </table>
            <button style={{marginTop: "5%"}} onClick={ onClickRegistHandler }>등록</button>
        </div>
    )
}

export default ProductRegist;