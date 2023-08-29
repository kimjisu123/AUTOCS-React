import BusinessContent from './BusinessContent';
import ApprovalMenubar from './ApprovalMenubar';

function Business() {

    return (
        <div style={{display:"flex"}}>
            <ApprovalMenubar/>
            <BusinessContent/>
        </div>
    )
}

export default Business;