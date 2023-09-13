import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callStandardListWithPagingAPI,
    callStandardRegistAPI,
    callStandardUpdateAPI
} from '../../apis/StockAPICalls'


function Standard() {

    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 수정
    const [modifyMode, setModifyMode] = useState(false);
    const [selectedStandards, setSelectedStandards] = useState([]); // 배열로 선택된 카테고리 저장


    // 조회
    const standards = useSelector(state => state.standardReducer);
    const standardList = standards.data;
    const pageInfo = standards.pageInfo;

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
            dispatch(callStandardListWithPagingAPI({
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
        productStandardNo: '',
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
            const formData = new FormData();

            formData.append("name", form.name);
            formData.append("useYn", form.useYn);

            dispatch(callStandardRegistAPI({
                form: formData
            }));

            alert('등록되었습니다.');
            navigate('/stock/standard', {replace: true});
            window.location.reload();
        }        else {
            alert('취소되었습니다.');
        }
    }


    // 수정
    const onClickModifyModeHandler = (e) => {    // 수정모드
        setModifyMode(true);

        let inputValue = { productStandardNo: e.target.value };
        console.log(e.target.value);

        setSelectedStandards(prevSelectedStandards => [...prevSelectedStandards, inputValue]);
        console.log(selectedStandards);
    }

    /* 미사용 핸들러 */
    const onClickUnuseHandler = () => {
        const confirmed = window.confirm('미사용 하시겠습니까?');
        if (confirmed) {
            selectedStandards.forEach(form => {
                const formData = new FormData();
                formData.append("productStandardNo", form.productStandardNo);
                formData.append("name", form.name);
                formData.append("useYn", 'N');

                dispatch(callStandardUpdateAPI({
                    form: formData
                }));
            });

            setModifyMode(false);
            setSelectedStandards([]); // 선택된 카테고리 초기화

            alert('수정되었습니다.');
            navigate('/stock/standard', { replace: true });
            window.location.reload();
        }        else {
            alert('취소되었습니다.');
        }
    }

    /* 사용 핸들러 */
    const onClickUseHandler = () => {
        const confirmed = window.confirm('사용 하시겠습니까?');
        if (confirmed) {
            selectedStandards.forEach(form => {
                const formData = new FormData();
                formData.append("productStandardNo", form.productStandardNo);
                formData.append("name", form.name);
                formData.append("useYn", 'Y');

                dispatch(callStandardUpdateAPI({
                    form: formData
                }));
            });

            setModifyMode(false);
            setSelectedStandards([]); // 선택된 카테고리 초기화

            alert('수정되었습니다.');
            navigate('/stock/standard', { replace: true });
            window.location.reload();
        }        else {
            alert('취소되었습니다.');
        }
    }
    /********************************************************************/


    return(
        <div>
            <div className={StockCSS.headLine}>규격 관리</div>
            <table className={StockCSS.stockTable}>
                <tr>
                    <td>
                        규격명
                    </td>
                    <td>
                        <input
                            name='name'
                            placeholder="규격명을 입력하세요"
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
                    규격 목록
                    <div>
                        <button style={{marginRight: "10px"}} onClick={ onClickUseHandler }>사용</button>
                        <button onClick={ onClickUnuseHandler }>미사용</button>
                    </div>
                </div>

                <table className={StockCSS.stockTable}>
                    <tr>
                        <th>CODE</th>
                        <th>규격명</th>
                        <th>사용여부</th>
                        <th>상태변경</th>
                    </tr>
                    {
                        Array.isArray(standardList) && standardList.map((standard) => (
                            <tr key={standard.productStandardNo}>
                                <td>{standard.productStandardNo}</td>
                                <td>{standard.name}</td>
                                <td>{standard.useYn}</td>
                                <td><input type="checkbox" value={standard.productStandardNo} onClick={onClickModifyModeHandler} /></td>
                            </tr>
                        ))
                    }
                </table>
                <div style={{ listStyleType: "none", display: "flex", justifyContent: "center", marginTop:"2%"}}>
                    { Array.isArray(standardList) &&
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
                    { Array.isArray(standardList) &&
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

export default Standard;