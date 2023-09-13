import AccountingDepartment from "./AccountingDepartment";
import ManagementMenu from './ManagementMenu'

function Accounting(){
    return (
        <div style={{display: 'flex'}}>
            <ManagementMenu />
            <AccountingDepartment />
        </div>
    )
}
export default Accounting;