import styles from './Mail.module.css';
import { useState, useEffect } from 'react'
import { callGetMailAPI, callDELETEMailAPI, callPutMailAPI, callSeleteDELETEMailAPI } from '../../apis/MailAPICalls';
import { useDispatch, useSelector } from 'react-redux';
import MailDetails from "../../pages/Mail/MailDetails"


function MailContent(){

    const [search, setSearch] = useState('');
    const [result, setResult] = useState(null);
    const dispatch = useDispatch();
    const mailData = useSelector(state => state.mailReducer);



    useEffect(
        () =>  {
            dispatch( callGetMailAPI() );
        }
        ,[]
    );
    const onClickMailDelete = async () => {
        dispatch( callDELETEMailAPI() );
        window.location.reload();
        alert('성공적으로 삭제가 되었습니다!')
    }

    const onClickSearch = async () =>{
        const filterResult =  mailData.data.filter(item => {

            return item.title.toLowerCase().includes(search.toLowerCase())
        }
        );
        console.log(filterResult)
        setResult(filterResult);
    }

    return(
        <div className={styles.content}>
            <div className={styles.mainHeader}>
                <div className={styles.contentHeader}>
                    받은 쪽지
                </div>
                <div onClick={onClickMailDelete} className={styles.allDelete}>
                    전체 삭제
                </div>
                <div style={{display: "flex", justifyContent:"flex-start"}}>
                    <div className={styles.type}> 제목</div>
                    <input value={search} onChange={ (e) => {setSearch(e.target.value)} }  type="text" className={styles.inputText}/>
                    <div onClick={ () => onClickSearch() } className={styles.inputButton}>검색</div>
                </div>
            </div>
            <div>
                {  result !== null  ? result.map(mail=>(
                    <MailItem key={mail.mailNo} mail={mail} />
                    )) :
                    mailData.data && mailData.data.map(mail => (
                    <MailItem key={mail.mailNo} mail={mail} />
                    ))
                }
            </div>
        </div>
    )
}

function MailItem({ mail }) {

    const [bookmark, setBookmark] = useState(mail.status);
    const [modal, setModal] = useState(false);

    const inputDate = mail.goDate;
    const date = new Date(inputDate);

    const outputDate = date.toISOString().substr(0, 19);
    const updatedDate = outputDate.replace("T", " ");

    const onClickModal = () => {
        setModal(!modal);
    }

    const dispatch = useDispatch();

    const onClickbookmark = async () => {
        await dispatch( callPutMailAPI(mail) );
        setBookmark( (bookmark == 'Y') ? 'N' : 'Y' );
        window.location.reload();
    };

    const onClickSelectDelete = (mail) =>{
        dispatch( callSeleteDELETEMailAPI(mail) )
        window.location.reload();
    }


    return (
        <>
            <div className={styles.receivedNote}>
                <div className={styles.bookmark} onClick={onClickbookmark}>
                    {( bookmark == 'Y')  ? '★' : '☆'}
                </div>
                <div onClick={ () => onClickModal() } className={styles.noteHeader}>
                    <div style={{ marginBottom: "5px", cursor:"pointer"}}>
                        {mail.title}
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ color: "gray" }}>
                            {updatedDate}
                        </div>
                        <div style={{ marginLeft: "15px", color: "gray" }}>
                            {mail.receiver}
                        </div>
                    </div>
                </div>
                <div onClick={ () => onClickSelectDelete(mail)} className={styles.deleteButton}>
                    x
                </div>
            </div>
            <div style={ modal ? {display:"inline"} : {display: "none"} }>
                <MailDetails setModal = { setModal  } mail={ mail } />
            </div>
        </>
    );
}
export default  MailContent;