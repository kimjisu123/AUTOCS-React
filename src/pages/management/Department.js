import DepartmentContent from './DepartmentContent'
import ManagementMenu from './ManagementMenu'

function Department(){
    return (
        <div style={{display: 'flex'}}>
            <ManagementMenu />
            <DepartmentContent />
        </div>
    )
}
export default Department;