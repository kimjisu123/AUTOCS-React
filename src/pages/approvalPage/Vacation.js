import VacationContent from './VacationContent';
import ApprovalMenubar from './ApprovalMenubar';
import {PurchaseProvider} from "./appContext/PurchaseContext";

function Vacation() {

    return (
        <div style={{display:"flex"}}>
            <ApprovalMenubar/>
            <PurchaseProvider>
                <VacationContent/>
            </PurchaseProvider>
        </div>
    )
}

export default Vacation;