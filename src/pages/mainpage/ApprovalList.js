import CardCSS from './Table.module.css';
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import {callGetAppLineAPI} from "../../apis/ApprovalAPICalls";
import { useSelector, useDispatch } from 'react-redux';

const ApprovalList = () => {

    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(callGetAppLineAPI());
        },
        []
    )

    const list = useSelector(state => state.approvalReducer);

    return (
        <>
            <link href={"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"} rel="stylesheet"/>
            <div className={`${CardCSS.container} mt-5 pt-4`}>
                <div className={CardCSS.row}>
                    <div className={CardCSS.card}>
                        <div className={`${CardCSS.card} border-0 bg-light rounded shadow`}>
                            <div className={`${CardCSS.cardBody } p-4`}>
                                <span className={CardCSS.badge}></span>
                                <span className={CardCSS.badgeText}><strong>대기중</strong></span>
                                <div className={CardCSS.cardDetail}>
                                    <small>업무보고</small>
                                    <span><NavLink to="/stock/myorderlist/detail">2023년 8월 첫 째주 업무보고</NavLink></span>
                                    <div className={CardCSS.detailCard}>
                                        <h5>김 사 원</h5>
                                        <h5>2023-08-14</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*    */}
                    <div className={CardCSS.card}>
                        <div className={`${CardCSS.card} border-0 bg-light rounded shadow`}>
                            <div className={`${CardCSS.cardBody } p-4`}>
                                <span className={CardCSS.badge}></span>
                                <span className={CardCSS.badgeText}>대기중</span>
                                <div className={CardCSS.cardDetail}>
                                    <span><NavLink to="/stock/myorderlist/detail">문서제목1</NavLink></span>
                                    <div className={CardCSS.detailCard}>
                                        <h5>Tester</h5>
                                        <h5>2023.2.23</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*    */}
                    <div className={CardCSS.card}>
                        <div className={`${CardCSS.card} border-0 bg-light rounded shadow`}>
                            <div className={`${CardCSS.cardBody } p-4`}>
                                <span className={CardCSS.badge}></span>
                                <span className={CardCSS.badgeText}>대기중</span>
                                <div className={CardCSS.cardDetail}>
                                    <span><NavLink to="/stock/myorderlist/detail">문서제목1</NavLink></span>
                                    <div className={CardCSS.detailCard}>
                                        <h5>Tester</h5>
                                        <h5>2023.2.23</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*    */}
                    <div className={CardCSS.card}>
                        <div className={`${CardCSS.card} border-0 bg-light rounded shadow`}>
                            <div className={`${CardCSS.cardBody } p-4`}>
                                <span className={CardCSS.badge}></span>
                                <span className={CardCSS.badgeText}>대기중</span>
                                <div className={CardCSS.cardDetail}>
                                    <span><NavLink to="/stock/myorderlist/detail">문서제목1</NavLink></span>
                                    <div className={CardCSS.detailCard}>
                                        <h5>Tester</h5>
                                        <h5>2023.2.23</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*    */}
                    <div className={CardCSS.card}>
                        <div className={`${CardCSS.card} border-0 bg-light rounded shadow`}>
                            <div className={`${CardCSS.cardBody } p-4`}>
                                <span className={CardCSS.badge}></span>
                                <span className={CardCSS.badgeText}>대기중</span>
                                <div className={CardCSS.cardDetail}>
                                    <span><NavLink to="/stock/myorderlist/detail">문서제목1</NavLink></span>
                                    <div className={CardCSS.detailCard}>
                                        <h5>Tester</h5>
                                        <h5>2023.2.23</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*    */}
                    <div className={CardCSS.card}>
                        <div className={`${CardCSS.card} border-0 bg-light rounded shadow`}>
                            <div className={`${CardCSS.cardBody } p-4`}>
                                <span className={CardCSS.badge}></span>
                                <span className={CardCSS.badgeText}>대기중</span>
                                <div className={CardCSS.cardDetail}>
                                    <span><NavLink to="/stock/myorderlist/detail">문서제목1</NavLink></span>
                                    <div className={CardCSS.detailCard}>
                                        <h5>Tester</h5>
                                        <h5>2023.2.23</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*    */}
                    <div className={CardCSS.card}>
                        <div className={`${CardCSS.card} border-0 bg-light rounded shadow`}>
                            <div className={`${CardCSS.cardBody } p-4`}>
                                <span className={CardCSS.badge}></span>
                                <span className={CardCSS.badgeText}>대기중</span>
                                <div className={CardCSS.cardDetail}>
                                    <span><NavLink to="/stock/myorderlist/detail">문서제목1</NavLink></span>
                                    <div className={CardCSS.detailCard}>
                                        <h5>Tester</h5>
                                        <h5>2023.2.23</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*    */}
                    <div className={CardCSS.card}>
                        <div className={`${CardCSS.card} border-0 bg-light rounded shadow`}>
                            <div className={`${CardCSS.cardBody } p-4`}>
                                <span className={CardCSS.badge}></span>
                                <span className={CardCSS.badgeText}>대기중</span>
                                <div className={CardCSS.cardDetail}>
                                    <span><NavLink to="/stock/myorderlist/detail">문서제목1</NavLink></span>
                                    <div className={CardCSS.detailCard}>
                                        <h5>Tester</h5>
                                        <h5>2023.2.23</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*    */}
                    <div className={CardCSS.card}>
                        <div className={`${CardCSS.card} border-0 bg-light rounded shadow`}>
                            <div className={`${CardCSS.cardBody } p-4`}>
                                <span className={CardCSS.badge}></span>
                                <span className={CardCSS.badgeText}>대기중</span>
                                <div className={CardCSS.cardDetail}>
                                    <span><NavLink to="/stock/myorderlist/detail">문서제목1</NavLink></span>
                                    <div className={CardCSS.detailCard}>
                                        <h5>Tester</h5>
                                        <h5>2023.2.23</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}

export default ApprovalList;