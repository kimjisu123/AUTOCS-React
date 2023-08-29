import ApprovalHome from './ApprovalHome'
import ApprovalMenubar from './ApprovalMenubar'

function AppHome() {

    return (
        <div style={{display:"flex"}}>
            <ApprovalMenubar/>
            <ApprovalHome/>
        </div>
    )
}

export default AppHome;