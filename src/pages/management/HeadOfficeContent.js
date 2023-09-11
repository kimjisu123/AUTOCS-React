import styles from './HeadOffice.module.css'
import {useEffect, useState, useCallback, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import { callGetHeadOfficeAPI} from "../../apis/DepartmentAPICalls";
import { FixedSizeList } from 'react-window';



function HeadOfficeContent(){


    // let options = {
    //     root: null, // 타켓 요소가 "어디에" 들어왔을때 콜백함수를 실행할 것인지 결정합니다. null이면 viewport가 root로 지정됩니다.
    //     //root: document.querySelector('#scrollArea'), => 특정 요소를 선택할 수도 있습니다.
    //     rootMargin: '0px', // root에 마진값을 주어 범위를 확장 가능합니다.
    //     threshold: 1.0 // 타겟 요소가 얼마나 들어왔을때 백함수를 실행할 것인지 결정합니다. 1이면 타겟 요소 전체가 들어와야 합니다.
    // }
    //
    // const callback = () => {
    //     console.log("관측되었습니다.")
    //     if(target.current){
    //         setCurrentPage((page) => page + 1);
    //     }
    // }
    //
    // // 첫 번째 인자로 관측되었을 경우 실행할 콜백함수를 넣습니다.
    // // 두 번째 인자로 관측에 대한 옵션을 지정합니다.
    // let observer = new IntersectionObserver(callback, options);
    //
    //
    //
    // // React에서는 useRef를 활용하여 DOM을 선택합니다.
    // let target = useRef(null);
    //
    // useEffect(() => {
    //     observer.observe(target.current);
    // }, []);




    const [items, setItems] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector(state => state.headOfficeReducer);
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageInfo = data.pageInfo;

    useEffect(() => {
        // 초기 데이터 로드
        dispatch( callGetHeadOfficeAPI(currentPage)) ;
    }, []);

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }


    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callGetHeadOfficeAPI(currentPage))
        }
        ,[currentPage]
    );


    const currentDate = new Date();
    const mondayDate = new Date()
    const year = currentDate.getFullYear();    // 현재 년 (2023)
    const month = currentDate.getMonth() + 1;  // 현재 월
    const currentWeek = currentDate.getDay();  // 현재 요일
    const day = currentDate.getDate();         // 현재 날짜(일)

    const days = ["일", "월", "화", "수", "목", "금", "토"];

    // 현재 날짜에서 월요일까지의 날짜 차이 계산
    const daysUntilMonday = (currentWeek === 0 ? 7 : currentWeek) - 1;

    mondayDate.setDate(mondayDate.getDate() - daysUntilMonday);

    mondayDate.setHours(0, 0, 0, 0);

    const monday =mondayDate.getDate();
    const sunday =mondayDate.getDate()+6;

    const toDayDate ="<"+ year + "년 " + month + "월 " + monday+"일" + ' ~ ' + year + "년 " + month + "월 " + sunday+"일" +">";

    // // data 배열 내의 각 요소를 순회하며 필터링
    const filteredData = data.data && data.data.length >0 && data.data.map(item => {
        const filteredWorkStatusLists = item.workStatusLists.filter(workStatusItem => {
            const attendanceTime = new Date(workStatusItem.workStatus.quittingTime);
            return attendanceTime >= mondayDate && attendanceTime <= new Date();
        });

        // 요일 확인
        const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

        // 월요일을 첫 번째로 배치하기 위해, 월요일을 배열 맨 앞으로 이동
        const sortedDaysOfWeek = [
            ...daysOfWeek.slice(1), // 화요일부터 일요일까지 복사
            daysOfWeek[0], // 월요일 추가
        ];

        // 요일 순서대로 빈 객체 삽입
        const sortedWorkStatusLists = [];
        sortedDaysOfWeek.forEach(day => {
            const foundItem = filteredWorkStatusLists.find(workStatusItem => {
                const attendanceTime = new Date(workStatusItem.workStatus.quittingTime);
                return daysOfWeek[attendanceTime.getDay()] === day;
            });

            if (foundItem) {
                sortedWorkStatusLists.push(foundItem);
            } else {
                // 해당 요일에 데이터가 없으면 빈 객체 추가
                sortedWorkStatusLists.push({
                    employeeNo: item.employeeNo,
                    workStatus: {
                        attendanceTime: null,
                        extensionTime: null,
                        quittingTime: null,
                        vacationStatus: null,
                        workStatusCode: null,
                    },
                });
            }
        });

        return {
            ...item,
            workStatusLists: sortedWorkStatusLists,
        };
    });

    // 이번 주의 근태 정보 (수정 완료)
    const weekData =  data.data && data.data.length >0 ? data.data.filter(item => {

            const endDate = new Date(item.attendanceTime)

            console.log("endDate : " + endDate, "mondayDate : " + mondayDate,"currentDate : " + currentDate )

            return mondayDate <= endDate && endDate <= currentDate
        }
    ) : 0;

    // // weekOvertime는 시분초밀리초의 값을 따로 구해 밀리초로 반환을 해야함
    const weekTotalTime = data && data.length > 0 ? data.reduce((total, item) => {

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




    // 연장 근무가 있을시 기본 근무시간을 구하는 함수
    function defaultTime(timeString) {
        const components = timeString.split(':');
        const hours = parseInt(components[0], 10);
        const formattedHours = hours >= 8 ? '08' : formatTimeComponent(hours);
        const minutes = hours >= 8 ? '00' : formatTimeComponent(parseInt(components[1], 10));
        const seconds = hours >= 8 ? '00' : formatTimeComponent(parseInt(components[2], 10));

        return `${formattedHours}:${minutes}:${seconds}`;
    }

    // 총 근무시간에서 8시간을 빼주는 함수(연장근무)
    function formatAndAdjustTime(timeString) {
        if (timeString === '미등록') {
            return '미등록';
        }

        const components = timeString.split(':');
        const hours = parseInt(components[0], 10);
        const formattedHours = hours >= 8 ? (hours - 8).toString().padStart(2, '0') : hours.toString().padStart(2, '0');
        const formattedTime = `${formattedHours}:${String(components[1]).padStart(2, '0')}:${String(components[2]).padStart(2, '0')}`;

        return formattedTime;
    }

    // 날짜 형식 포맷
    function formatTimeString (dateTimeString) {
        const date = new Date(dateTimeString);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const seconds = date.getUTCSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }


    // 기본 근무 시간 포맷
    function formatTimeComponent(component) {
        return component < 10 ? '0' + component : component;
    }


    // 테스트용 쓰고 나서 지우기
    const onClickTest =() =>{
        console.log(data.data)
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
                                부서명
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
                        <div style={{width:"auto", height:"675px"}}>
                            {filteredData && filteredData.length > 0 && filteredData.map(item => (
                                <div className={styles.infoContent}>
                                    <div className={styles.statusInfoBox1}>
                                        <div>
                                            {item.name + "("+ item.position.name + ")"}
                                        </div>
                                    </div>
                                    <div className={styles.statusInfoBox2}>
                                        {item.department.name}
                                    </div>
                                    {item.workStatusLists.map(item=>(
                                        item.workStatus.workStatusCode !== null ?
                                            <div>
                                                <div className={styles.statusInfoBox3}>
                                                    <div className={styles.cumulativeTime}>
                                                        {formatTimeString(item.workStatus.extensionTime)}
                                                    </div>
                                                    <div className={styles.hoursDuty}>
                                                        <div>
                                                            기본 : { item.workStatus.extensionTime && defaultTime(item.workStatus.extensionTime)}
                                                        </div>
                                                        <div>
                                                            연장 : {item.workStatus.extensionTime && formatAndAdjustTime( formatTimeString(item.workStatus.extensionTime) )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div>
                                                <div>
                                                    <div className={styles.statusInfoBox3}>
                                                        <div className={styles.cumulativeTime}>
                                                            0:00:00
                                                        </div>
                                                        <div className={styles.hoursDuty}>
                                                            <div>
                                                                기본 : 0:00:00
                                                            </div>
                                                            <div>
                                                                연장 : 0:00:00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        {/*<div ref={target} style={{width:"auto", height:"100px", border:"1px solid black"}}>*/}
                        {/*</div>*/}
                        <div style={{ listStyleType: "none", display: "flex", justifyContent: "center" }}>
                            { Array.isArray(data.data) &&
                                <button
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    &lt;
                                </button>
                            }
                            {pageNumber.map((num) => (
                                <li key={num} onClick={() => setCurrentPage(num)}>
                                    <button
                                        style={ currentPage === num ? {backgroundColor : 'orange' } : null}
                                    >
                                        {num}
                                    </button>
                                </li>
                            ))}
                            { Array.isArray(data.data) &&
                                <button
                                    onClick={() => {return setCurrentPage(currentPage + 1)}}
                                    disabled={currentPage === pageInfo.pageEnd || pageInfo.total == 0}
                                >
                                    &gt;
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadOfficeContent;