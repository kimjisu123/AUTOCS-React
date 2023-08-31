//  비밀번호 성공시 모달창
import styles from "../Todolist/TodoTemplate.module.css";
import React from "react";

const UpdatePWok = (isPasswordChangeSuccess) => {

    return (
        <>
            <div className={styles.UpdatePwApp}>
                <div className={styles.appTitle}>비밀번호 변경</div>
                    <div className={styles.content}>
                        {isPasswordChangeSuccess ? (
                            <p>비밀번호 변경이 완료되었습니다.</p>
                        ) : (
                            <p>비밀번호 변경에 실패하였습니다. 다시 시도해주세요.</p>
                        )}
                    </div>
            </div>
        </>

    )

}
export default UpdatePWok;