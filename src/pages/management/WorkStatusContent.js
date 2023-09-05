import styles from "./Management.module.css";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {callGetWorkStatusAPI}  from "../../apis/WorkStatusAPICalls";
import moment from 'moment';
import 'moment/locale/ko';

function WorkStatusContent (){
    const [message, setMessage] = useState({});


    const dispatch = useDispatch();
    const workData = useSelector(state => state.workStatusReducer);
    const [extension, setExtension] = useState('');

    useEffect(() => {
        dispatch( callGetWorkStatusAPI() )
    },[])

    const currentDate = new Date();
    const mondayDate = new Date()
    const year = currentDate.getFullYear();    // 현재 년 (2023)
    const month = currentDate.getMonth() + 1;  // 현재 월
    const currentWeek = currentDate.getDay();  // 현재 요일
    const day = currentDate.getDate();         // 현재 날짜(일)

    const toDayDate ="<"+ year + "년 " + month + "월 " + day+"일" + ">";


    // 현재 날짜에서 월요일까지의 날짜 차이 계산
    const daysUntilMonday = (currentWeek === 0 ? 7 : currentWeek) - 1;

    mondayDate.setDate(mondayDate.getDate() - daysUntilMonday);

    mondayDate.setHours(0, 0, 0, 0);

    // 이번 주의 근태 정보
    const weekData =  workData.data && workData.data.length >0 ? workData.data.filter(item => {

            const endDate = new Date(item.quittingTime)

            console.log("endDate : " + endDate, "mondayDate : " + mondayDate,"currentDate : " + currentDate )

            return mondayDate <= endDate && endDate <= currentDate
        }
    ) : 0;
    
    // 이번달의 근태 정보
    const monthData = workData.data && workData.data.length != 0 && workData.data.filter(item => {
        const itemDate = new Date(item.attendanceTime)
        const itemYear = itemDate.getFullYear();
        const itemMonth = itemDate.getMonth() + 1;
        return itemYear === year && itemMonth === month;
    });


    // weekOvertime는 시분초밀리초의 값을 따로 구해 밀리초로 반환을 해야함
    // 이번주 누적 근로 시간
    const weekTotalTime = weekData && weekData.length > 0 ? weekData.reduce((total, item) => {

        const overTime = new Date(item.extensionTime);
        const hours = overTime.getUTCHours();
        const minutes = overTime.getUTCMinutes();
        const seconds = overTime.getUTCSeconds();
        const milliseconds = overTime.getUTCMilliseconds();

        // 시간, 분, 초, 밀리초를 모두 밀리초로 변환
        const result = (hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;

        return total += result;
    }, 0) : 0;

    const monthTotalTime = monthData && monthData.length > 0 ? monthData.reduce((total, item) => {

        const overTime = new Date(item.extensionTime);
        const hours = overTime.getUTCHours();
        const minutes = overTime.getUTCMinutes();
        const seconds = overTime.getUTCSeconds();
        const milliseconds = overTime.getUTCMilliseconds();

        // 시간, 분, 초, 밀리초를 모두 밀리초로 변환
        const result = (hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;

        return total += result;
    }, 0) : 0;


    // 날짜 포맷 변경
    function formatFunction (data) {
        const date = new Date(data);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }

    function extensionTimeFormat (data) {
        const date = new Date(data);
        const hours = date.getHours()-9;
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }


    // 밀리초 값을 시간, 분, 초로 변환
    // 이번주 누적 근로 시간
    const totalSeconds = Math.floor(weekTotalTime / 1000); // 전체 초
    const hours = Math.floor(totalSeconds / 3600); // 시간
    const minutes = Math.floor((totalSeconds % 3600) / 60); // 분
    const seconds = totalSeconds % 60; // 초

    const monthTotalSeconds = Math.floor(monthTotalTime / 1000); // 전체 초
    const monthDays = Math.floor(monthTotalSeconds / 86400); // 일
    const remainingSeconds = monthTotalSeconds % 86400; // 남은 초

    const monthHours = Math.floor(remainingSeconds / 3600); // 시간
    const monthMinutes = Math.floor((remainingSeconds % 3600) / 60); // 분
    const monthSeconds = remainingSeconds % 60; // 초



    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토", "일"];

    const resultData = monthData && monthData.map(item => ({
        day : new Date(item.attendanceTime).getDate(),
        workingDate :  daysOfWeek[new Date(item.attendanceTime).getDay()],
        attendanceTime: formatFunction(item.attendanceTime),
        quittingTime: formatFunction(item.quittingTime),
        extensionTime : extensionTimeFormat(item.extensionTime)
    }));


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

    function format(timeString){

        const subString = timeString.substring(0, 2);

        const numericValue = parseInt(subString, 10)

        if(numericValue >= 8){
            const currentTime = new Date(`2000-01-01T${timeString}`);

            // 8시간을 빼기 위해 시간을 설정
            currentTime.setHours(currentTime.getHours() - 8);
            const formattedTime = `${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2, '0')}:${String(currentTime.getSeconds()).padStart(2, '0')}`;

            return formattedTime
        } else{
            return '0:00:00'
        }
    }

    function defaultTime(timeString) {
        const components = timeString.split(':');
        const hours = parseInt(components[0], 10);
        const formattedHours = hours >= 8 ? '08' : formatTimeComponent(hours);
        const minutes = hours >= 8 ? '00' : formatTimeComponent(parseInt(components[1], 10));
        const seconds = hours >= 8 ? '00' : formatTimeComponent(parseInt(components[2], 10));

        return `${formattedHours}:${minutes}:${seconds}`;
    }


    function formatDate(ISOString) {
        const regex = /T(\d{2}:\d{2}:\d{2})\.\d{3}\+\d{2}:\d{2}/;
        const match = ISOString.match(regex);

        if (match) {
            return match[1]; // 시간 부분 추출
        } else {
            return null; // 일치하는 부분이 없는 경우
        }
    }

    function processTimeArray(timeArray) {
        let totalMilliseconds = 0;

        for (const timeString of timeArray) {
            const [hours, minutes, seconds] = timeString.split(':').map(Number);
            const milliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;

            if (milliseconds >= 8 * 3600 * 1000) {
                totalMilliseconds += milliseconds - 8 * 3600 * 1000;
            }
        }

        // 결과를 시간 문자열로 변환
        const totalSeconds = totalMilliseconds / 1000;
        const resultHours = Math.floor(totalSeconds / 3600);
        const resultMinutes = Math.floor((totalSeconds % 3600) / 60);
        const resultSeconds = Math.floor(totalSeconds % 60);

        return `${String(resultHours).padStart(2, '0')}시간 ${String(resultMinutes).padStart(2, '0')}분 ${String(resultSeconds).padStart(2, '0')}초`;
    }

    const resultTime = weekData.length > 0 && weekData.map(item=>{
        return formatDate(item.attendanceTime)
    })

    const totalTime = monthData.length > 0 && monthData.map(item=>{
        return formatDate(item.attendanceTime)
    })

    // 테스트용 ( 테스트 끝나면 지우기)
    const onClickTest = () => {
        console.log(resultTime);
    }
    return (
        <>
            <div className={styles.content}>
                <div>
                    <div>
                        <div onClick={onClickTest} className={styles.contentHeader}>
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
                                { hours + '시간 '+  minutes + '분 '+ seconds + '초'}
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                이번주 연장 근로 시간
                            </div>
                            <div className={styles.statusTime}>
                                { processTimeArray(resultTime)}
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                이번달 누적 근로 시간
                            </div>
                            <div className={styles.statusTime}>
                                {  monthDays + '일 ' + monthHours+ '시간 '+  monthMinutes + '분 '+ monthSeconds + '초'}
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                이번달 연장 근로 시간
                            </div>
                            <div className={styles.statusTime}>
                                { processTimeArray(totalTime)}
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
                        <div>
                            {resultData && resultData.map(data => (
                                <div>
                                    <div className={styles.infoContent}>
                                        <div className={styles.statusInfoBox1}>
                                            {data.day} ({data.workingDate})
                                        </div>
                                        <div className={styles.statusInfoBox2}>
                                            {formatTime(data.attendanceTime) }
                                        </div>
                                        <div className={styles.statusInfoBox3}>
                                            { formatTime(data.quittingTime) }
                                        </div>
                                        <div className={styles.statusInfoBox4}>
                                            { formatTime(data.extensionTime) }
                                        </div>
                                        <div className={styles.statusInfoBox5}>
                                            기본 {defaultTime(formatTime(data.extensionTime)) } / 연장 {  format(formatTime(data.extensionTime)) }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default WorkStatusContent;