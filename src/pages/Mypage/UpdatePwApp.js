import MypageEmpMenubar from "./components/MypageEmpMenubar";
import UpdatePW from "./UpdatePW";
import MypageEmp from "./MypageEmp";
import styles from "../Todolist/TodoTemplate.module.css";
import updateCSS from "./UpdatePW.module.css";
import UpdatePWok from "./UpdatePWok";

const UpdatePwApp = () => {

    //  모달 값


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