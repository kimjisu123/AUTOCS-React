import ManagementContent from './ManagementContent'
import ManagementMenu from './ManagementMenu'
function Management(){

    return (
        <div style={{display: 'flex'}}>
            <ManagementMenu />
            <ManagementContent />
        </div>
    )
}

export default Management;