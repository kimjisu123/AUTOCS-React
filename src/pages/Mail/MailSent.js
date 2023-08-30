import Mailmenu from './Mailmenu'
import MailSentContent from './MailSentContent';
import { decodeJwt } from '../../util/tokenUtils';
function MailSent(){

    return (
        <div style={{display: "flex"}}>
            <Mailmenu />
            <MailSentContent />
        </div>
    )
}

export default MailSent;