import mainstyle from './MainContent.module.css';
import classNames from "classnames";
import TodoApp from "../Todolist/TodoApp";
import MiniCalender from "../compoments/MiniCalender";
import monent from 'moment';
import ApprovalList from "./ApprovalList";
import React, {useEffect, useState} from "react";
import DailyList from "./DailyList";
import {MdKeyboardDoubleArrowRight, MdWork, MdWorkOff} from "react-icons/md";
import {NavLink, useNavigate} from "react-router-dom";
import DocuList from "./DocuList";
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";
import {callGetMemberInfoAPI} from "../../apis/MypageAPICalls";
import Spinner from "./Spinner-1s-200px.gif";
import logo from "../compoments/LOGO.png";
import Clock from "./Clock";
import DocuList2 from "./DocuList2";
import DocuList3 from "./DocuList3";
import DocuList4 from "./DocuList4";
import {callPostAttendanceAPI, callPutQuittingAPI} from "../../apis/WorkStatusAPICalls";




// 비구조화 할당 문법을 활용한 css내부 값 추출하기 이렇게 쓰면 MypageCSS.mainContatiner를 안써도된다. )


const MainContent = () => {

    const combineClass = classNames('tempBox' , 'three')
    const today = String(new Date().toLocaleDateString());
    const formatDate = monent(today).format("MMMM Do YYYY");

    const dispatch = useDispatch();
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;

    // 출퇴근 시간 보이기
    const [isStartWorkTimeVisible, setIsStartWorkTimeVisible] = useState(false);
    const [isFinishWorkTimeVisible, setIsFinishWorkTimeVisible] = useState(false);
    const [workTime, setWorkTime] = useState(null);
    const [workFinishTime, setWorkFinishTime] = useState(null);


    // 회원정보 가지고 오기
    const employees = useSelector(state => state.myPageReducer);
    const [memberNo , setMemberNo] = useState(0);
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // 사진 파일 전달
    const [ selectedImage, setSelectedImage ] = useState('');


    // 회원 정보 불러오기
    useEffect(() => {
        async function fetchData() {
            try {

                const memeberInfo = await dispatch(callGetMemberInfoAPI(decodedToken.MemberNo));

                if (employees.data && employees.data.name) {
                    // 'name' 속성에 접근할 수 있습니다.
                    // console.log("employeeList.name {}" ,employees.data.name);
                    setMemberNo(employees.data.memberNo);
                    // console.log("employeeList.name {}" ,memberNo);
                    // 이제 name을 사용할 수 있습니다.
                    setSelectedImage(employees.data.memberFile);
                    // console.log("employees.data.memberFile {}" ,employees.data.memberFile);
                }
            } catch (error) {
                console.error('API 호출 오류:', error);
            }
        }
        fetchData();
    }, []);

    // 로딩화면
    if (!employees) {
        return <div className={mainstyle.loading}>
                    Loading...
                    <img src={Spinner} alt="로딩중" width="5%" />
                </div>;
    }

        // 출근시간 표시
        const startWork = () => {
        if (!isStartWorkTimeVisible) {
            // 출근 버튼 클릭 시 현재 시간 가져오기
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            // 현재 시간을 시:분 형식으로 표시
            const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
            dispatch( callPostAttendanceAPI() )

            // 현재 시간을 상태에 저장
            setWorkTime(formattedTime);
            setIsStartWorkTimeVisible(true); // 오늘 출근을 했다고 표시
        } else {
            alert('오늘 이미 출근했습니다.');
        }
    };

    //퇴근시간 표시
    const finishWork = () => {
        if (!isFinishWorkTimeVisible) {
            // 출근 버튼 클릭 시 현재 시간 가져오기
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            // 현재 시간을 시:분 형식으로 표시
            const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

            dispatch( callPutQuittingAPI() )

            // 현재 시간을 상태에 저장
            setWorkFinishTime(formattedTime);
            setIsFinishWorkTimeVisible(true); // 오늘 출근을 했다고 표시
        } else {
            alert('오늘 이미 퇴근했습니다.');
        }
    };

    return (
        <>
            <div className={mainstyle.container}>
                <div className={mainstyle.homeContainer}>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.titleContainer}>
                            <div className={mainstyle.maintitle}>
                                <div className={mainstyle.mainImg}>
                                    {selectedImage? (
                                        <img
                                            className={mainstyle.empInfoImg}
                                            src={ selectedImage }
                                            alt="Selected"
                                        />):(<img
                                        className={mainstyle.empInfoImg}
                                        src={ logo }
                                        alt="Selected"
                                    />)}
                                </div>
                                <div className={mainstyle.maintext}>
                                    <h1>안녕하세요 {decodedToken.Name}{decodedToken.Position}님</h1>
                                    <h3>오늘 하루도 힘내세요</h3>
                                </div>
                                <div className={mainstyle.worktimes}>
                                    {workTime && (
                                        <div>
                                            <p>출근시간</p>
                                            <h1>{workTime}</h1>
                                        </div>
                                    )}
                                    {workFinishTime && (
                                        <div>
                                            <p>퇴근시간</p>
                                            <h1>{workFinishTime}</h1>
                                        </div>
                                    )}
                                </div>
                                <div className={mainstyle.workbuttons}>
                                        <button  className="startWorkTime"
                                                 onClick={startWork}
                                        ><MdWork/>
                                            출근하기
                                        </button>

                                        <button className="finishWorkTime"onClick={finishWork} ><MdWorkOff/>퇴근하기</button>
                                </div>
                            </div>
                            <div className={mainstyle.fastButtons}>
                                <NavLink to="/approval/purchase"><span className={mainstyle.color}></span><button>구매 요청</button></NavLink>
                                <NavLink to="/approval/business"><button>업무 보고</button></NavLink>
                                <NavLink to="/approval/vacation"><button>휴가 요청</button></NavLink>
                                <NavLink to={`/mail/${decodedToken.EmployeeNo}`}><button>받은 쪽지</button></NavLink>
                                <NavLink to="/menu/applyFormO"><button>영업점 목록</button></NavLink>
                                <NavLink to="/menu/registOk"><button>직원 목록</button></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.timeAndDark}>
                            <div className={mainstyle.mainTime}>
                                <h3 style={{textAlign:"center" ,marginTop:'20px'}}>Today</h3>
                                <h1>{ formatDate }</h1>
                                <Clock/>
                            </div>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox} style={{ display:"flex"}}>
                        <div className={mainstyle.datelist}>
                            <NavLink to="/approval/vacation"><h1 style={{textAlign:"center", color:"#696767"}}>Calender</h1></NavLink>
                            <div className={mainstyle.calnederContent}>
                                <MiniCalender/>
                            </div>
                        </div>
                        <div className={mainstyle.datelist}>
                            <div className={mainstyle.daliyTitle}>
                                <h1 style={{textAlign:"center", color:"#696767"}}>일정리스트</h1>
                                <div className={mainstyle.mainTodo}><DailyList emp={employees}/></div>
                            </div>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.flexbox}>
                            <div className={mainstyle.mainTodo}><TodoApp /></div>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.documentPart}>
                            <div className={mainstyle.docutitle}>
                                <div><h1 style={{textAlign:"center", color:"#696767"}}>게시판</h1></div>
                            </div>
                            <div className={mainstyle.doculist}>
                                <DocuList />
                                <DocuList3 />
                                <DocuList2 />
                                <DocuList4 />
                            </div>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.boradPart}>
                            <div className={mainstyle.docutitle}>
                                <NavLink to="/approval/"><h1 style={{textAlign:"center", color:"#696767"}}>전자문서</h1></NavLink>
                                    <div>
                                        <NavLink to="/approval/"><MdKeyboardDoubleArrowRight/></NavLink>
                                    </div>
                            </div>
                            <div><ApprovalList /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainContent;