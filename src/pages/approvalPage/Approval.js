import ApprovalContent from './ApprovalContent';
import ApprovalMenubar from './ApprovalMenubar';

function Approval() {

    return (
        <div style={{display:"flex"}}>
            <ApprovalMenubar/>
            <ApprovalContent/>
        </div>
    )
}

export default Approval;