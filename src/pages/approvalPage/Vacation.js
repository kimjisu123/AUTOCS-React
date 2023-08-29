import VacationContent from './VacationContent';
import ApprovalMenubar from './ApprovalMenubar';

function Vacation() {

    return (
        <div style={{display:"flex"}}>
            <ApprovalMenubar/>
            <VacationContent/>
        </div>
    )
}

export default Vacation;