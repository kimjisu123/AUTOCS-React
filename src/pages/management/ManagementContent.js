import styles from "./Management.module.css";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {callGetWorkStatusAPI}  from "../../apis/WorkStatusAPICalls";
import moment from 'moment';
import 'moment/locale/ko';

function ManagementContent (){
    const [message, setMessage] = useState({});


    const dispatch = useDispatch();
    const workData = useSelector(state => state.workStatusReducer);
    const [extension, setExtension] = useState('');

    useEffect(() => {
        dispatch( callGetWorkStatusAPI() )
    },[])

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더하여 실제 월 표시
    const day = currentDate.getDate();

    const toDayDate ="<"+ year + "년 " + month + "월 " + day+"일" + ">";


    const todayDate = new Date();
    const startDate = new Date(currentDate);
    startDate.setDate(todayDate.getDate() - todayDate.getDay() + 1);

    const filteredData = workData.data && workData.data.filter(item => {
        const itemDate = new Date(item.quittingTime);
        return itemDate >= startDate && itemDate <= currentDate;
    });

    let result = 0;
    let result2 = 0;

    filteredData && filteredData.forEach(inputString => {
        const timeString = inputString.extensionTime.slice(11, 19); // "hh:mm:ss" 형식의 문자열
        const timeArray = timeString.split(':'); // 문자열을 ":"를 기준으로 분할

        // 시, 분, 초를 정수로 변환하여 더하기
        const hours = parseInt(timeArray[0], 10);
        const minutes = parseInt(timeArray[1], 10);
        const seconds = parseInt(timeArray[2], 10);

        // 시간 더하기
        result += hours;
        // 분 더하기
        result += minutes / 60;
        // 초 더하기
        result += seconds / 3600;

        // attendanceTime에서 quittingTime을 뺀 값 계산
        const attendanceTimeString = inputString.attendanceTime.slice(11, 19); // "hh:mm:ss" 형식의 문자열
        const quittingTimeString = inputString.quittingTime.slice(11, 19); // "hh:mm:ss" 형식의 문자열

        const attendanceTimeArray = attendanceTimeString.split(':');
        const quittingTimeArray = quittingTimeString.split(':');

        const attendanceHours = parseInt(attendanceTimeArray[0], 10);
        const attendanceMinutes = parseInt(attendanceTimeArray[1], 10);
        const attendanceSeconds = parseInt(attendanceTimeArray[2], 10);

        const quittingHours = parseInt(quittingTimeArray[0], 10);
        const quittingMinutes = parseInt(quittingTimeArray[1], 10);
        const quittingSeconds = parseInt(quittingTimeArray[2], 10);

        // attendanceTime에서 quittingTime을 뺀 값 계산
        const hoursDifference =  quittingHours - attendanceHours;
        const minutesDifference =  quittingMinutes - attendanceMinutes;
        const secondsDifference =  quittingSeconds - attendanceSeconds;

        // result2에 더하기
        result2 += hoursDifference;
        result2 += minutesDifference / 60;
        result2 += secondsDifference / 3600;
    });

// 결과를 시분초 형식으로 변환
    const totalHours = Math.floor(result);
    const remainingMinutes = Math.floor((result - totalHours) * 60);
    const remainingSeconds = Math.round(((result - totalHours) * 60 - remainingMinutes) * 60);

    console.log(`총 시간: ${totalHours}시 ${remainingMinutes}분 ${remainingSeconds}초`);

    const totalHours2 = Math.floor(result2);
    const remainingMinutes2 = Math.floor((result2 - totalHours2) * 60);
    const remainingSeconds2 = Math.round(((result2 - totalHours2) * 60 - remainingMinutes2) * 60);

    console.log(`차이 시간: ${totalHours2}시 ${remainingMinutes2}분 ${remainingSeconds2}초`);

    return (
        <>
            <div className={styles.content}>
                <div>
                    <div>
                        <div className={styles.contentHeader}>
                            근태 현황
                        </div>
                        <div className={styles.today}>
                            {toDayDate}
                        </div>
                    </div>
                    <div>

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
                                이번주 누적 근로 시간
                            </div>
                            <div className={styles.statusTime}>
                                {totalHours2}시 {remainingMinutes2}분 {remainingSeconds2}초
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                이번주 연장 근로 시간
                            </div>
                            <div className={styles.statusTime}>
                                {totalHours}시 {remainingMinutes}분 {remainingSeconds}초
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                이번주 잔여 시간
                            </div>
                            <div className={styles.statusTime}>
                                시간
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                이번달 누적 근로 시간
                            </div>
                            <div className={styles.statusTime}>
                                시간
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                이번달 연장 근로 시간
                            </div>
                            <div className={styles.statusTime}>
                                시간~
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.infoHeader}>
                            <div className={styles.statusInfoBox1}>
                                일자
                            </div>
                            <div className={styles.statusInfoBox2}>
                                업무 시작
                            </div>
                            <div className={styles.statusInfoBox3}>
                                업무 종료
                            </div>
                            <div className={styles.statusInfoBox4}>
                                총 근무 시간
                            </div>
                            <div className={styles.statusInfoBox5}>
                                근무 시간 상세
                            </div>
                        </div>
                        <div className={styles.infoContent}>
                            <div className={styles.statusInfoBox1}>
                                31(월)
                            </div>
                            <div className={styles.statusInfoBox2}>
                                09:32:42
                            </div>
                            <div className={styles.statusInfoBox3}>
                                17:54:58
                            </div>
                            <div className={styles.statusInfoBox4}>
                                30 1h 11m 16s
                            </div>
                            <div className={styles.statusInfoBox5}>
                                기본 30h 11m 16s / 연장 0h 0m 0s
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ManagementContent;