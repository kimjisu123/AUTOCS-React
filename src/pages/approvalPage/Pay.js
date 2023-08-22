import PayContent from './PayContent';
import ApprovalMenubar from './ApprovalMenubar';

function Pay () {

    return (
        <div style={{display:"flex"}}>
            <ApprovalMenubar/>
            <PayContent/>
        </div>
    )
}

export default Pay;