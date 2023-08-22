import PurchaseContent from './PurchaseContent';
import ApprovalMenubar from './ApprovalMenubar';

function Purchase() {

    return (
        <div style={{display:"flex"}}>
            <ApprovalMenubar/>
            <PurchaseContent/>
        </div>
    )
}

export default Purchase;