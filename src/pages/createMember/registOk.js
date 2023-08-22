import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetEmployeeAPI } from '../../apis/MemberAPICalls';
import memberReducer from "../../modules/MemberModule";

const RegistOk = () => {
    const dispatch = useDispatch();
    const employees = useSelector(state => state.memberReducer);
    const employeeList = employees.data;
    // const employeeList = employeeLi.data;
    // console.log("employeeLi : ", employeeLi);
    // console.log("employeeList : ", employeeList);

    useEffect(() => {
        // 컴포넌트가 마운트되었을 때 사원 목록을 가져오도록 API 호출
        // callGetEmployeeAPI(dispatch);
        dispatch(callGetEmployeeAPI());
    });

    // employeeList가 아직 로드되지 않은 경우 로딩 중 메시지 표시
    if (!employeeList) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>직원 목록</h2>
            {employeeList.length === 0 ? (
                <div>No employees found.</div>
            ) : (
                <ul>
                    {employeeList && employeeList.map(employee => (
                        <li key={employee.employeeNo}>{employee.name},{employee.employeeJoin},{employee.departmentCode},{employee.positionCode}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RegistOk;