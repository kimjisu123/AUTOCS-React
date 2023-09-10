import styles from './approval.module.css';

function DocumentReceiveLine({data}) {

    return (
        <>
            {data && (data.recEmp?.length !== 0 ? data.recEmp?.map((emp, index) => (
                <span key={index} className={styles.area5}>
                        <div className={styles.area6}>{emp.employee?.position.name}</div>
                        <div className={styles.area7}>{emp.employee?.name}</div>
                        <div className={styles.area8}><div style={{zIndex:-1, position: 'relative',
                            top: '-68px', color: 'red', fontSize:'2.5em', fontWeight: 700}}>{emp.status === '확인'? '확 인': null}</div></div>
                    </span>
            )) : null)}
        </>
    )
}

export default DocumentReceiveLine;

