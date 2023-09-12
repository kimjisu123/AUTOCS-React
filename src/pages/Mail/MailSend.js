import styles from './MailSend.module.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { callSelectEmployeeAPI } from '../../apis/MemberAPICalls'
import { callPostMailAPI } from '../../apis/MailAPICalls'
import {useEffect, useState} from 'react'
import { decodeJwt } from '../../util/tokenUtils';
function MailSend( {setModal} ){

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;

    const onClickClose = () =>{
        setModal(false)
    }

    const dispatch = useDispatch();
    const memberData = useSelector(state => state.memberReducer);


    useEffect(  ()=>{
        dispatch(callSelectEmployeeAPI());
    }, []);

    const [select, setSelect] = useState([]);
    const [selectDpname, setSelectDpname] = useState([]);
    const [titleValue, setTitileValue] = useState('');
    const [contextValue, setContextValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [resultName, setResultName] = useState([]);
    const [searchArea, setSearchArea] = useState(false);
    const [mail, setMail] = useState({
        mailNo : "",
        receiver : [],
        title : "",
        context : "",
        goDate : "",
        status : "",
        position:"",
    });





    const handleSearch = (name) => {
        setSearchValue(name);
        setSearchArea(true);
        if(!name){
            setSearchArea(false);
        }


        const filterName = memberData.data.filter( (item) => item.name.includes(name))

        setResultName(filterName);
    };

    const selectAttendees =  async  (attendee) =>{
        setSelect(
            [...select, attendee]
        );
        setMail(prevMail => ({
            ...prevMail,
            receiver: [...prevMail.receiver ,attendee.name],
            position: JSON.parse(attendee.position).name
        }));
        setSearchArea(false);
        setSearchValue('');
        console.log(mail);
    }

    const deleteAttendees = (attendee) => {

        const updatedSelect = select.filter(item => item !== attendee);

        setSelect(updatedSelect);
    }

    const writeTitle = (title) => {
        setMail({
            ...mail,
            title:title
        });
        setTitileValue(title);
        console.log(mail);
    }

    const writeContext = (context) => {
        setMail({
            ...mail,
            context: context
        });
        setContextValue(context);
        console.log(mail);
    }

    const sendMail = async () =>{
        await dispatch(callPostMailAPI(mail));
        alert('성공적으로 쪽지를 보냈습니다!')
        setModal(false)
        setTitileValue('');
        setContextValue('');
        setSelect([]);
        setMail({});
        window.location.reload();
    }


    const onClickTest= () =>{
        console.log(select[0].position)
    }

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h1 onClick = {onClickTest} className={styles.modalTitle}>
                    쪽지 보내기
                </h1>
                <div onClick={ onClickClose }  className={styles.close}>
                    x
                </div>
            </div>
            
            
            <input value={titleValue} onChange = { (e) => writeTitle(e.target.value) } className={styles.title} type="text" placeholder="제목" />
            <div style={{display:"flex"}}>
                <input
                    className={styles.title}
                    type="text"
                    placeholder="받는사람"
                    value={searchValue}
                    onChange={(e) => handleSearch(e.target.value)} />
            </div>
            <ul style={searchArea? {display:"block"} : {display:"none"}} className={styles.employee}>
                {resultName && resultName.slice(0,3).map((attendee) => (
                    <li className={styles.employeeName} key={attendee.employeeNo}>
                        {attendee.name}
                        {JSON.parse(attendee.position).name}
                        <div className={styles.insert} onClick={ () => selectAttendees(attendee) }> 추가 </div>
                    </li>
                ))}
            </ul>
            <ul style={{display:"flex", marginLeft:"40px"}}>
                {select && select.map( (name) => (
                    <li className={styles.select}>
                        {name.name }
                        <div className={styles.delete} onClick={ () => deleteAttendees(name) }> x </div>
                    </li>
                ) )}
            </ul>
            <ReactQuill value={contextValue} onChange={writeContext} theme="snow" className={styles.content} />
            <div onClick={sendMail} className={styles.send}> 보내기 </div>
        </div>
    )
}

export default MailSend;


