import style from './NewApproval.module.css'
import { useState } from 'react'

function NewApproval({setNewApp}) {
    console.log(setNewApp)
    const closeNewApp = () => {
        setNewApp(false);
    }

    return (

        <>
            <div className={style.newWrapper}>
                <div className={style.top}>
                    <div className={style.topText}>
                        결재양식 선택
                    </div>
                    <div className={style.x} onClick={closeNewApp}>X</div>
                </div>
                <div className={style.middleContent}>
                    <div className={style.left}>
                        <ul>
                            <li>구매요청</li>
                            <li>여비정산</li>
                            <li>업무보고</li>
                            <li>휴가신청</li>
                            <li>비용청구</li>
                        </ul>
                    </div>
                    <div className={style.right}>

                    </div>
                </div>
                <div className={style.bot}>
                    <div className={style.write}>
                        작성하기
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewApproval;