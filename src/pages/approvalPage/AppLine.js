import styles from './approval.module.css';

function AppLine({data}) {

    return (
        <>
            {data.allowList.length !== 0 ? data.allowList.map((emp, index) => (
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

export default AppLine;

