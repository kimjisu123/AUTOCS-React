import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callUnitListWithPagingAPI,
    callUnitRegistAPI,
    callUnitUpdateAPI
} from '../../apis/StockAPICalls'
import {GET_IO_GROUP} from "../../modules/IoGroupModule";

function Unit() {

    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 수정
    const [modifyMode, setModifyMode] = useState(false);
    const [selectedUnits, setSelectedUnits] = useState([]); // 배열로 선택된 카테고리 저장


    // 조회
    const units = useSelector(state => state.unitReducer);
    const unitList = units.data;
    const pageInfo = units.pageInfo;

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
            dispatch(callUnitListWithPagingAPI({
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
        productUnitNo: '',
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

            dispatch(callUnitRegistAPI({
                form: formData
            }));

            alert('등록되었습니다.');
            navigate('/stock/unit', {replace: true});
            window.location.reload();
        }
    }


    // 수정
    const onClickModifyModeHandler = (e) => {    // 수정모드
        setModifyMode(true);

        let inputValue = { productUnitNo: e.target.value };
        console.log(e.target.value);

        setSelectedUnits(prevSelectedUnits => [...prevSelectedUnits, inputValue]);
        console.log(selectedUnits);
    }

    /* 미사용 핸들러 */
    const onClickUnuseHandler = () => {
        const confirmed = window.confirm('미사용 하시겠습니까?');
        if (confirmed) {
            selectedUnits.forEach(form => {
                const formData = new FormData();
                formData.append("productUnitNo", form.productUnitNo);
                formData.append("name", form.name);
                formData.append("useYn", 'N');

                dispatch(callUnitUpdateAPI({
                    form: formData
                }));
            });

            setModifyMode(false);
            setSelectedUnits([]); // 선택된 카테고리 초기화

            alert('수정되었습니다.');
            navigate('/stock/unit', { replace: true });
            window.location.reload();
        }
    }

    /* 사용 핸들러 */
    const onClickUseHandler = () => {
        const confirmed = window.confirm('사용 하시겠습니까?');
        if (confirmed) {
            selectedUnits.forEach(form => {
                const formData = new FormData();
                formData.append("productUnitNo", form.productUnitNo);
                formData.append("name", form.name);
                formData.append("useYn", 'Y');

                dispatch(callUnitUpdateAPI({
                    form: formData
                }));
            });

            setModifyMode(false);
            setSelectedUnits([]); // 선택된 카테고리 초기화

            alert('수정되었습니다.');
            navigate('/stock/unit', { replace: true });
            window.location.reload();
        }
    }
    /********************************************************************/

    return(
        <div>
            <div className={StockCSS.headLine}>단위 관리</div>
            <table className={StockCSS.stockTable}>
                <tr>
                    <td>
                        단위명
                    </td>
                    <td>
                        <input
                            name='name'
                            placeholder="단위명을 입력하세요"
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
                    단위 목록
                    <div>
                        <button style={{marginRight: "10px"}} onClick={ onClickUseHandler }>사용</button>
                        <button onClick={ onClickUnuseHandler }>미사용</button>
                    </div>
                </div>

                <table className={StockCSS.stockTable}>
                    <tr>
                        <th>CODE</th>
                        <th>단위명</th>
                        <th>사용여부</th>
                        <th>상태변경</th>
                    </tr>
                    {
                        Array.isArray(unitList) && unitList.map((unit) => (
                            <tr key={unit.productUnitNo}>
                                <td>{unit.productUnitNo}</td>
                                <td>{unit.name}</td>
                                <td>{unit.useYn}</td>
                                <td><input type="checkbox"
                                           value={unit.productUnitNo}
                                           onClick={onClickModifyModeHandler} /></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Unit;