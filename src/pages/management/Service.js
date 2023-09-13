import ServiceDepartment from "./ServiceDepartment";
import ManagementMenu from './ManagementMenu'

function Service(){
    return (
        <div style={{display: 'flex'}}>
            <ManagementMenu />
            <ServiceDepartment />
        </div>
    )
}
export default Service;