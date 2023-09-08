import img from './loginMain.png'
import './outMForm.css'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import {decodeJwt} from "../../util/tokenUtils";
import {callEmployeeOutAPI} from "../../apis/MemberAPICalls";
import {useDispatch, useSelector} from "react-redux";

const OutMForm = () => {

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const dispatch = useDispatch();

    const [reason, setReason] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    // const apply = useSelector(state => state.memberReducer) || null;
    // console.log("apply>>>>>>>>>>>>>", apply);

    // if (apply && apply.data) {
    //     console.log("applydata>>>>>>>>>>>>>", apply.data);
    //     console.log("applydata>>>>>>>>>>>>>", apply.data.reason);
    //
    //     if (apply.data.reason) {
    //         window.alert('이미 신청하신 이력이 있습니다.');
    //         window.location = "/main";
    //     }
    // }


    //신청
    const handleEOut = () => {

        if (!reason || !selectedDate) {
            window.alert('퇴사일과 사유를 입력해주세요.');
            return;
        }

        try {
            const outInfo = {
                "employee": {
                    "name": decodedToken.Name,
                    "department": decodedToken.Department,
                    "position": decodedToken.Position,
                    "employeeOut": selectedDate,
                    "reason": reason,
                },
                "member": {
                    "no": decodedToken.MemberNo
                }
            };

            console.log('Info to Pass:', outInfo);

            dispatch(callEmployeeOutAPI(outInfo))

            console.log('Employee Out Process End!!');

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    return (
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px"}} />

                    <h1 style={{ color: "#1C2C10" }}>계정 비활성화 신청</h1>
                    <div className="separator" style={{width: "50%"}}></div>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>이름</h4>
                    <input className="lo" type="text" id="name" name="name" value={decodedToken.Name} readOnly required />

                    <h4 style={{ marginBottom: "10px", marginTop: "5px", background: "white" }}>퇴사일(선택)</h4>
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="퇴사일을 입력하세요"
                        id="join"
                        name="join"
                        className="date-pickers"
                        locale={ko}
                    />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>부서</h4>
                    <input className="lo" type="text" id="department" department="name" value={decodedToken.Department} readOnly required />


                    <h4 style={{ marginBottom: "10px", marginTop: "20px", background: "white"}}>직급</h4>
                    <input className="lo" type="text" id="position" department="position" value={decodedToken.Position} readOnly required />


                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>퇴사 사유(작성)</h4>
                    <input
                        className="reson"
                        type="text"
                        id="reason"
                        name="reason"
                        value={reason}
                        onChange={handleReasonChange}
                        required
                    />

                    <button type="button" className="regist" onClick={handleEOut}>
                        신청하기
                    </button>
                </main>
            </div>
    )
}

export default OutMForm;