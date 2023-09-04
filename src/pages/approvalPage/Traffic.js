import TrafficContent from './TrafficContent';
import ApprovalMenubar from './ApprovalMenubar';
import {PurchaseProvider} from "./appContext/PurchaseContext";

function Traffic() {

    return (
        <div style={{display:"flex"}}>
            <ApprovalMenubar/>
            <PurchaseProvider>
                <TrafficContent/>
            </PurchaseProvider>

        </div>
    )
}

export default Traffic;