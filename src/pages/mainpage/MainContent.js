import emp from "../Mypage/emp.jpg";
import mainstyle from './MainContent.module.css';
import classNames from "classnames";
import TodoApp from "../Todolist/TodoApp";
import MiniCalender from "../compoments/MiniCalender";
import monent from 'moment';

import Table from "./Table";
import YourComponent from "../Mypage/YourComponent";
import React from "react";
import DailyList from "./DailyList";




// 비구조화 할당 문법을 활용한 css내부 값 추출하기 이렇게 쓰면 MypageCSS.mainContatiner를 안써도된다. )


const MainContent = () => {

    const combineClass = classNames('tempBox' , 'three')
    const today = String(new Date().toLocaleDateString());
    const formatDate = monent(today).format("MMMM Do YYYY");
    // const [ThemeMode , toggleTheme] = useTheme();

    return (
        <>
            <div className={mainstyle.container}>
                <div className={mainstyle.homeContainer}>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.titleContainer}>
                            <div className={mainstyle.maintitle}>
                                <div className={mainstyle.mainImg}>
                                    <img src={ emp } alt="" className={mainstyle.empInfoImg}/>
                                </div>
                                <div className={mainstyle.maintext}>
                                    <h1>안녕하세요 김사원님</h1>
                                    <h3>오늘 하루도 힘내세요</h3>
                                </div>
                                <div className={mainstyle.workbuttons}>
                                        <button>출근하기</button>
                                        <button>퇴근하기</button>
                                </div>
                            </div>
                            <div>
                                <div className={"searchingbar"}>
                                    <form id="search-form" className="form-search">
                                        <input type="text" placeholder="강의 검색" className="form-control"/>
                                        <span><i className="material-icons ic-search">search</i></span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.timeAndDark}>
                            <div className={mainstyle.mainTime}>
                                {/*<MdAccessTime />*/}
                                <h3>Today</h3>
                                <h1>{ formatDate }</h1>
                            </div>
                            <div className={mainstyle.darkmode}>
                                {/*<MdAccessTime />*/}
                                <h3>다크모드</h3>
                                <button>다크모드버튼</button>
                            </div>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox} style={{ display:"flex"}}>
                        <div className={mainstyle.calnederContent}>
                            <MiniCalender/>
                        </div>
                        <div className={mainstyle.datelist}>
                            <div className={mainstyle.daliyTitle}>
                                <h1>일정리스트</h1>
                                <div className={mainstyle.mainTodo}><DailyList /></div>
                            </div>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.flexbox}>
                            {/*<h1>todo리스트</h1>*/}
                            <div className={mainstyle.mainTodo}><TodoApp /></div>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.documentPart}>
                            <h1>전자문서 결제</h1>
                            <div><Table /></div>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.boradPart}>
                            <h1>게시판</h1>
                            <div><YourComponent /></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MainContent;