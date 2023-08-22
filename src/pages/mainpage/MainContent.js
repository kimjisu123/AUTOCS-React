import emp from "../Mypage/emp.jpg";
import mainstyle from './MainContent.module.css';
import {Calendar} from "@fullcalendar/core";
import {MdAccessTime, MdCoPresent, MdHome, MdOutlineWorkOff, MdOutlineWorkOutline} from "react-icons/md";
import classNames from "classnames";
import TodoApp from "../Todolist/TodoApp";

// 비구조화 할당 문법을 활용한 css내부 값 추출하기 이렇게 쓰면 MypageCSS.mainContatiner를 안써도된다. )


const MainContent = () => {

    const combineClass = classNames('tempBox' , 'three')

    return (
        <>
            <div className={mainstyle.homeContainer}>
                <div className={mainstyle.tempBox}>
                    <div className={mainstyle.maintitle}>
                        <img src={ emp } alt="" className={mainstyle.empInfoImg}/>
                        <div className={mainstyle.maintext}>
                            <h1>안녕하세요 김사원님</h1>
                            <h3>오늘 하루도 힘내세요</h3>
                        </div>
                        <div className={mainstyle.workbuttons}>
                                <button>출근하기</button>
                                <button>퇴근하기</button>
                        </div>
                    </div>
                </div>
                <div className={mainstyle.tempBox}>
                    <div className={mainstyle.mainTime}>
                        <MdAccessTime />
                        <h3>Today</h3>
                        <h1>2023년 3월 31일</h1>
                    </div>
                </div>
                <div className={mainstyle.tempBox} style={{ display:"flex"}}>
                    <div className={mainstyle.calnederContent}>
                        <div className={mainstyle.calendarWrap}>
                            <h2 className={mainstyle.monthYear}>January 2020</h2>
                            <table className={mainstyle.calendar}>
                                <thead>
                                <tr>
                                    <th className={mainstyle.dayTitle} scope="col">Sun</th>
                                    <th className={mainstyle.dayTitle} scope="col">Mon</th>
                                    <th className={mainstyle.dayTitle} scope="col">Tue</th>
                                    <th className={mainstyle.dayTitle} scope="col">Wed</th>
                                    <th className={mainstyle.dayTitle} scope="col">Thu</th>
                                    <th className={mainstyle.dayTitle} scope="col">Fri</th>
                                    <th className={mainstyle.dayTitle} scope="col">Sat</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="week">
                                    <td className="day prev-mon" tabIndex="0"><span class="day-number">29</span></td>
                                    <td className="day prev-mon" tabIndex="0"><span class="day-number">30</span></td>
                                    <td className="day prev-mon" tabIndex="0"><span class="day-number">31</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">1</span></td>
                                    <td className="day today" tabIndex="0"><span class="day-number">2</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">3</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">4</span></td>
                                </tr>
                                <tr class="week">
                                    <td className="day" tabIndex="0"><span class="day-number">5</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">6</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">7</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">8</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">9</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">10</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">11</span></td>
                                </tr>
                                <tr class="week">
                                    <td className="day" tabIndex="0"><span class="day-number">12</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">13</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">14</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">15</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">16</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">17</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">18</span></td>
                                </tr>
                                <tr class="week">
                                    <td className="day" tabIndex="0"><span class="day-number">19</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">20</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">21</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">22</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">23</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">24</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">25</span></td>
                                </tr>
                                <tr class="week">
                                    <td className="day" tabIndex="0"><span class="day-number">26</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">27</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">28</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">29</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">30</span></td>
                                    <td className="day" tabIndex="0"><span class="day-number">31</span></td>
                                    <td className="day next-mon" tabIndex="0"><span class="day-number">1</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={mainstyle.datelist}>
                        <h1>일정리스트</h1>
                    </div>
                </div>
                <div className={mainstyle.tempBox}>
                    <div className={mainstyle.flexbox}>
                        <div className={mainstyle.mainTodo}><TodoApp /></div>
                    </div>
                </div>
                <div className={mainstyle.tempBox}>5</div>
                <div className={mainstyle.tempBox}>6</div>
            </div>


        </>
    )
}
export default MainContent;