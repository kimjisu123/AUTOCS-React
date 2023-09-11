import ApprovalMenubar from './ApprovalMenubar';
import {useLocation} from "react-router-dom";
import PurchaseType from "./ApprovalDocumentType/PurchaseType";
import TrafficType from "./ApprovalDocumentType/TrafficType";
import BusinessType from "./ApprovalDocumentType/BusinessType";
import PayType from "./ApprovalDocumentType/PayType";
import VacationType from "./ApprovalDocumentType/VacationType";

function ApprovalDocument() {

    const location = useLocation();

    const documentCode = location.state.documentCode;
    const type = location.state.type;
    console.log(type);

    return (

        <div style={{display:"flex"}}>
            <ApprovalMenubar/>
            {type === '구매요청'? <PurchaseType documentCode={documentCode}/> : null}
            {type === '여비정산'? <TrafficType documentCode={documentCode}/> : null}
            {type === '업무보고'? <BusinessType documentCode={documentCode}/> : null}
            {type === '휴가신청'? <VacationType documentCode={documentCode}/> : null}
            {type === '비용청구'? <PayType documentCode={documentCode}/> : null}
        </div>
    )
}

export default ApprovalDocument