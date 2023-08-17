import './approvalCss.css'

function ApprovalMenubar() {

    return(
        <>
            <div className="menubar" style={{width: "295px",  height: "959px", paddingTop: "30px"}}>
            <div className="newApp">새 결재 진행</div>
            <div className="documentForm">
            문서 양식
            </div>
            <div className="purchase">구매요청</div>
            <div className="traffic">여비정산</div>
            <div className="business">업무보고</div>
            <div className="vacation">휴가신청</div>
            <div className="pay">비용청구</div>
            <div className="goApp">
            결재하기
            </div>
            <div className="appWait">결재 대기 문서</div>
            <div className="appSee">참조/열람 대기 문서</div>
            <div className="appSoon">결재 예정 문서</div>
            <div className="myDocument">
            개인 문서함
            </div>
            <div className="myBusiness">업무 문서함</div>
            <div className="myApp">결재 문서함</div>
            <div className="mySee">참조/열람 문서함</div>
            <div className="receive">수신 문서함</div>
            <div className="send">발신 문서함</div>
            </div>
        </>
    )
}

export default ApprovalMenubar;