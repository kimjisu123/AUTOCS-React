import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {callGetOutMarketStateWAPI, callOutGoMarketAPI} from '../../apis/MarketAPICalls';
import '../applyForm/stateW.css'
import Modal from "react-modal";

const ApplyStateW = () => {
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
    const market = useSelector(state => state.marketReducer);
    const marketList = market.data;
    console.log("marketList : " + marketList)

    //계정 비활성화하러
    const handleOutGo = (market) => {
        try {
            const infoToPass = {
                fileNo: market.outFileNo,
                license: market.license,
                no: market.refMemberNo,
                email: market.email
            };

            console.log('Info to Pass:', infoToPass);

            // API 호출을 통해 데이터를 서버로 전송합니다.
            callOutGoMarketAPI({ infoToPass, dispatch });

        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        // 컴포넌트가 마운트되었을 때 목록을 가져오도록 API 호출
        // callGetEmployeeAPI(dispatch);
        dispatch(callGetOutMarketStateWAPI());
    }, []);

    // employeeList가 아직 로드되지 않은 경우 로딩 중 메시지 표시
    if (!marketList) {
        return <div>Loading...</div>;
    }

    const sortedMarketList = marketList.sort((a, b) => {
        const dateA = new Date(a.registDate);
        const dateB = new Date(b.registDate);
        return dateB - dateA; // 최신 신청일 순으로 정렬
    });

    return (
        <div className="employee-list-container">
            <h2 className="employee-list-title">계정 비활성화 신청(영업점)</h2>
            {sortedMarketList.length === 0 ? (
                <div className="no-employees">No market found.</div>
            ) : (
                <table className="employee-table">
                    <thead>
                    <tr>
                        <th>대표자명</th>
                        <th>주소</th>
                        <th>상세주소</th>
                        <th>신청일</th>
                        <th>이메일</th>
                        <th>사업자등록번호</th>
                        <th>상태</th>
                        <th>계약종료/해지확인서</th>
                        <th>계정비활성화</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sortedMarketList
                        .filter(market => market.state === 'W')
                        .map(market => (
                        <tr key={market.storeNo}>
                            <td className="can">{market.name}</td>
                            <td className="can" onClick={() => openModal(market.address)}>{market.address}</td>
                            <td className="can" onClick={() => openModal(market.detailAddress)}>{market.detailAddress}</td>
                            <td className="can">{market.registDate.split('T')[0].replace(/-/g, '/')}</td>
                            <td className="can" onClick={() => openModal(market.email)}>{market.email}</td>
                            <td className="can">{market.license}</td>
                            <td className="can">{market.state}</td>
                            <td>
                                <a href={market.fileUrl} target="_blank" rel="noopener noreferrer" style={{fontSize: "13.5px"}}>서류확인</a>
                            </td>
                            <td><button onClick={() => handleOutGo(market)}>
                                계정비활성화
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

export default ApplyStateW;





