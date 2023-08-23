import emp from "../Mypage/emp.jpg";
import mainstyle from './MainContent.module.css';
import {Calendar} from "@fullcalendar/core";
import {MdAccessTime, MdCoPresent, MdHome, MdOutlineWorkOff, MdOutlineWorkOutline} from "react-icons/md";
import classNames from "classnames";
import TodoApp from "../Todolist/TodoApp";
import MiniCalender from "../compoments/MiniCalender";
import monent from 'moment';

// 비구조화 할당 문법을 활용한 css내부 값 추출하기 이렇게 쓰면 MypageCSS.mainContatiner를 안써도된다. )


const MainContent = () => {

    const combineClass = classNames('tempBox' , 'three')
    const today = String(new Date().toLocaleDateString());
    const formatDate = monent(today).format("MMMM Do YYYY");

    return (
        <>
            <div className={mainstyle.container}>
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
                            {/*<MdAccessTime />*/}
                            <h3>Today</h3>
                            <h1>{ formatDate }</h1>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox} style={{ display:"flex"}}>
                        <div className={mainstyle.calnederContent}>
                            <MiniCalender/>
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
            </div>

        </>
    )
}
export default MainContent;