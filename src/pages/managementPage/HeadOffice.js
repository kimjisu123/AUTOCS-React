import ManagementMenu from './ManagementMenu';
import HeadOfficeContent from './HeadOfficeContent'
function HeadOffice(){

    return (
        <div style={{display: 'flex'}}>
            <ManagementMenu />
            <HeadOfficeContent />
        </div>
    )
}

export default HeadOffice;

