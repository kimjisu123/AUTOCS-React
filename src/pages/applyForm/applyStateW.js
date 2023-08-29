import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {callGetMarketStateWAPI, callInsertMarketAPI} from '../../apis/MarketAPICalls';
import './stateW.css'
import marketReducer from "../../modules/MarketModule";
import Modal from 'react-modal';

const ApplyStateW = () => {
    const dispatch = useDispatch();
    const market = useSelector(state => state.marketReducer);
    const marketList = market.data;
    console.log("marketList : " + marketList)


    // 모달의 열림/닫힘 상태와 이미지 URL을 관리합니다.
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');

    // 서류 확인 버튼 클릭 시 모달을 열고 이미지 URL을 설정합니다.
    const handleDocumentView = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setModalIsOpen(true);
    };

    // 모달 닫기 함수
    const closeModal = () => {
        setModalIsOpen(false);
    };

    //계정 발급하러
    const handleRegistration = (market) => {
        try {
            const infoToPass = {
                applyNo: market.applyNo,
                name: market.name,
                address: market.address,
                license: market.license,
                email: market.email
            };

            console.log('Info to Pass:', infoToPass);

            // API 호출을 통해 데이터를 서버로 전송합니다.
            callInsertMarketAPI({ infoToPass, dispatch });

        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        // 컴포넌트가 마운트되었을 때 목록을 가져오도록 API 호출
        // callGetEmployeeAPI(dispatch);
        dispatch(callGetMarketStateWAPI());
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
            <h2 className="employee-list-title">영업점 계정 생성 대기</h2>
            {sortedMarketList.length === 0 ? (
                <div className="no-employees">No market found.</div>
            ) : (
                <table className="employee-table">
                    <thead>
                    <tr>
                        <th>대표자명</th>
                        <th>주소</th>
                        <th>신청일</th>
                        <th>이메일</th>
                        <th>사업자등록번호</th>
                        <th>상태</th>
                        <th>표준가맹계약서</th>
                        <th>계정발급</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sortedMarketList
                        //.filter(market => market.state === 'W')
                        .map(market => (
                        <tr key={market.applyNo}>
                            <td>{market.name}</td>
                            <td>{market.address}</td>
                            <td>{market.registDate.split('T')[0].replace(/-/g, '/')}</td>
                            <td>{market.email}</td>
                            <td>{market.license}</td>
                            <td>{market.state}</td>
                            <td><button onClick={() => handleDocumentView(market.fileUrl)}>서류확인</button></td>
                            <td><button onClick={() => handleRegistration(market)}>
                                계정발급
                            </button></td>
                        </tr>
                    ))}
                    {/* 모달 */}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Document Modal"
                    >
                        {/* 이미지 표시 */}
                        {selectedImageUrl && (
                            <img src={selectedImageUrl} alt="Document" />
                        )}
                        {/* 모달 닫기 버튼 */}
                        <button onClick={closeModal}>닫기</button>
                    </Modal>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ApplyStateW;





