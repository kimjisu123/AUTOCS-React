import WorkStatusContent from "./WorkStatusContent"
import ManagementMenu from './ManagementMenu'

function WorkStatus(){
    return (
        <div style={{display: 'flex'}}>
            <ManagementMenu />
            <WorkStatusContent />
        </div>
    )
}
export default WorkStatus;