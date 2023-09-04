import styles from './Department.module.css';
import {useEffect} from "react";
import {callGetPersonnelAPI} from "../../apis/DepartmentAPICalls";
import {useSelector, useDispatch} from "react-redux";
import {departmentReducer, personnelReducer} from "../../modules/DepartmentModule";

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

    // 출근 미체크
    const attendanceTime = data.data && data.data.filter(item=>
        item.attendanceTime === null
    )

    // 퇴근 미체크
    const quittingTime = data.data && data.data.filter(item=>
        item.quittingTime === null
    )

    // 늦은 출근 ( 지각 )
    const beingLate = data.data && data.data.filter(item=>
        beingLateTest(item.attendanceTime)
    )

    // 휴가
    const vacationStatus = data.data && data.data.filter(item=>
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

    // 테스트용 쓰고 지우기
    const onClickTest = () =>{
        console.log()
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
                        {data.data && data.data.length > 0 && data.data.map(item =>(
                            <div>
                                <div className={styles.infoContent}>
                                    <div className={styles.statusInfoBox1}>
                                        { item.workStatusLists[0].employee.name}
                                    </div>
                                    <div className={styles.statusInfoBox2}>
                                        {item.workStatusLists[0].employee.department.name}
                                    </div>
                                    <div className={styles.statusInfoBox3}>
                                        { toDay }
                                    </div>
                                    <div className={styles.statusInfoBox4}>
                                        { item.attendanceTime ? formatFunction(item.attendanceTime) : '미등록'  }
                                    </div>
                                    <div className={styles.statusInfoBox5}>
                                        { item.quittingTime ? formatFunction(item.quittingTime) : '미등록' }
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