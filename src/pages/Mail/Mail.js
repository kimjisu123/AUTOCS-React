import Mailmenu from './Mailmenu';
import MailContent from './MailContent';

function Mail(){
    return(
        <div style={{display:"flex"}}>
            <Mailmenu />
            <MailContent />
        </div>
    )
}

export default Mail;