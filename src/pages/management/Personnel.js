import PersonnelDepartment from "./PersonnelDepartment";
import ManagementMenu from './ManagementMenu'

function Personnel(){
    return (
        <div style={{display: 'flex'}}>
            <ManagementMenu />
            <PersonnelDepartment />
        </div>
    )
}
export default Personnel;