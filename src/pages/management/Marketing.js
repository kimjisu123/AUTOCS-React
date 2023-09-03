import MarketingDepartment from "./MarketingDepartment";
import ManagementMenu from './ManagementMenu'

function Marketing(){
    return (
        <div style={{display: 'flex'}}>
            <ManagementMenu />
            <MarketingDepartment />
        </div>
    )
}
export default Marketing;