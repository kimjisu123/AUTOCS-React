import Mailmenu from './Mailmenu';
import MailContent from './MailContent';
import MailSend from './MailSend'
import { decodeJwt } from '../../util/tokenUtils';

function Mail(){
    return(
        <div style={{display:"flex"}}>
            <Mailmenu>
                <MailSend />
            </Mailmenu>
            <MailContent />
        </div>
    )
}

export default Mail;