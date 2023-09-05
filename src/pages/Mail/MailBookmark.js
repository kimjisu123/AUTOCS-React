import Mailmenu from './Mailmenu'
import MailBookmarkContent from './MailBookmarkContent';
function MailBookmark(){
    
    return (
        <div style={{display: "flex"}}>
            <Mailmenu />
            <MailBookmarkContent />
        </div>
    )
}

export default MailBookmark;