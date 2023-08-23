import MypageEmpMenubar from "./MypageEmpMenubar";
import UpdatePW from "./UpdatePW";
import MypageEmp from "./MypageEmp";
import styles from "../Todolist/TodoTemplate.module.css";
import updateCSS from "./UpdatePW.module.css";

const UpdatePwApp = () => {

    return (
        <>
            <div className={styles.UpdatePwApp}>
                <div className={styles.appTitle}>비밀번호 변경</div>
                <div className={styles.content}>
                    <UpdatePW/>
                </div>

            </div>
        </>
    )
}
export default UpdatePwApp;