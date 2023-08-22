import style from './ApprovalHome.module.css'

function ApprovalHome() {

    return (
        <div className={style.content}>
            <div className={style.TopTitle}>
                전자결재
            </div>
            <div className={style.willApp}>
                결재할 문서가 없습니다
            </div>
            <div className={style.waiting}>
                결재 대기 문서
            </div>
            <div className={style.waitingDoc}>
                <table className={style.table1}>
                    <thead>
                    <tr>
                        <th className={style.th}>발신일</th>
                        <th className={style.th}>결재양식</th>
                        <th className={style.th}>제목</th>
                        <th className={style.th}>첨부</th>
                        <th className={style.th}>결재상태</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={style.td0}>2023-08-14</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 8월 첫 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                    </tr>
                    <tr>
                        <td className={style.td0}>2023-07-14</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 첫 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                    </tr>
                    <tr>
                        <td className={style.td0}>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={style.done}>
                결재 완료 문서
            </div>
            <div className={style.doneDoc}>
                <table className={style.table1}>
                    <thead>
                    <tr>
                        <th className={style.th}>발신일</th>
                        <th className={style.th}>결재양식</th>
                        <th className={style.th}>제목</th>
                        <th className={style.th}>첨부</th>
                        <th className={style.th}>결재상태</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={style.td0}>2023-08-14</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 8월 첫 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>결재완료</td>
                    </tr>
                    <tr>
                        <td className={style.td0}>2023-07-14</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 첫 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>결재완료</td>
                    </tr>
                    <tr>
                        <td className={style.td0}>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>결재완료</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <br/><br/><br/>
        </div>
    )
}

export default ApprovalHome;