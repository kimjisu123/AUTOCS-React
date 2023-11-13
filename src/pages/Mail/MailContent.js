import styles from './Mail.module.css';
import {useState, useEffect, useRef} from 'react'
import {
    callGetMailAPI,
    callDELETEMailAPI,
    callPutMailAPI,
    callSeleteDELETEMailAPI,
} from '../../apis/MailAPICalls';
import { useDispatch, useSelector } from 'react-redux';
import MailDetails from "../../pages/Mail/MailDetails"
import {useInView} from "react-intersection-observer";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import {decodeJwt} from "../../util/tokenUtils";
// import * as StompJs from "@stomp/stompjs";

function MailContent(){

    const [search, setSearch] = useState('');
    const [result, setResult] = useState('절대로아무도검색하지않을만한값입니다.');
    const dispatch = useDispatch();
    const mailData = useSelector(state => state.mailReducer);
    const [currentPage, setCurrentPage] = useState(1);



    const pageNumber = [];
    const pageInfo = mailData.pageInfo;
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }


    const onClickMailDelete = async () => {
        dispatch( callDELETEMailAPI() );
        window.location.reload();
        alert('성공적으로 삭제가 되었습니다!')
    }

    const onClickSearch = async () =>{
        console.log(result)
        dispatch( callGetMailAPI(currentPage, result) )
    }


    // // 무한 스크롤 페이지네이션
    const [ref, inView] = useInView();
    console.log(mailData.data)
    useEffect(
        () => {
            if(inView){
                setCurrentPage((prev) => prev + 1)
            }
        }
        ,[inView]
    );

    useEffect(() =>
        {
            dispatch(callGetMailAPI(currentPage,result))
        }
        , [currentPage, dispatch, result]
    )

    const onClickTest = function() {
        console.log(mailData.data);
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
                    mailData.data && mailData.data.map((mail) => (
                        <>
                            <MailItem key={mail.mailNo} mail={mail} />
                        </>
                    ))
                }
            </div>
            {/* 새로운 값을 가져오는 영역 */}
            <div  ref={ref} style={mailData.data !== null && mailData.data.length ? { width:'auto', height:'100px'} : {display:'none'}}  >

            </div>
            {/* 페이지 버튼 */}
            {/*<div style={{ listStyleType: "none", display: "flex", justifyContent: "center" }}>*/}
            {/*    { Array.isArray(mailData.data) &&*/}
            {/*        <button style={ mailData.data.length > 1 ? {border:"none", color:"black", fontWeight:"500", backgroundColor:"white", fontSize:"20px"} : {display:"none"}}*/}
            {/*            onClick={() => setCurrentPage(currentPage - 1)}*/}
            {/*            disabled={currentPage === 1}*/}
            {/*        >*/}
            {/*            &lt;*/}
            {/*        </button>*/}
            {/*    }*/}
            {/*    {pageNumber.map((num) => (*/}
            {/*        <li key={num} onClick={() => setCurrentPage(num)}>*/}
            {/*            <button*/}
            {/*                style={ currentPage === num ? {backgroundColor : 'white', border:"none", fontSize:"20px", color:"", cursor:"pointer"} : {backgroundColor : 'white', border:"none", color:"", cursor:"pointer"} }*/}
            {/*            >*/}
            {/*                {num}*/}
            {/*            </button>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*    { Array.isArray(mailData.data) &&*/}
            {/*        <button style={ mailData.data.length > 1 ? {border:"none", color:"black", fontWeight:"500", backgroundColor:"white", fontSize:"20px"} : {display:"none"}}*/}
            {/*            onClick={() => {return setCurrentPage(currentPage + 1)}}*/}
            {/*            disabled={currentPage === pageInfo.pageEnd || pageInfo.total == 0}*/}
            {/*        >*/}
            {/*            &gt;*/}
            {/*        </button>*/}
            {/*    }*/}
            {/*</div>*/}

        </div>
    )
}

function MailItem({ mail }) {

    const [bookmark, setBookmark] = useState(mail.status);
    const [read, setRead] = useState(mail.read);
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
                    <div style={read === 'Y' ? { color:"gray", marginBottom: "5px", cursor:"pointer"} : { marginBottom: "5px", cursor:"pointer"}}>
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