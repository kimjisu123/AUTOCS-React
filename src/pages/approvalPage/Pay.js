import PayContent from './PayContent';
import ApprovalMenubar from './ApprovalMenubar';
import {PurchaseProvider} from "./appContext/PurchaseContext";

function Pay () {

    return (
        <div style={{display:"flex"}}>
            <ApprovalMenubar/>
            <PurchaseProvider>
                <PayContent/>
            </PurchaseProvider>
        </div>
    )
}

export default Pay;