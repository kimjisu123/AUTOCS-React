import DepartmentContent from './DepartmentContent'
import ManagementMenu from './ManagementMenu'
import DepartmentDetails from "./DepartmentDetails";

function Department(){
    return (
        <div style={{display: 'flex'}}>
            <ManagementMenu />
            <div>
                <DepartmentContent />
            </div>
        </div>
    )
}
export default Department;