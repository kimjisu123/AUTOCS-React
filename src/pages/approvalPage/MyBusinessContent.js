import style from './ApprovalHome.module.css'
import AppWait from './AppWait.module.css'
import { AiOutlineSearch } from "react-icons/ai"

function MyBusinessContent() {

    return (
        <div className={style.content}>
            <div className={style.TopTitle}>
                전자결재
            </div>
            <br/>
            <div className={style.waiting}>
                나의 업무 문서함
            </div>
            <div className={AppWait.allCheck}>
                <input type="checkBox" name={AppWait.allCheck} className={AppWait.checkAll}/> 전체선택
                <div className={AppWait.delete}> 삭제하기 </div>
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
                        {/*<th className={style.th}>발신자</th>*/}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-08-14</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 8월 첫 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-14</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 첫 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>대기중</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>승인됨</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>승인됨</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>승인됨</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    <tr>
                        <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>2023-07-28</td>
                        <td className={style.td0}>업무보고</td>
                        <td className={style.td1}>2023년 7월 셋 째주 업무보고</td>
                        <td className={style.td0}>1</td>
                        <td className={style.td0}>승인됨</td>
                        {/*<td className={style.td0}>박지호</td>*/}
                    </tr>
                    </tbody>
                </table>
            </div>
            <br/>
            <div className={AppWait.search}>
                <input type="text" className={AppWait.searchBar} name={AppWait.searchBar} placeholder='검색하실 제목을 입력해주세요.'/>
                <button className={AppWait.searchButton}>
                    <span className={AppWait.searchIcon}><AiOutlineSearch/></span>
                </button>
            </div>
            <br/>
            <div className={AppWait.paging}>
                <div className={AppWait.first}>«</div>
                <div className={AppWait.before}>‹</div>
                <div className={AppWait.one}>1</div>
                <div className={AppWait.two}>2</div>
                <div className={AppWait.three}>3</div>
                <div className={AppWait.four}>4</div>
                <div className={AppWait.five}>5</div>
                <div className={AppWait.after}>›</div>
                <div className={AppWait.last}>»</div>
            </div>
        </div>
    )
}

export default MyBusinessContent