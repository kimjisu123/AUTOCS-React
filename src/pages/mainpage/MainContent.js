import emp from "../Mypage/emp.jpg";
import mainstyle from './MainContent.module.css';
import classNames from "classnames";
import TodoApp from "../Todolist/TodoApp";
import MiniCalender from "../compoments/MiniCalender";
import monent from 'moment';

import ApprovalList from "./ApprovalList";
import YourComponent from "./DocuList";
import React, {useEffect, useState} from "react";
import DailyList from "./DailyList";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {NavLink, useNavigate} from "react-router-dom";
import moment from "moment-timezone";
import DocuList from "./DocuList";
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";
import {callGetMemberInfoAPI} from "../../apis/MypageAPICalls";
import Spinner from "./Spinner-1s-200px.gif";




// 비구조화 할당 문법을 활용한 css내부 값 추출하기 이렇게 쓰면 MypageCSS.mainContatiner를 안써도된다. )


const MainContent = () => {

    const combineClass = classNames('tempBox' , 'three')
    const today = String(new Date().toLocaleDateString());
    const formatDate = monent(today).format("MMMM Do YYYY");
    // const [ThemeMode , toggleTheme] = useTheme();

    const dispatch = useDispatch();
    const accessToken = window.localStorage.getItem('accessToken');


    const decodedToken = accessToken ? decodeJwt(accessToken) : null;




    // 회원정보 가지고 오기
    const employees = useSelector(state => state.myPageReducer);
    const [memberNo , setMemberNo] = useState(0);
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // 사진 파일 전달
    const [ selectedImage, setSelectedImage ] = useState('');


    const getCurrentTime = () => {
        var m = moment().tz("Asia/Seoul"); // ← 이곳이 포인트
        return m.format("HH:mm:ss");
    };
    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentTime(getCurrentTime());
    //     }, 1000); // (60초)마다 업데이트
    //
    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);

    // 회원 정보 불러오기
    useEffect(() => {

        async function fetchData() {
            try {

                console.log("callGetMemberInfoAPI : {} " + callGetMemberInfoAPI(decodedToken.MemberNo))
                const memeberInfo = await dispatch(callGetMemberInfoAPI(decodedToken.MemberNo));
                // const profileInfo = await dispatch(callGetPofileAPI(decodedToken.MemberNo));

                if (employees.data && employees.data.name) {
                    // 'name' 속성에 접근할 수 있습니다.
                    console.log("employeeList.name {}" ,employees.data.name);
                    setMemberNo(employees.data.memberNo);
                    console.log("employeeList.name {}" ,memberNo);
                    // 이제 name을 사용할 수 있습니다.
                    setSelectedImage(employees.data.memberFile);
                    console.log("employees.data.memberFile {}" ,employees.data.memberFile);
                }


            } catch (error) {
                console.error('API 호출 오류:', error);
            }
        }
        fetchData();
    }, []);

    if (!selectedImage) {
        return <div className={mainstyle.loading}>
                    Loading...
                    <img src={Spinner} alt="로딩중" width="5%" />
                </div>;
    }

    return (
        <>
            <div className={mainstyle.container}>
                <div className={mainstyle.homeContainer}>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.titleContainer}>
                            <div className={mainstyle.maintitle}>
                                <div className={mainstyle.mainImg}>
                                    <img src={ selectedImage } alt="" className={mainstyle.empInfoImg}/>
                                </div>
                                <div className={mainstyle.maintext}>
                                    <h1>안녕하세요 {decodedToken.Name}{decodedToken.Position}님</h1>
                                    <h3>오늘 하루도 힘내세요</h3>
                                </div>
                                <div className={mainstyle.workbuttons}>
                                        <button>출근하기</button>
                                        <button>퇴근하기</button>
                                </div>
                            </div>
                            <div className={mainstyle.fastButtons}>
                                <NavLink to="/approval/purchase"><button>구매 요청</button></NavLink>
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
                                {/*<MdAccessTime />*/}
                                <h3 style={{textAlign:"center"}}>Today</h3>
                                <h1>{ formatDate }</h1>
                                <h1 style={{textAlign:"center", fontSize:'60px', margin:'0px'}}>{ currentTime }</h1>
                            </div>
                            {/*<div className={mainstyle.darkmode}>*/}
                            {/*    <MdAccessTime />*/}
                            {/*    <h3>다크모드</h3>*/}
                            {/*    <button>다크모드버튼</button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className={mainstyle.tempBox} style={{ display:"flex"}}>
                        <div className={mainstyle.datelist}>
                            <h1 style={{textAlign:"center", color:"#696767"}}>Calender</h1>
                            <div className={mainstyle.calnederContent}>
                                <MiniCalender/>
                            </div>
                        </div>
                        <div className={mainstyle.datelist}>
                            <div className={mainstyle.daliyTitle}>
                                <h1 style={{textAlign:"center", color:"#696767"}}>일정리스트</h1>
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
                            <div className={mainstyle.docutitle}>
                                <div><h1 style={{textAlign:"center", color:"#696767"}}>전자문서 결제</h1></div>
                                <div><NavLink to="/stock/myorderlist/detail"><MdKeyboardDoubleArrowRight/></NavLink></div>
                            </div>
                            <div className={mainstyle.doculist}>
                                <DocuList />
                                <DocuList />
                                <DocuList />
                                <DocuList />
                            </div>

                            {/*<div><ApprovalList /></div>*/}
                        </div>
                    </div>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.boradPart}>
                            <h1 style={{textAlign:"center", color:"#696767"}}>공지사항</h1>
                            {/*<div><DocuList /></div>*/}
                            <div><ApprovalList /></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MainContent;