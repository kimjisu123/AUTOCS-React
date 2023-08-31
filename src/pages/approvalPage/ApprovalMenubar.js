import style from './approval.module.css'
import { Link } from 'react-router-dom'
import {useState} from "react";
import NewApproval from './NewApproval'

function ApprovalMenubar() {

        const [newApp, setNewApp] = useState(false);

        const newApproval = () => {
                setNewApp(true);
        }

    return(
        <>
            <div className={style.menubar} style={{width: "295px", height: "910px",  paddingTop: "30px"}}>
                    <Link to='/approval' style={{textDecoration:"none"}}><div className={style.newApp}>전자결재</div></Link>
                    <br/><br/>
            <div className={style.documentForm}>
            문서 작성
            </div>
            <Link to='/approval/purchase' style={{textDecoration:"none"}}><div className={style.purchase}>구매요청</div></Link>
            <Link to='/approval/traffic' style={{textDecoration:"none"}}><div className={style.traffic}>여비정산</div></Link>
            <Link to='/approval/business' style={{textDecoration:"none"}}><div className={style.business}>업무보고</div></Link>
            <Link to='/approval/vacation' style={{textDecoration:"none"}}><div className={style.vacation}>휴가신청</div></Link>
            <Link to='/approval/pay' style={{textDecoration:"none"}}><div className={style.pay}>비용청구</div></Link>
            <div className={style.goApp}>
            결재하기
            </div>
            <Link to='/approval/appWait' style={{textDecoration:"none"}}><div className={style.appWait}>결재 대기 문서</div></Link>
            <Link to='/approval/appSee' style={{textDecoration:"none"}}><div className={style.appSee}>참조/열람 대기 문서</div></Link>
            {/*<Link to='/approval/appSoon' style={{textDecoration:"none"}}><div className={style.appSoon}>결재 예정 문서</div></Link>*/}
            <div className={style.myDocument}>
            개인 문서함
            </div>
            <Link to='/approval/myBusiness' style={{textDecoration:"none"}}><div className={style.myBusiness}>업무 문서함</div></Link>
            <Link to='/approval/myApp' style={{textDecoration:"none"}}><div className={style.myApp}>결재 문서함</div></Link>
            <Link to='/approval/mySee' style={{textDecoration:"none"}}><div className={style.mySee}>참조/열람 문서함</div></Link>
            <Link to='/approval/receive' style={{textDecoration:"none"}}><div className={style.receive}>수신 문서함</div></Link>
            <Link to='/approval/send' style={{textDecoration:"none"}}><div className={style.send}>발신 문서함</div></Link>
            </div>
                {newApp && <NewApproval setNewApp={setNewApp}/>}
        </>
    )
}

export default ApprovalMenubar;