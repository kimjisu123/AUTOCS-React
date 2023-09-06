import styles from './HeadOffice.module.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { callGetHeadOfficeAPI} from "../../apis/DepartmentAPICalls";
import {headOfficeReducer} from "../../modules/DepartmentModule";



function HeadOfficeContent(){

    const currentDate = new Date();
    const mondayDate = new Date()
    const year = currentDate.getFullYear();    // 현재 년 (2023)
    const month = currentDate.getMonth() + 1;  // 현재 월
    const currentWeek = currentDate.getDay();  // 현재 요일
    const day = currentDate.getDate();         // 현재 날짜(일)

    const dispatch = useDispatch();
    const data = useSelector(state => state.headOfficeReducer);

    useEffect(() => {
        dispatch( callGetHeadOfficeAPI() )
    },[])

    const days = ["일", "월", "화", "수", "목", "금", "토"];

    // 현재 날짜에서 월요일까지의 날짜 차이 계산
    const daysUntilMonday = (currentWeek === 0 ? 7 : currentWeek) - 1;

    mondayDate.setDate(mondayDate.getDate() - daysUntilMonday);

    mondayDate.setHours(0, 0, 0, 0);

    const monday =mondayDate.getDate();
    const sunday =mondayDate.getDate()+6;

    const toDayDate ="<"+ year + "년 " + month + "월 " + monday+"일" + ' ~ ' + year + "년 " + month + "월 " + sunday+"일" +">";

    // 중복된 값 제거
    const uniqueData = data.data && data.data.length >0 &&data.data.filter((obj, index, self) => {
        return index === self.findIndex((t) => t.employeeNo === obj.employeeNo);
    });

    // // 이번주에 해당하는 값 필터
    // const filteredData = uniqueData && uniqueData.length >0  && uniqueData.filter(item =>{
    //
    //     // 출근 시간
    //     const attendacnceTime = item.workStatusLists.map(item2=> item2.attendanceTime)
    //
    //
    //     const resultTime = attendacnceTime && attendacnceTime.filter(item=>{
    //         return mondayDate < new Date(item) && new Date(item) < new Date()
    //     })
    //
    //     return resultTime;
    // })


    // 테스트용 쓰고 나서 지우기
    const onClickTest =() =>{
        console.log()
    }
    return(
        <div className={styles.content}>
            <div className={styles.contentsbox}>
                <div>
                    <div>
                        <div onClick={onClickTest} className={styles.contentHeader}>
                            본사 근태 현황
                        </div>
                        <div className={styles.today}>
                            {toDayDate}
                        </div>
                    </div>
                    <div>
                        <div className={styles.weekStatus} style={{marginTop: "30px"}}>
                            <form style={{display:"flex", justifyContent:"flex-start"}}>
                                <div className={styles.type}> 부서원</div>
                                <input type="text" className={styles.inputText} />
                                <input type="submit" value="검색" className={styles.inputButton} />
                            </form>
                        </div>
                        <div className={styles.infoHeader}>
                            <div className={styles.statusInfoBox1}>
                                이름
                            </div>
                            <div className={styles.statusInfoBox2}>
                                누적 근무 시간
                            </div>
                            <div className={styles.statusInfoBox3} >
                                {  mondayDate.getDate() + '(' + days[mondayDate.getDay()] + ')' }
                            </div>
                            <div className={styles.statusInfoBox4}>
                                {  mondayDate.getDate()+1 + '(' + days[mondayDate.getDay()+1] + ')' }
                            </div>
                            <div className={styles.statusInfoBox5}>
                                {  mondayDate.getDate()+2 + '(' + days[mondayDate.getDay()+2] + ')' }
                            </div>
                            <div className={styles.statusInfoBox6}>
                                {  mondayDate.getDate()+3 + '(' + days[mondayDate.getDay()+3] + ')' }
                            </div>
                            <div className={styles.statusInfoBox7}>
                                {  mondayDate.getDate()+4 + '(' + days[mondayDate.getDay()+4] + ')' }
                            </div>
                            <div className={styles.statusInfoBox8}>
                                {  mondayDate.getDate()+5 + '(' + days[mondayDate.getDay()+5] + ')' }
                            </div>
                            <div className={styles.statusInfoBox9}>
                                {  mondayDate.getDate()+6 + '(' + days[mondayDate.getDay()-1] + ')' }
                            </div>
                        </div>
                        <div>
                            {/*{filterdData && filterdData.length > 0 && filterdData.map(item => (*/}
                            {/*    <div className={styles.infoContent}>*/}

                            {/*        <div className={styles.statusInfoBox1}>*/}
                            {/*            <div>*/}
                            {/*                {item.workStatusLists[0].employee.name}*/}
                            {/*            </div>*/}
                            {/*            <div>*/}
                            {/*                {item.workStatusLists[0].employee.department.name + "("+ item.workStatusLists[0].employee.position.name + ")"}*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className={styles.statusInfoBox2}>*/}
                            {/*            <div className={styles.cumulativeTime}>*/}
                            {/*                10h 23m 21s*/}
                            {/*            </div>*/}
                            {/*            <div className={styles.hoursDuty}>*/}
                            {/*                <div>*/}
                            {/*                    기본 : 2h 00m 00s*/}
                            {/*                </div>*/}
                            {/*                <div>*/}
                            {/*                    연장 : 0h 00m 00s*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*))}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadOfficeContent;