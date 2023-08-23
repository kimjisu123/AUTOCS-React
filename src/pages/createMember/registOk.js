import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetEmployeeAPI } from '../../apis/MemberAPICalls';
import memberReducer from "../../modules/MemberModule";
import './registOk.css'

const RegistOk = () => {
    const dispatch = useDispatch();
    const employees = useSelector(state => state.memberReducer);
    const employeeList = employees.data;
    console.log("employeeList : " + employeeList)

    useEffect(() => {
        // 컴포넌트가 마운트되었을 때 사원 목록을 가져오도록 API 호출
        // callGetEmployeeAPI(dispatch);
        dispatch(callGetEmployeeAPI());
    }, []);

    // employeeList가 아직 로드되지 않은 경우 로딩 중 메시지 표시
    if (!employeeList) {
        return <div>Loading...</div>;
    }

    const sortedEmployeeList = employeeList.sort((a, b) => {
        const dateA = new Date(a.employeeJoin);
        const dateB = new Date(b.employeeJoin);
        return dateB - dateA; // 최신 입사일 순으로 정렬
    });

    return (
        <div className="employee-list-container">
            <h2 className="employee-list-title">직원 목록</h2>
            {sortedEmployeeList.length === 0 ? (
                <div className="no-employees">No employees found.</div>
            ) : (
                <table className="employee-table">
                    <thead>
                    <tr>
                        <th>이름</th>
                        <th>입사일</th>
                        <th>부서</th>
                        <th>직급</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sortedEmployeeList.map(employee => (
                        <tr key={employee.employeeNo}>
                            <td>{employee.name}</td>
                            <td>{employee.employeeJoin.split('T')[0].replace(/-/g, '/')}</td>
                            <td>{employee.departmentCode}</td>
                            <td>{employee.positionCode}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}


export default RegistOk;