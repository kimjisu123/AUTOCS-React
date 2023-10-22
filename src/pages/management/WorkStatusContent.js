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

    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토", "일"];


    // 이번 주의 근태 정보
    const weekData =  workData.data && workData.data.length >0 && workData.data.filter(item => {

            const endDate = new Date(item.attendanceTime)

            console.log("endDate : " + endDate, "mondayDate : " + mondayDate,"currentDate : " + currentDate )

            return mondayDate <= endDate && endDate <= currentDate
        }
    );

    // 이번달의 근태 정보 출근을 기준으로 조회
    const monthData = workData.data && workData.data.length > 0 && workData.data.filter(item => {
        const itemDate = new Date(item.attendanceTime)
        const itemYear = itemDate.getFullYear();
        const itemMonth = itemDate.getMonth() + 1;
        return itemYear === year && itemMonth === month;
    });




    // 하단 조회용 포맷
    const resultData = monthData && monthData.map(item => ({
        day : new Date(item.attendanceTime).getDate(),
        workingDate :  daysOfWeek[new Date(item.attendanceTime).getDay()],
        attendanceTime: formatFunction(item.attendanceTime),
        quittingTime: item.quittingTime !== null ? formatFunction(item.quittingTime) : '미등록',
        extensionTime : extensionTimeFormat(item.extensionTime)
    }));

    // 날짜 검색 포맷



    // weekOvertime는 시분초밀리초의 값을 따로 구해 밀리초로 반환을 해야함
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

    // 밀리초 값을 시간, 분, 초로 변환
    // 이번주 누적 근로 시간
    const totalSeconds = Math.floor(weekTotalTime / 1000); // 전체 초
    const hours = Math.floor(totalSeconds / 3600); // 시간
    const minutes = Math.floor((totalSeconds % 3600) / 60); // 분
    const seconds = totalSeconds % 60; // 초


    // 이번달 누적 근로시간
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

    // 밀리초 값을 시간, 분, 초로 변환
    // 이번달 누적 근로 시간
    const monthTotalSeconds = Math.floor(monthTotalTime / 1000); // 전체 초
    const monthDays = Math.floor(monthTotalSeconds / 86400); // 일
    const remainingSeconds = monthTotalSeconds % 86400; // 남은 초


    // 총 근무시간에서 8시간을 빼주는 함수(연장근무)
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

    // 이번주 연장 근로 시간 조회 포맷
    const weekResultData = weekData && weekData.map(item => ({
        day : new Date(item.attendanceTime).getDate(),
        workingDate :  daysOfWeek[new Date(item.attendanceTime).getDay()],
        attendanceTime: formatFunction(item.attendanceTime),
        quittingTime: formatFunction(item.quittingTime),
        extensionTime : extensionTimeFormat(item.extensionTime)
    }));


    // 주 연장 근로시간
    const weekOverTime = weekResultData && weekResultData.map(item =>{
        return format(formatTime(item.extensionTime))
    })

    let weekHours = 0;
    let weekMinutes = 0;
    let weekSecond = 0;


    weekOverTime && weekOverTime.length >0 &&  weekOverTime.forEach(item => {
        const timeParts = item.split(':'); // 일(day), 시(hour), 분(minute), 초(second)를 배열로 분리
        const hoursValue = parseInt(timeParts[0]);
        const minutesValue = parseInt(timeParts[1]);
        const secondsValue = parseInt(timeParts[2]);


        // 초, 분, 시간, 일 단위로 캐리(Carry) 처리
        weekSecond += secondsValue;
        weekMinutes += minutesValue;
        weekHours += hoursValue;

        if (weekSecond >= 60) {
            const carryMinutes = Math.floor(weekSecond / 60);
            weekMinutes += carryMinutes;
            weekSecond %= 60;
        }
        if (weekMinutes >= 60) {
            const carryHours = Math.floor(weekMinutes / 60);
            weekHours += carryHours;
            weekMinutes %= 60;
        }
        if (weekHours >= 24) {
            const carryDays = Math.floor(weekHours / 24);
            weekHours %= 24;
        }
    });

    // 결과를 "일(day) 시(hour) 분(minute) 초(second)" 형식으로 포맷팅
    const weekReusltTime = `${weekHours}시간 ${weekMinutes}분 ${weekSecond}초`;


    // 월 연장 근로 시간
    const monthOverTime = resultData && resultData.length > 0 && resultData.map(item =>{
        return format(formatTime(item.extensionTime))
    })

    let totalDays = 0;
    let totalHours = 0;
    let totalMinutes = 0;
    let totalSecond = 0;

    monthOverTime && monthOverTime.length >0 && monthOverTime.forEach(item => {
        const timeParts = item.split(':'); // 일(day), 시(hour), 분(minute), 초(second)를 배열로 분리
        const hoursValue = parseInt(timeParts[0]);
        const minutesValue = parseInt(timeParts[1]);
        const secondsValue = parseInt(timeParts[2]);


        // 초, 분, 시간, 일 단위로 캐리(Carry) 처리
        totalSecond += secondsValue;
        totalMinutes += minutesValue;
        totalHours += hoursValue;

        if (totalSecond >= 60) {
            const carryMinutes = Math.floor(totalSecond / 60);
            totalMinutes += carryMinutes;
            totalSecond %= 60;
        }
        if (totalMinutes >= 60) {
            const carryHours = Math.floor(totalMinutes / 60);
            totalHours += carryHours;
            totalMinutes %= 60;
        }
        if (totalHours >= 24) {
            const carryDays = Math.floor(totalHours / 24);
            totalDays += carryDays;
            totalHours %= 24;
        }
    });

    // 결과를 "일(day) 시(hour) 분(minute) 초(second)" 형식으로 포맷팅
    const formattedTime = `${totalDays}일 ${totalHours}시간 ${totalMinutes}분 ${totalSecond}초`;




    // 날짜 포맷 변경 ( 이번달 누적 근로 시간 )
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

    const monthHours = Math.floor(remainingSeconds / 3600); // 시간
    const monthMinutes = Math.floor((remainingSeconds % 3600) / 60); // 분
    const monthSeconds = remainingSeconds % 60; // 초

















    function isToday(date) {
        const inputDate = new Date(date);
        const today = new Date();

        return (
            inputDate.getDate() === today.getDate() &&
            inputDate.getMonth() === today.getMonth() &&
            inputDate.getFullYear() === today.getFullYear()
        );
    }

    // 기본 근무 시간 포맷
    function formatTimeComponent(component) {
        return component < 10 ? '0' + component : component;
    }

    function formatTime(timeString) {
        if(timeString !== '미등록'){
            const components = timeString.split(':');
            const hours = formatTimeComponent(parseInt(components[0], 10));
            const minutes = formatTimeComponent(parseInt(components[1], 10));
            const seconds = formatTimeComponent(parseInt(components[2], 10));

            return `${hours}:${minutes}:${seconds}`;
        } else{
            return '미등록'
        }
    }

    // 연장 근무가 있을시 기본 근무시간을 구하는 함수
    function defaultTime(timeString) {
        const components = timeString.split(':');
        const hours = parseInt(components[0], 10);
        const formattedHours = hours >= 8 ? '08' : formatTimeComponent(hours);
        const minutes = hours >= 8 ? '00' : formatTimeComponent(parseInt(components[1], 10));
        const seconds = hours >= 8 ? '00' : formatTimeComponent(parseInt(components[2], 10));

        return `${formattedHours}:${minutes}:${seconds}`;
    }







    // 테스트용 ( 테스트 끝나면 지우기)
    const onClickTest = () => {
        console.log(resultData);
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
                    {/*<div className={styles.downloadHeader} style={{display: "flex"}}>*/}
                    {/*    <div className={styles.download}>*/}
                    {/*        목록 다운로드*/}
                    {/*    </div>*/}
                    {/*    <div className={styles.print} style={{margin:"0px 40px"}}>*/}
                    {/*        인쇄*/}
                    {/*    </div>*/}
                    {/*</div>*/}

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
                                {weekReusltTime}
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
                                {formattedTime}
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
                            {resultData && resultData.length > 0 && resultData.map(data => (
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
                                            { formatTime(data.extensionTime)=== '00:00:00'? '미등록' : formatTime(data.extensionTime)}
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