import Mailmenu from './Mailmenu'
import MailBookmarkContent from './MailBookmarkContent';
import { decodeJwt } from '../../util/tokenUtils';
function MailBookmark(){
    
    return (
        <div style={{display: "flex"}}>
            <Mailmenu />
            <MailBookmarkContent />
        </div>
    )
}

export default MailBookmark;