import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callCategoryRegistAPI,
    callCategoryListWithPagingAPI,
    callCategoryUpdateAPI
} from '../../apis/StockAPICalls'

function Category() {

    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 수정
    const [modifyMode, setModifyMode] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]); // 배열로 선택된 카테고리 저장

    // 조회
    const categories = useSelector(state => state.stockReducer);
    const categoryList = categories.data;
    console.log('data',categoryList);
    const pageInfo = categories.pageInfo;

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
            dispatch(callCategoryListWithPagingAPI({
                currentPage: currentPage
            }));
        }
        ,[currentPage]
    );

    // 등록
    const [form, setForm] = useState({
        name: '',
        useYn: 'Y',
    });

    // 수정
    const [modifyForm, setModifyForm] = useState({
        productCategoryNo: '',
        name: '',
        useYn: '',
    });


    // form 데이터 세팅
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // 등록
    const onClickRegistHandler = () => {

        const confirmed = window.confirm('등록하시겠습니까?');
        if (confirmed) {
            console.log('[CategoryRegistration] onClickRegistHandler');

            const formData = new FormData();

            formData.append("name", form.name);
            formData.append("useYn", form.useYn);

            dispatch(callCategoryRegistAPI({
                form: formData
            }));

            alert('등록되었습니다.');
            navigate('/main/stock/category', {replace: true});
            window.location.reload();
        }
    }

    // 수정
    const onClickModifyModeHandler = (e) => {    // 수정모드
        setModifyMode(true);

        let inputValue = { productCategoryNo: e.target.value };
        console.log(e.target.value);

        setSelectedCategories(prevSelectedCategories => [...prevSelectedCategories, inputValue]);
        console.log(selectedCategories);
    }


    /* 미사용 핸들러*/
    const onClickUnuseHandler = () => {
        const confirmed = window.confirm('미사용 하시겠습니까?');
        if (confirmed) {
            // 선택된 카테고리들의 정보를 사용하여 업데이트
            selectedCategories.forEach(form => {
                // 업데이트 로직 적용
                const formData = new FormData();
                formData.append("productCategoryNo", form.productCategoryNo);
                formData.append("name", form.name);
                formData.append("useYn", 'N');

                dispatch(callCategoryUpdateAPI({
                    form: formData
                }));
            });

            setModifyMode(false);
            setSelectedCategories([]); // 선택된 카테고리 초기화

            alert('수정되었습니다.');
            navigate('/main/stock/category', { replace: true });
            window.location.reload();
        }
    }

    /* 사용 핸들러 */
    const onClickUseHandler = () => {
        const confirmed = window.confirm('사용 하시겠습니까?');
        if (confirmed) {
            // 선택된 카테고리들의 정보를 사용하여 업데이트
            selectedCategories.forEach(form => {
                // 업데이트 로직 적용
                const formData = new FormData();
                formData.append("productCategoryNo", form.productCategoryNo);
                formData.append("name", form.name);
                formData.append("useYn", 'Y');

                dispatch(callCategoryUpdateAPI({
                    form: formData
                }));
            });

            setModifyMode(false);
            setSelectedCategories([]); // 선택된 카테고리 초기화

            alert('수정되었습니다.');
            navigate('/main/stock/category', { replace: true });
            window.location.reload();
        }
    }
    /********************************************************************/

    return(
        <div>
            <div className={StockCSS.headLine}>카테고리 관리</div>
            <table className={StockCSS.stockTable}>
                <tr>
                    <td>
                        카테고리명
                    </td>
                    <td>
                        <input
                            name='name'
                            placeholder="카테고리명을 입력하세요"
                            onChange={ onChangeHandler }
                        />
                    </td>
                    <td>
                        <button onClick={ onClickRegistHandler }>등록</button>
                    </td>
                </tr>
            </table>
            <div style={{marginTop: "5%"}}>
                <div className={StockCSS.middleLine}>
                    카테고리 목록
                    <div>
                        <button style={{marginRight: "10px"}} onClick={ onClickUseHandler }>사용</button>
                        <button onClick={ onClickUnuseHandler }>미사용</button>
                    </div>
                </div>
                <table className={StockCSS.stockTable}>
                    <tr>
                        <th>CODE</th>
                        <th>카테고리명</th>
                        <th>사용여부</th>
                        <th>상태변경</th>
                    </tr>

                    {
                        Array.isArray(categoryList) && categoryList.map((category) => (
                            <tr key={category.productCategoryNo}>
                                {/*style={{*/}
                                {/*    backgroundColor: category.useYn.includes("N") ? "lightgray" : "white"*/}
                                {/*}}>*/}
                                <td>{category.productCategoryNo}</td>
                                <td>{category.name}</td>
                                <td>{category.useYn}</td>
                                <td><input type="checkbox" value={category.productCategoryNo} onClick={onClickModifyModeHandler} /></td>
                            </tr>
                        ))
                    }
                </table>

                <div style={{ listStyleType: "none", display: "flex", justifyContent: "center", marginTop:"2%"}}>
                    { Array.isArray(categoryList) &&
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
                    { Array.isArray(categoryList) &&
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

export default Category;