import styles from './MailSend.module.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react'
function MailSend( {setModal} ){


    const onClickClose = () =>{
        setModal(false)
    }

    const onChangeName = () => {
        // db에서 가져온 값
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
                <input style={{marginTop : "10px"}} className={styles.title} type="text" placeholder="참석자" onChange={ onChangeName } />
                <ReactQuill theme="snow" className={styles.content} />
                <input type="submit" className={styles.send} value="보내기" />
            </form>
        </div>
    )
}

export default MailSend;


