import styles from "./ManagementMenu.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ManagementMenu(){

    const [hover, setHover] = useState(true);

    const onClickMenu = async () => {
        setHover(true);
        console.log(hover)
    };

    return (
        <div className={styles.menubar}>
            <div className={styles.app}></div>
            <div className={styles.documentForm}>
                근태 관리
            </div>
            <Link to="/workstatus"> <div className={styles.workStatus}>근태 현황</div> </Link>
            <Link to="/department"> <div onClick={() => onClickMenu()} className={styles.departmentContainer}>부서 근태 통계</div> </Link>
            <Link to="/personnel"> <div style={hover ? {display:"block"} : {display:"none"}} className={styles.department}>인사부</div> </Link>
            <Link to="/accounting"> <div style={hover ? {display:"block"} : {display:"none"}} className={styles.department}>재무/회계부</div> </Link>
            <Link to="/management"> <div style={hover ? {display:"block"} : {display:"none"}} className={styles.department}>경영부</div> </Link>
            <Link to="/marketing"> <div style={hover ? {display:"block"} : {display:"none"}} className={styles.department}>마케팅부</div> </Link>
            <Link to="/sales"> <div style={hover ? {display:"block"} : {display:"none"}} className={styles.department}>영업부</div> </Link>
            <Link to="/service"> <div style={hover ? {display:"block"} : {display:"none"}} className={styles.department}>서비스부</div> </Link>
            <Link to="/headOffice"> <div className={styles.headOffice}>전사 근태 현황</div> </Link>
        </div>
    )
}
export default ManagementMenu;