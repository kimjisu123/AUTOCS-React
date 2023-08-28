import styles from './MailSend.module.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { callGetEmployeeAPI } from '../../apis/MemberAPICalls'
import {useEffect, useState} from 'react'
function MailSend( {setModal} ){

    const onClickClose = () =>{
        setModal(false)
    }

    const dispatch = useDispatch();
    const memberData = useSelector(state => state.memberReducer);

    useEffect(  ()=>{
        dispatch(callGetEmployeeAPI());
    }, []);

    const [select, setSelect] = useState([]);
    const [resultName, setResultName] = useState([]);
    const [searchArea, setSearchArea] = useState(false);
    const [mail, setMail] = useState({});


    const handleSearch = (name) => {
        setSearchArea(true);
        if(!name){
            setSearchArea(false);
        }
        const filterName = memberData.data.filter( (item) => item.name.includes(name))

        setResultName(filterName);
    };

    const selectAttendees = (attendee) =>{
        setSelect(
            [...select, attendee]
        );
        setSearchArea(false);
        console.log(select);
    }

    const deleteAttendees = (attendee) => {

        const updatedSelect = select.filter(item => item !== attendee);

        setSelect(updatedSelect);
    }


    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h1 className={styles.modalTitle}>
                    쪽지 보내기
                </h1>
                <div onClick={ onClickClose }  className={styles.close}>
                    x
                </div>
            </div>
            
            
            <input className={styles.title} type="text" placeholder="제목" />
            <div style={{display:"flex"}}>
                <input
                    className={styles.title}
                    type="text"
                    placeholder="받는사람"
                    onChange={(e) => handleSearch(e.target.value)} />
            </div>
            <ul style={searchArea? {display:"block"} : {display:"none"}} className={styles.employee}>
                {resultName && resultName.slice(0,3).map((attendee) => (
                    <li className={styles.employeeName} key={attendee.employeeNo}>
                        {attendee.name}
                        <div className={styles.insert} onClick={ () => selectAttendees(attendee) }> 추가 </div>
                    </li>
                ))}
            </ul>
            <ul style={{display:"flex"}}>
                {select && select.map( (name) => (
                    <li className={styles.select}>
                        {name.name }
                        <div className={styles.delete} onClick={ () => deleteAttendees(name) }> x </div>
                    </li>
                ) )}
            </ul>
            <ReactQuill theme="snow" className={styles.content} />
            <div className={styles.send}> 보내기 </div>
        </div>
    )
}

export default MailSend;


