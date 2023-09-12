import mainstyle from './MainContent.module.css';
import classNames from "classnames";
import TodoApp from "../Todolist/TodoApp";
import MiniCalender from "../compoments/MiniCalender";
import monent from 'moment';
import React, {useEffect, useState} from "react";
import DailyList from "./DailyList";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {NavLink, useNavigate} from "react-router-dom";
import DocuList from "./DocuList";
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";
import {callGetMemberInfoAPI} from "../../apis/MypageAPICalls";
import Spinner from "./Spinner-1s-200px.gif";
import logo from "../compoments/LOGO.png";
import Clock from "./Clock";
import DocuListS1 from "./DocuListS1";
import DocuListS2 from "./DocuListS2";
import Statistics from "../stock/Statistics";
import MyStatistics from "../stock/MyStatistics";
import SalesChart from "./SalesChart";
import DocuListS3 from "./DocuListS3";


const MainContentStore = () => {

    const combineClass = classNames('tempBox' , 'three')
    const today = String(new Date().toLocaleDateString());
    const formatDate = monent(today).format("MMMM Do YYYY");
    // const [ThemeMode , toggleTheme] = useTheme();

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

    // 로딩화면
    if (!employees) {
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
                                    {/*<img src={ selectedImage } alt="" className={mainstyle.empInfoImg}/>*/}
                                    {selectedImage? (
                                        <img
                                            // src={ emp }
                                            className={mainstyle.empInfoImg}
                                            src={ selectedImage }
                                            alt="Selected"
                                        />):(<img
                                        // src={ emp }
                                        className={mainstyle.empInfoImg}
                                        src={ logo }
                                        alt="Selected"
                                    />)}
                                </div>
                                <div className={mainstyle.maintext}>
                                    <h1>안녕하세요 {decodedToken.Name}{decodedToken.Position}님</h1>
                                    <h3>오늘 하루도 힘내세요</h3>
                                </div>
                            </div>
                            <div className={mainstyle.fastButtons}>
                                <NavLink to="/stock/check"><span className={mainstyle.color}></span><button>재고 조회</button></NavLink>
                                <NavLink to="/stock/orderlist"><button>신청내역관리</button></NavLink>
                                <NavLink to="/stock/productregist"><button>물품 신규 등록</button></NavLink>
                                <NavLink to="/stock/order"><button>발주 신청</button></NavLink>
                                <NavLink to="/stock/bill"><button>세금 계산서</button></NavLink>
                                <NavLink to="/stock/stockio/"><button>입고 폐기 등록</button></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.timeAndDark}>
                            <div className={mainstyle.mainTime}>
                                {/*<MdAccessTime />*/}
                                <h3 style={{textAlign:"center", marginTop:'20px'}}>Today</h3>
                                <h1>{ formatDate }</h1>
                                <Clock/>
                            </div>
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
                            <div className={mainstyle.mainTodo}><TodoApp /></div>
                        </div>
                    </div>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.documentPart}>
                            <div className={mainstyle.docutitle}>
                                <div><h1 style={{textAlign:"center", color:"#696767"}}>발주 통계</h1></div>
                                {/*<div><NavLink to="/stock/myorderlist/detail"><MdKeyboardDoubleArrowRight/></NavLink></div>*/}
                            </div>
                            <div className={mainstyle.doculist} style={{gap:"0 80px"}}>
                                <SalesChart />
                                <Statistics />
                                <MyStatistics/>
                            </div>

                            {/*<div><ApprovalList /></div>*/}
                        </div>
                    </div>
                    <div className={mainstyle.tempBox}>
                        <div className={mainstyle.boradPart}>
                            <div className={mainstyle.docutitle}>
                            <h1 style={{textAlign:"center", color:"#696767"}}>게시판</h1>
                            <div><NavLink to="/stock/myorderlist/detail"><MdKeyboardDoubleArrowRight/></NavLink></div>
                            </div>
                            <div style={{ margin:"16px"}}>
                                <div style={{ height:"200px"}}><DocuListS1 /></div>
                                <div style={{marginTop:"20px",height:"200px"}}><DocuListS2 /></div>
                                <div style={{marginTop:"20px",height:"200px"}}><DocuListS3 /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MainContentStore;