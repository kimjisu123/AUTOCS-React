import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetEmployeeAPI, callOutEmployeeOkAPI } from '../../apis/MemberAPICalls';
import '../createMember/registOk.css'
import Modal from "react-modal";

const RegistOk = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    // 클릭 시 모달 열기
    const openModal = (content) => {
        setModalContent(content);
        setModalIsOpen(true);
    };

    // 모달 닫기
    const closeModal = () => {
        setModalIsOpen(false);
    };

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

    //계정 정지하러
    const handleOutEmployeeOk = (employee) => {
        try {
            const infoToPass = {
                employeeNo: employee.employeeNo,
                name: employee.name
            };

            console.log('Info to Pass:', infoToPass);

            // API 호출을 통해 데이터를 서버로 전송합니다.
            callOutEmployeeOkAPI({ infoToPass, dispatch });

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const sortedEmployeeList = employeeList
        .filter(employee => employee.employeeOut && employee.reason && employee.memberState === "Y    ")
        .sort((a, b) => {
            const dateA = new Date(a.employeeJoin);
            const dateB = new Date(b.employeeJoin);
            return dateB - dateA; // 최신 입사일 순으로 정렬
        });

    return (
        <div className="employee-list-container">
            <h2 className="employee-list-title">계정 비활성화 신청(직원)</h2>
            {sortedEmployeeList.length === 0 ? (
                <div className="no-employees">No employees found.</div>
            ) : (
                <table className="employee-table">
                    <thead>
                    <tr>
                        <th>이름</th>
                        <th>입사일</th>
                        <th>퇴사일</th>
                        <th>부서</th>
                        <th>직급</th>
                        <th>퇴사사유</th>
                        <th>계정정지</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sortedEmployeeList.map(employee => (
                        <tr key={employee.employeeNo}>
                            <td>{employee.name}</td>
                            <td>{employee.employeeJoin.split('T')[0].replace(/-/g, '/')}</td>
                            <td>{employee.employeeOut.split('T')[0].replace(/-/g, '/')}</td>
                            <td>{employee.department}</td>
                            <td>{employee.position}</td>
                            <td onClick={() => openModal(employee.reason)}>{employee.reason}</td>
                            <td><button onClick={() => handleOutEmployeeOk(employee)}>
                                계정정지
                            </button></td>
                        </tr>
                    ))}
                    </tbody>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={{
                            content: {
                                width: '20%',
                                height: '5vh',
                                margin: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            },
                        }}
                    >
                        <div>{modalContent}</div>
                        <button onClick={closeModal} style={{marginTop: "5px"}}>닫기</button>
                    </Modal>
                </table>
            )}
        </div>
    );
}


export default RegistOk;