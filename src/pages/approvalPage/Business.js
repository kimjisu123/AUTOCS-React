import BusinessContent from './BusinessContent';
import ApprovalMenubar from './ApprovalMenubar';
import {PurchaseProvider} from "./appContext/PurchaseContext";

function Business() {

    return (
        <div style={{display:"flex"}}>
            <ApprovalMenubar/>
            <PurchaseProvider>
                <BusinessContent/>
            </PurchaseProvider>
        </div>
    )
}

export default Business;