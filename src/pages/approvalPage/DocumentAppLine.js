import styles from './approval.module.css';

function DocumentAppLine({data}) {

    return (
        <>
            {data && (data.appEmp?.length !== 0 ? data.appEmp?.map((emp, index) => (
                <span key={index} className={styles.area5}>
                        <div className={styles.area6}>{emp.employee?.position.name}</div>
                        <div className={styles.area7}>{emp.employee?.name}</div>
                        <div className={styles.area8}></div>
                    </span>
            )) : null )}
        </>
    )
}

export default DocumentAppLine;

