import CardCSS from './Table.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {callGetAppHomeAPI, callGetAppLineAPI, callGetSendAPI} from "../../apis/ApprovalAPICalls";
import { useSelector, useDispatch } from 'react-redux';
import {format} from "date-fns";


const ApprovalList = () => {

    const dispatch = useDispatch();
    const result = useSelector(state => state.approvalSendReducer);
    const sendList = result.data;
    const navigate = useNavigate();
    console.log("sendList ================= {} ", result.data);
    const pageInfo = result.pageInfo;


    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo) {
        for(let i = 1; i <= pageInfo.pageEnd; i++) {
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callGetSendAPI({
                currentPage: currentPage
            }));
        },

        [currentPage]
    )



    const onClickHandler = (e) => {
        // console.log(e.target.nextSibling.nextSibling.innerText)
        const documentCode = e.target.nextSibling.value;
        const documentType = e.target.nextSibling.nextSibling.innerText;
        navigate('/approval/document', {state:{documentCode : documentCode, documentType : documentType}});
    }

    //내용별 다른 색깔
    function getBackgroundColor(department) {
        switch (department) {
            case '휴가신청':
                return 'rgb(253 243 212)';
            case '업무보고':
                return 'rgb(253 243 212)';
            case '여비정산':
                return 'rgb(253 243 212)';
            case '구매요청':
                return 'rgb(253 243 212)';
            default:
                return 'rgb(70, 84, 5)'; // 기본값 또는 다른 부서일 경우 투명 배경색
        }
    }


    return (
        <>
            <link href={"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"} rel="stylesheet"/>
            {sendList? ( sendList.slice(0, 4).map((item, index) => (
            <div key={index} className={`${CardCSS.container} mt-5 pt-4`}>
                <div className={CardCSS.row}>
                    <div className={CardCSS.card}>
                        <div className={`${CardCSS.card} border-0 bg-light rounded shadow`}>
                            <NavLink to="/approval/">
                            <div className={`${CardCSS.cardBody } p-4`}>
                                <span className={CardCSS.badge}></span>
                                <span className={CardCSS.badgeText}><strong>{item.documentType}</strong></span>
                                <div className={CardCSS.cardDetail}>
                                    <small style={{textAlign:"right"}}>{item.status}</small>
                                    <NavLink to="/approval/"><span>{item.documentTitle}</span></NavLink>
                                    <div className={CardCSS.detailCard}>
                                        <h5>김 사 원</h5>
                                        <h5>{format(new Date(item.applicationDate), 'yyyy-MM-dd')}</h5>
                                    </div>
                                </div>
                            </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            ))):( <h1 style={{color:"#ceced0", textAlign: "center", margin: "300px 0"}}> 진행중인 문서가 없습니다.</h1>)}
        </>
    )
}

export default ApprovalList;