import styles from './Department.module.css';
import {useEffect} from "react";
import {callGetPersonnelAPI} from "../../apis/DepartmentAPICalls";
import {useSelector, useDispatch} from "react-redux";

function PersonnelDepartment (){

    const dispatch = useDispatch();
    const data = useSelector(state => state.personnelReducer);

    const currentDate = new Date();
    const year = currentDate.getFullYear();    // 현재 년 (2023)
    const month = currentDate.getMonth() + 1;  // 현재 월
    const day = currentDate.getDate();         // 현재 날짜(일)
    const month2 = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 월 (09)
    const day2 = currentDate.getDate().toString().padStart(2, '0'); // 일 (04)

    const toDayDate ="<"+ year + "년 " + month + "월 " + day+"일" + ">";
    const toDay= year + "-" + month2 + "-" + day2

    useEffect( () =>{
        dispatch( callGetPersonnelAPI() )
    }, [])

    const today = new Date();
    today.setHours(0, 0, 0, 0);


    const todayFilter = data.data && data.data.filter(item => {
        // quittingTime 속성을 Date 객체로 변환합니다.
        const quittingTime = new Date(item.attendanceTime);
        quittingTime.setHours(0, 0, 0, 0); // quittingTime의 시간을 00:00:00:000으로 설정

        // 오늘과 quittingTime을 비교하여 필터링합니다.
        return today.getTime() === quittingTime.getTime();
    });


    // 출근 미체크
    const attendanceTime = todayFilter&& todayFilter.filter(item=>
        item.attendanceTime === null
    )

    // 퇴근 미체크
    const quittingTime = todayFilter && todayFilter.filter(item=>
        item.quittingTime === null
    )

    // 늦은 출근 ( 지각 )
    const beingLate = todayFilter && todayFilter.filter(item=>
        beingLateTest(item.attendanceTime)
    )

    // 휴가
    const vacationStatus = todayFilter && todayFilter.filter(item=>
        item.vacationStatus === 'Y'
    )

    function formatFunction (data) {
        const date = new Date(data);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }

    function beingLateTest(time) {
        const date = new Date(time);
        const hours = date.getHours();

        // 시간이 9시 이후인 경우 true를 반환, 그 외에는 false 반환
        return hours >= 9;
    }

    function getYearMonthDay(dateString) {
        const dateObj = new Date(dateString);

        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
        const day = dateObj.getDate();

        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        return formattedDate;
    }

    function formatTimeComponent(component) {
        return component < 10 ? '0' + component : component;
    }


    function formatTime(timeString) {
        const components = timeString.split(':');
        const hours = formatTimeComponent(parseInt(components[0], 10));
        const minutes = formatTimeComponent(parseInt(components[1], 10));
        const seconds = formatTimeComponent(parseInt(components[2], 10));

        return `${hours}:${minutes}:${seconds}`;
    }



    // 테스트용 쓰고 지우기
    const onClickTest = () =>{
        console.log(todayFilter)
    }
    return (
        <>
            <div className={styles.content}>
                <div className={styles.contentsbox}>
                    <div>
                        <div>
                            <div onClick={onClickTest} className={styles.contentHeader}>
                                인사부
                            </div>
                            <div className={styles.today}>
                                {toDayDate}
                            </div>
                        </div>

                        <div className={styles.downloadHeader} style={{display: "flex"}}>
                            <div className={styles.download}>
                                목록 다운로드
                            </div>
                            <div className={styles.print} style={{margin:"0px 40px"}}>
                                인쇄
                            </div>
                        </div>

                        <div className={styles.statusContainer}>
                            <div className={styles.statusBox}>
                                <div className={styles.statusContent}>
                                    출근 미체크
                                </div>
                                <div className={styles.statusValue}>
                                    {attendanceTime && attendanceTime.length !== 0 ?  attendanceTime.length : '0'}
                                </div>
                            </div>
                            <div className={styles.statusBox}>
                                <div className={styles.statusContent}>
                                    퇴근 미체크
                                </div>
                                <div className={styles.statusValue}>
                                    {quittingTime && quittingTime.length !== 0 ?  quittingTime.length : '0'}
                                </div>
                            </div>
                            <div className={styles.statusBox}>
                                <div className={styles.statusContent}>
                                    늦은 출근
                                </div>
                                <div className={styles.statusValue}>
                                    {beingLate && beingLate.length !== 0 ?  beingLate.length : '0'}
                                </div>
                            </div>
                            <div className={styles.statusBox}>
                                <div className={styles.statusContent}>
                                    휴가
                                </div>
                                <div className={styles.statusValue}>
                                    {vacationStatus && vacationStatus.length !== 0 ?  vacationStatus.length : '0'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.weekStatus} style={{marginTop: "30px"}}>
                        <form style={{display: "flex", justifyContent:"flex-start"}}>
                            <div className={styles.type}> 부서원</div>
                            <input type="text" className={styles.inputText} />
                            <input type="submit" value="검색" className={styles.inputButton} />
                        </form>
                    </div>
                    <div className={styles.infoHeader} style={{marginTop:"30px"}}>
                        <div className={styles.statusInfoBox1}>
                            부서원
                        </div>
                        <div className={styles.statusInfoBox2}>
                            부서명
                        </div>
                        <div className={styles.statusInfoBox3}>
                            날짜
                        </div>
                        <div className={styles.statusInfoBox4}>
                            출근
                        </div>
                        <div className={styles.statusInfoBox5}>
                            퇴근
                        </div>
                        <div className={styles.statusInfoBox6}>
                            휴가
                        </div>
                    </div>
                    <div>
                        {todayFilter && todayFilter.length > 0 && todayFilter.map(item =>(
                            <div>
                                <div className={styles.infoContent}>
                                    <div className={styles.statusInfoBox1}>
                                        { item.workStatusLists[0].employee.name}
                                    </div>
                                    <div className={styles.statusInfoBox2}>
                                        {item.workStatusLists[0].employee.department.name}
                                    </div>
                                    <div className={styles.statusInfoBox3}>
                                        { getYearMonthDay(new Date())  }
                                    </div>
                                    <div className={styles.statusInfoBox4}>
                                        { item.attendanceTime ? formatTime(formatFunction(item.attendanceTime)) : '미등록'  }
                                    </div>
                                    <div className={styles.statusInfoBox5}>
                                        { item.quittingTime ? formatTime(formatFunction(item.quittingTime)) : '미등록' }
                                    </div>
                                    <div className={styles.statusInfoBox6}>
                                        { item.vacationStatus}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PersonnelDepartment;