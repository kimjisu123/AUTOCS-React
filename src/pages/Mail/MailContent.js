import styles from './Mail.module.css';
import { useState, useEffect } from 'react'
import {
    callGetMailAPI,
    callDELETEMailAPI,
    callPutMailAPI,
    callSeleteDELETEMailAPI,
    callGetMailBookmarkAPI
} from '../../apis/MailAPICalls';
import { useDispatch, useSelector } from 'react-redux';
import MailDetails from "../../pages/Mail/MailDetails"


function MailContent(){

    const [search, setSearch] = useState('');
    const [result, setResult] = useState('절대로아무도검색하지않을만한값입니다.');
    const dispatch = useDispatch();
    const mailData = useSelector(state => state.mailReducer);

    // 페이징 처리
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callGetMailAPI(currentPage,result))
        }
        ,[currentPage]
    );

    const pageNumber = [];
    const pageInfo = mailData.pageInfo;
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }


    useEffect(
        () =>  {
            dispatch( callGetMailAPI(currentPage, result) );
        }
        ,[]
    );


    const onClickMailDelete = async () => {
        dispatch( callDELETEMailAPI() );
        window.location.reload();
        alert('성공적으로 삭제가 되었습니다!')
    }

    const onClickSearch = async () =>{
        console.log(result)
        dispatch( callGetMailAPI(currentPage, result) )
    }

    const onClickTest = ()=>{
        console.log();
    }

    return(
        <div className={styles.content}>
            <div className={styles.mainHeader}>
                <div onClick={onClickTest} className={styles.contentHeader}>
                    받은 쪽지
                </div>
                <div onClick={onClickMailDelete} className={styles.allDelete}>
                    전체 삭제
                </div>
                <div style={{display: "flex", justifyContent:"flex-start"}}>
                    <div className={styles.type}> 제목</div>
                    <input value={search} onChange={ (e) => { console.log(search);  setResult(e.target.value); return setSearch(e.target.value)} }  type="text" className={styles.inputText}/>
                    <input onClick={ () => onClickSearch() } type="button" value="검색" className={styles.inputButton}/>
                </div>
            </div>
            <div>
                {
                    mailData.data && mailData.data.map(mail => (
                    <MailItem key={mail.mailNo} mail={mail} />
                    ))
                }
            </div>
            <div style={{ listStyleType: "none", display: "flex", justifyContent: "center" }}>
                { Array.isArray(mailData.data) &&
                    <button style={ mailData.data.length > 1 ? {border:"none", color:"black", fontWeight:"500", backgroundColor:"white", fontSize:"20px"} : {display:"none"}}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>
                }
                {pageNumber.map((num) => (
                    <li key={num} onClick={() => setCurrentPage(num)}>
                        <button
                            style={ currentPage === num ? {backgroundColor : 'white', border:"none", fontSize:"20px", color:"", cursor:"pointer"} : {backgroundColor : 'white', border:"none", color:"", cursor:"pointer"} }
                        >
                            {num}
                        </button>
                    </li>
                ))}
                { Array.isArray(mailData.data) &&
                    <button style={ mailData.data.length > 1 ? {border:"none", color:"black", fontWeight:"500", backgroundColor:"white", fontSize:"20px"} : {display:"none"}}
                        onClick={() => {return setCurrentPage(currentPage + 1)}}
                        disabled={currentPage === pageInfo.pageEnd || pageInfo.total == 0}
                    >
                        &gt;
                    </button>
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
                <div style={(bookmark == 'Y') ? {color : "gold"} : {}}  className={styles.bookmark} onClick={onClickbookmark}>
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