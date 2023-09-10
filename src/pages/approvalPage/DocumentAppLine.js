import styles from './approval.module.css';

function DocumentAppLine({data}) {

    return (
        <>
            {data && (data.appEmp?.length !== 0 ? data.appEmp?.map((emp, index) => (
                <span key={index} className={styles.area5}>
                        <div className={styles.area6}>{emp.employee?.position.name}</div>
                        <div className={styles.area7} style={{fontWeight: 600}}>{emp.employee?.name}</div>
                        <div className={styles.area8}><div style={{zIndex:-1, position: 'relative',
                        top: '-68px', color: 'red', fontSize:'2.5em', fontWeight: 700}}>{emp.status === '승인됨'? '승 인' :
                        emp.status === '반려됨'? '반 려' : null}</div></div>
                    </span>
            )) : null )}
        </>
    )
}

export default DocumentAppLine;

