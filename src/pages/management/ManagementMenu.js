import styles from "./Management.module.css";
import { Link } from "react-router-dom";
function ManagementMenu(){

    return (
        <div className={styles.menubar}>
            <div className={styles.app}></div>
            <div className={styles.documentForm}>
                근태 관리
            </div>
            <Link to="/management"> <div className={styles.workStatus}>근태 현황</div> </Link>
            <Link to="/department"> <div className={styles.department}>부서 근태 통계</div> </Link>
            <Link to="/headOffice"> <div className={styles.headOffice}>전사 근태 현황</div> </Link>
        </div>
    )
}
export default ManagementMenu;