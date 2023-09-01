import React from "react";

const DaliyModal = ()=> {


    return (
        <>
            <div className="modal fade" id="modal-lecture-info" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h3 className="lecture-title">웹 프로그래밍</h3>
                            <ul className="lecture-info">
                                <li className="lecture-time">
                                    <i className="material-icons ic-lecture-info">access_alarm</i>
                                    <span>강의 시간 : 09:00 - 10:50 | (월), (수)</span>
                                </li>
                                <li className="lecture-code">
                                    <i className="material-icons ic-lecture-info">code</i>
                                    <span>교과목 코드 : A0000001</span>
                                </li>
                                <li className="lecture-code">
                                    <i className="material-icons ic-lecture-info">school</i>
                                    <span>담당 교수 : 김진수</span>
                                </li>
                                <li className="lecture-code">
                                    <i className="material-icons ic-lecture-info">business</i>
                                    <span>강의실 : 공학관 204</span>
                                </li>
                            </ul>
                            <div className="lecture-description">
                                <p className="txt-description">본 강의에서는 JSP를 이용한 웹 기반 프로그래밍 기초 및 응용기술에 대해 학습합니다. 특히 실습 위주의 수업으로 프로그래밍 스킬
                                    향상 및
                                    실무 능력을 갖출 수 있도록 합니다.
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-dismiss="modal">취소</button>
                            <button type="button" className="btn btn-primary">과목 등록하기</button>
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}

export default DaliyModal;