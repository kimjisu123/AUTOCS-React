import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {callGetMarketStateWAPI, callInsertMarketAPI} from '../../apis/MarketAPICalls';
import './stateW.css'
import marketReducer from "../../modules/MarketModule";
import Modal from 'react-modal';

const ApplyStateO = () => {
    const dispatch = useDispatch();
    const market = useSelector(state => state.marketReducer);
    const marketList = market.data;
    console.log("marketList : " + marketList)


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
            <h2 className="employee-list-title">영업점 목록</h2>
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
                    </tr>
                    </thead>
                    <tbody>
                    {sortedMarketList
                        .filter(market => market.state === 'O    ')
                        .map(market => (
                        <tr key={market.applyNo}>
                            <td>{market.name}</td>
                            <td>{market.address}</td>
                            <td>{market.registDate.split('T')[0].replace(/-/g, '/')}</td>
                            <td>{market.email}</td>
                            <td>{market.license}</td>
                            <td>{market.state}</td>
                            <td>
                                <a href={market.fileUrl} target="_blank" rel="noopener noreferrer" style={{fontSize: "13.5px"}}>서류확인</a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ApplyStateO;





