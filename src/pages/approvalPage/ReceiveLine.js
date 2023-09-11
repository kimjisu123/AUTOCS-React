import styles from './approval.module.css';

function ReceiveLine({data}) {

    return (
        <>
            {data.receiveList?.length !== 0 ? data.receiveList?.map((emp, index) => (
                <span key={index} className={styles.area5}>
                        <div className={styles.area6}>{emp.position}</div>
                        <div className={styles.area7}>{emp.name}</div>
                        <div className={styles.area8}></div>
                    </span>
            )) : null }
            {/*{data.allowList.map((emp, index) => (*/}
            {/*    <span key={index} className={styles.area5}>*/}
            {/*        <div className={styles.area6}>{emp.position}</div>*/}
            {/*        <div className={styles.area7}>{emp.name}</div>*/}
            {/*        <div className={styles.area8}></div>*/}
            {/*    </span>*/}
            {/*))}*/}


            {/*{data.allowList[1].name}*/}
        </>
    )
}

export default ReceiveLine;

