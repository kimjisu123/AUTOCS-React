import styles from './approval.module.css'

function VacationContent() {

    return (
        <div className={styles.content}>
            <div className={styles.modify}>
                결재선 추가
            </div>
            <div className={styles.area1}>휴 가 신 청</div>
            <br/><br/>
            <div className={styles.area2}>
                <div className={styles.area3}>
                    <table className={styles.table3}>
                        <tbody>
                        <tr>
                            <td className={styles.td2}>작 성 자</td>
                            <td className={styles.td1}>박지호</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>소 속 부 서</td>
                            <td className={styles.td1}>영업 1부</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>작 성 날 짜</td>
                            <td className={styles.td1}>2023-08-15</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>문 서 번 호</td>
                            <td className={styles.td1}></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{display: "flex"}}>
                    <div className={styles.approve}>
                        <span className={styles.area4}>요청</span>
                        <span className={styles.area5} style={{marginRight: 20}}>
                            <div className={styles.area6}>사원</div>
                            <div className={styles.area7}>박지호</div>
                            <div className={styles.area8}></div>
                        </span>
                        <span className={styles.area4}>승인</span>
                        <span className={styles.area5}>
                            <div className={styles.area6}>팀장</div>
                            <div className={styles.area7}>유승제</div>
                            <div className={styles.area8}></div>
                        </span>
                        <span className={styles.area5}>
                            <div className={styles.area6}>이사</div>
                            <div className={styles.area7}>김마야</div>
                            <div className={styles.area8}></div>
                        </span>
                    </div>
                </div>
            </div>
            <br/><br/>
            {/*<div className={styles.docTitle}>*/}
            {/*    <div className={styles.area9}>제목</div>*/}
            {/*    <input type="text" name="docTitle" id={styles.docTitle}/>*/}
            {/*</div>*/}
            {/*<br/><br/>*/}
            {/*<div className={styles.addDelBtn}>*/}
            {/*    <div className={styles.add} onClick={ onClickAddHandler }>추가</div>*/}
            {/*    <div className={styles.delete} onClick={ onClickDelHandler }>삭제</div>*/}
            {/*</div>*/}
            {/*<div className={styles.area10}>*/}
            {/*    <table className={styles.table2}>*/}
            {/*        <tbody>*/}
            {/*        <tr className={styles.tr}>*/}
            {/*            <td className={styles.productName}>품명</td>*/}
            {/*            <td className={styles.productSize}>규격</td>*/}
            {/*            <td className={styles.amount}>수량</td>*/}
            {/*            <td className={styles.price}>단가</td>*/}
            {/*            <td className={styles.totalPrice}>금액</td>*/}
            {/*            <td className={styles.note}>비고</td>*/}
            {/*        </tr>*/}
            {/*        <tr className={styles.inputRow}>*/}
            {/*            <td className={styles.td3}><input type="text" name="productName"/></td>*/}
            {/*            <td className={styles.td3}><input type="text" name="productSize"/></td>*/}
            {/*            <td className={styles.td3}><input type="text" name="amount"/></td>*/}
            {/*            <td className={styles.td3}><input type="text" name="price"/></td>*/}
            {/*            <td className={styles.td3}></td>*/}
            {/*            <td className={styles.td3}><input type="text" name="note"/></td>*/}
            {/*        </tr>*/}
            {/*        </tbody>*/}
            {/*    </table>*/}
            {/*    <div className={styles.area11}>*/}
            {/*        <div className={styles.area12}>합계</div>*/}
            {/*        <div className={styles.allPrice}>1,000,000</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<br/><br/><br/>*/}
            {/*<div className={styles.file}>*/}
            {/*    <label htmlFor="fileBtn">파일 업로드</label>*/}
            {/*    <input type="file" className={styles.fileBtn} name="fileBtn" id="fileBtn"/>*/}
            {/*    <div className={styles.fileshow}></div>*/}
            {/*</div>*/}
            <br/><br/><br/>
        </div>
    )
}

export default VacationContent;