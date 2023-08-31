import PurchaseContent from './PurchaseContent';
import ApprovalMenubar from './ApprovalMenubar';
import {PurchaseProvider} from './appContext/PurchaseContext'

function Purchase() {

    return (
        <div style={{display:"flex"}}>
            <ApprovalMenubar/>
            <PurchaseProvider>
                <PurchaseContent/>
            </PurchaseProvider>
        </div>
    )
}

export default Purchase;