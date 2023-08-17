import './approvalCss.css';

const onClickAddHandler = () => {
    let inputRow = document.getElementById('inputRow');
    console.log(inputRow);
}

function ApprovalContent() {

    return (
        <div className="content">
            <div className="modify">
                결재선 추가
            </div>
            <div className="area1">구 매 요 청</div>
            <br/><br/>
                <div className="area2">
                    <div className="area3">
                        <table className="table1">
                            <tr>
                                <td className="td2">작 성 자</td>
                                <td className="td1">박지호</td>
                            </tr>
                            <tr>
                                <td className="td2">소 속 부 서</td>
                                <td className="td1">영업 1부</td>
                            </tr>
                            <tr>
                                <td className="td2">작 성 날 짜</td>
                                <td className="td1">2023-08-15</td>
                            </tr>
                            <tr>
                                <td className="td2">문 서 번 호</td>
                                <td className="td1"></td>
                            </tr>
                        </table>
                    </div>
                    <div style={{display: "flex"}}>
                        <div className="approve">
                            <span className="area4">요청</span>
                            <span className="area5" style={{marginRight: 20}}>
                            <div className="area6">사원</div>
                            <div className="area7">박지호</div>
                            <div className="area8"></div>
                        </span>
                            <span className="area4">승인</span>
                            <span className="area5">
                            <div className="area6">팀장</div>
                            <div className="area7">유승제</div>
                            <div className="area8"></div>
                        </span>
                            <span className="area5">
                            <div className="area6">이사</div>
                            <div className="area7">김마야</div>
                            <div className="area8"></div>
                        </span>
                        </div>
                    </div>
                </div>
                <br/><br/>
                    <div className="docTitle">
                        <div className="area9">제목</div>
                        <input type="text" name="docTitle" id="docTitle"/>
                    </div>
                    <br/><br/>
                        <div className="addDelBtn">
                            <div className="add" onClick={ onClickAddHandler }>추가</div>
                            <div className="delete">삭제</div>
                        </div>
                        <div className="area10">
                            <table className="table2">
                                <tr>
                                    <td className="productName">품명</td>
                                    <td className="productSize">규격</td>
                                    <td className="amount">수량</td>
                                    <td className="price">단가</td>
                                    <td className="totalPrice">금액</td>
                                    <td className="note">비고</td>
                                </tr>
                                <tr id='inputRow'>
                                    <td className="td3"><input type="text" name="productName"/></td>
                                    <td className="td3"><input type="text" name="productSize"/></td>
                                    <td className="td3"><input type="text" name="amount"/></td>
                                    <td className="td3"><input type="text" name="price"/></td>
                                    <td className="td3"></td>
                                    <td className="td3"><input type="text" name="note"/></td>
                                </tr>
                            </table>
                            <div className="area11">
                                <div className="area12">합계</div>
                                <div className="allPrice">1,000,000</div>
                            </div>
                        </div>
                        <br/><br/><br/>
                            <div className="file">
                                <label htmlFor="fileBtn">파일 업로드</label>
                                <input type="file" className="fileBtn" name="fileBtn" id="fileBtn"/>
                                <div className="fileShow"></div>
                            </div>
                            <br/><br/><br/>
        </div>
    )
}

export default ApprovalContent;
