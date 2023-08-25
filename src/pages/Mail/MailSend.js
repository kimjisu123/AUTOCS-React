import styles from './MailSend.module.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { callSelectEmployeeAPI } from '../../apis/MemberAPICalls'
import {useEffect, useState} from 'react'
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

    useEffect(
        () =>  {
            dispatch( callSelectEmployeeAPI(form) );
        }
        ,[]
    );

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
        dispatch( callSelectEmployeeAPI(form) );
        console.log(memberData.data)
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
            
            
            <form>
                <input className={styles.title} type="text" placeholder="제목" />
                <input style={{marginTop : "10px"}} className={styles.title} type="text" placeholder="참석자" onChange={onChangeName} />
                <div style={{width:"100px", height: "28px", border:"1px solid black"}}>
                    {memberData.data && memberData.data.map( data =>
                        data.name
                    )}
                </div>
                <ReactQuill theme="snow" className={styles.content} />
                <input type="submit" className={styles.send} value="보내기" />
            </form>
        </div>
    )
}

export default MailSend;


