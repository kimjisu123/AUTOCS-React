import styles from './MailSend.module.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { callSelectEmployeeAPI } from '../../apis/MemberAPICalls'
import {useEffect, useState} from 'react'
import { decodeJwt } from '../../util/tokenUtils';
function MailSend( {setModal} ){

    const dispatch = useDispatch();
    const memberData = useSelector(state => state.memberReducer);

    const [form, setForm] = useState({
        employeeNo : '',
        name : '',
        employeeJoin : '',
        employeeEmail : '',
        employeePhone : '',
        employeeManager : '',
        departmentCode : '',
        positionCode : '',
        memberNo : ''
    })
    

    const onClickClose = () =>{
        setModal(false)
    }

    const onChangeName = (e) => {
        setForm({
            employeeNo : '',
            name : e.target.value,
            employeeJoin : '',
            employeeEmail : '',
            employeePhone : '',
            employeeManager : '',
            departmentCode : '',
            positionCode : '',
            memberNo : ''
        });
    }

    useEffect(() => {
        console.log(form);
    }, [form]);

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
                <input style={{marginTop : "10px"}} className={styles.title} type="text" placeholder="받는사람" onChange={onChangeName} />
                <div className={styles.searchName}> 검색 </div>
            </div>
            <ReactQuill theme="snow" className={styles.content} />
            <div onClick={ onChangeName } className={styles.send}> 보내기 </div>

        </div>
    )
}

export default MailSend;


