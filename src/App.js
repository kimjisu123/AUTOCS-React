import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Layout from "./pages/layouts/lyout";
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Main from './pages/main/Main'

import Layout from "./layouts/layout";
//지호
import AppHome from './pages/approvalPage/AppHome'
import Purchase from './pages/approvalPage/Purchase'
import Vacation from './pages/approvalPage/Vacation'
import Traffic from './pages/approvalPage/Traffic'
import Business from './pages/approvalPage/Business'
import Pay from './pages/approvalPage/Pay'
import AppWait from './pages/approvalPage/AppWait'
import AppSee from './pages/approvalPage/AppSee'
import MyBusiness from './pages/approvalPage/MyBusiness'
import MyApp from './pages/approvalPage/MyApp'
import MySee from './pages/approvalPage/MySee'
import Receive from './pages/approvalPage/Receive'
import Send from './pages/approvalPage/Send'
import OrgChart from './pages/Chart/OrgChart'

//해든
//로그인 관련
import Login from "./pages/Login/Login";
import FindId from "./pages/Login/findId";
import FindPwd from "./pages/Login/findPwd";
import Registration from "./pages/createMember/registration";
import RegistOk from "./pages/createMember/registOk";
import ApplyOk from "./pages/applyForm/applyOk";
import FindPwdOk from "./pages/Login/findPwdOk";
import GuideId from "./pages/Login/guideId";
import GuidePwd from "./pages/Login/guidePwd";
import ApplySForm from "./pages/applyForm/applySForm";
import OutSForm from "./pages/outForm/outSForm";
import OutMForm from "./pages/outForm/outMForm";
import NoAuthority from "./pages/Login/noAuthority"
import ApplyStateW from "./pages/applyForm/applyStateW";
import StoreLogin from "./pages/Login/storeLogin";
import Menu from "./pages/applyForm/Menu";
import BoardMenu from "./pages/board/Menu";
import ApplyStateO from "./pages/applyForm/applyStateO";
import GuideStoreId from "./pages/Login/guideStoreId";
import OutE from "./pages/outForm/outE";
import OutOKM from "./pages/outForm/outOKM";
import OutStateW from "./pages/outForm/OutStateW";
import OutS from "./pages/outForm/OutS"
import NoticeEmployee from "./pages/board/noticeEmployee"
import Rules from "./pages/board/rules";
import News from "./pages/board/news";
import DepartmentNews from "./pages/board/departmentNews";
import SuggestionE from "./pages/board/suggestionE";
import FreeE from "./pages/board/freeE";
import NoticeMarket from "./pages/board/noticeMarket";
import SuggestionM from "./pages/board/suggestionM";
import FreeM from "./pages/board/freeM";
import Writing from "./pages/board/writing";
import PostDetail from "./pages/board/PostDetail";
import UpdateBoard from "./pages/board/updateBoard";
import MyBoard from "./pages/board/myBoard";

//지수
import Management from "./pages/management/Management"
import Department from "./pages/management/Department"
import HeadOffice from "./pages/management/HeadOffice"
import Mail from "./pages/Mail/Mail"
import MailBookmark from "./pages/Mail/MailBookmark"
import MailSent from "./pages/Mail/MailSent"
//미지
//재고관리
import Stock from './pages/stock/Stock'
import ListPopup from "./pages/stock/ListPopup";
import ReciptPopup from "./pages/stock/ReciptPopup";
import Check from "./pages/stock/Check";
import OrderList from "./pages/stock/OrderList";
import Bill from "./pages/stock/Bill";
import Statistics from "./pages/stock/Statistics";
import BillDetail from "./pages/stock/BillDetail";
import StockIo from "./pages/stock/StockIo";
import ProductDelete from "./pages/stock/ProductDelete";
import ProductRegist from "./pages/stock/ProductRegist";
import Category from "./pages/stock/Category";
import Standard from "./pages/stock/Standard";
import Unit from "./pages/stock/Unit";
import Order from "./pages/stock/Order";
import MyOrderList from "./pages/stock/MyOrderList";
import MyOrderListDetail from "./pages/stock/MyOrderListDetail";
import Refund from "./pages/stock/Refund";
import MyBill from "./pages/stock/MyBill";
import MyStatistics from "./pages/stock/MyStatistics";

//지은
import Mypage from "./pages/Mypage/Mypage";
import MainContent from "./pages/mainpage/MainContent";
import UpdatePwApp from "./pages/Mypage/UpdatePwApp";
import UpdatePWok from "./pages/Mypage/UpdatePWok";
import YourComponent from "./pages/mainpage/DocuList";
import MypageStoreNo from "./pages/Mypage/MypageStoreNo";
import TodoApp from "./pages/Todolist/TodoApp";
// import {ThemeProvider} from "./theme/context/ThemeProvider";
// import {GlobalStyle} from "./theme/theme/GlobalStyle";

import MailSend from "./pages/Mail/MailSend";
import PurchaseContent from "./pages/approvalPage/PurchaseContent";
import ApprovalDocument from "./pages/approvalPage/ApprovalDocument";
import MypageStore from "./pages/Mypage/MypageStore";
import MainContentStore from "./pages/mainpage/MainContentStore";



function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {/*다크모드적용 예정*/}
                {/*<ThemeProvider>*/}
                    {/*<GlobalStyle/>*/}
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        //메인 MainContentStore
                        <Route path='/main' element={<Main/>}/>
                        <Route path='/mainstore' element={<MainContentStore/>}/>
                        //지호
                        <Route path='/approval' element={<AppHome/>}/>
                        <Route path='/approval/purchase' element={<Purchase/>}/>
                        <Route path='/approval/vacation' element={<Vacation/>}/>
                        <Route path='/approval/traffic' element={<Traffic/>}/>
                        <Route path='/approval/business' element={<Business/>}/>
                        <Route path='/approval/pay' element={<Pay/>}/>
                        <Route path='/approval/appWait' element={<AppWait/>}/>
                        <Route path='/approval/appSee' element={<AppSee/>}/>
                        <Route path='/approval/myBusiness' element={<MyBusiness/>}/>
                        <Route path='/approval/myApp' element={<MyApp/>}/>
                        <Route path='/approval/mySee' element={<MySee/>}/>
                        <Route path='/approval/Receive' element={<Receive/>}/>
                        <Route path='/approval/Send' element={<Send/>}/>
                        <Route path='chart' element={<OrgChart/>}/>
                        <Route path='/approval/document' element={<ApprovalDocument/>}/>

                        //지수
                        <Route path='/management' element={<Management />} />
                        <Route path='/department' element={<Department />} />
                        <Route path='/headOffice' element={<HeadOffice />} />
                        <Route path='/mail/:value' element={<Mail />} />
                        <Route path='/mailSent/:value' element={<MailSent />} />
                        <Route path='/mailBookmark' element={<MailBookmark />} />



                        //미지
                        //재고관리
                        <Route path='stock' element={<Stock/>}>
                            //본사 재고관리
                            <Route path='check' element={<Check/>}/>
                            <Route path='orderlist' element={<OrderList/>}/>
                            <Route path='bill' element={<Bill/>}/>
                            <Route path='bill/detail/:orderNo' element={<BillDetail/>}/>
                            <Route path='statistics' element={<Statistics/>}/>
                            <Route path='stockio' element={<StockIo/>}/>
                            //본사 물품관리
                            <Route path='productregist' element={<ProductRegist/>}/>
                            <Route path='productdelete' element={<ProductDelete/>}/>
                            <Route path='category' element={<Category/>}/>
                            <Route path='standard' element={<Standard/>}/>
                            <Route path='unit' element={<Unit/>}/>
                            //영업점 발주관리
                            <Route path='order' element={<Order/>}/>
                            <Route path='myorderlist' element={<MyOrderList/>}/>
                            <Route path='myorderlist/detail/:myOrderNo' element={<MyOrderListDetail/>}/>
                            <Route path='refund/:myOrderProductNo' element={<Refund/>}/>
                            <Route path='mybill' element={<MyBill/>}/>
                            <Route path='mystatistics' element={<MyStatistics/>}/>
                        </Route>

                        //해든
                        //사원 등록
                        <Route path='menu' element={<Menu/>}>
                        <Route path='registration' element={<Registration/>}/>
                        <Route path='registOk' element={<RegistOk/>}/>
                        //계정 비활성화 내역 확인
                        <Route path='outE' element={<OutE/>}/>
                        //계정 비활성화 완료 직원들
                        <Route path='outEOK' element={<OutOKM/>}/>
                        //영업점 신청 내역 확인
                        <Route path='applyFormW' element={<ApplyStateW/>}/>
                        <Route path='applyFormO' element={<ApplyStateO/>}/>
                        <Route path='outFormW' element={<OutStateW/>}/>
                        <Route path='outSOK' element={<OutS/>}/>
                        </Route>

                        //계정 비활성화 신청
                        <Route path='/outM' element={<OutMForm/>}/>
                        <Route path='mypagestore/outS' element={<OutSForm/>}/>

                        //직원 내가 쓴 글
                        <Route path='myBoard' element={<MyBoard/>}/>

                        //직원 게시판
                        <Route path='board' element={<BoardMenu/>}>
                            <Route path='notieE' element={<NoticeEmployee/>}/>
                            <Route path='rule' element={<Rules />}/>
                            <Route path='news' element={<News />}/>
                            <Route path='departmentNews' element={<DepartmentNews />}/>
                            <Route path='suggestionE' element={<SuggestionE />}/>
                            <Route path='freeE' element={<FreeE />}/>
                            //영업점 게시판
                            <Route path='notieM' element={<NoticeMarket />}/>
                            <Route path='suggestionM' element={<SuggestionM />}/>
                            <Route path='freeM' element={<FreeM />}/>
                            //글작성
                            <Route path='writing' element={<Writing />}/>
                            <Route path='update/:boardNo' element={<UpdateBoard />}/>
                            //글 내용 확인
                            <Route path='detail/:boardNo' element={<PostDetail />} />
                        </Route>

                        //지은
                        <Route path='myPage' element={<Mypage/>}>
                            <Route path='employee' element={<Mypage/>}/>
                        </Route>
                        <Route path='mypagestore' element={<MypageStore/>}/>
                        <Route path='pw2' element={<UpdatePwApp/>}/>
                        <Route path='home' element={<MainContent/>}/>
                        // 비밀번호 변경 팝업
                        <Route path='pwpopup' element={<UpdatePWok/>}/>
                        <Route path='store' element={<YourComponent/>}/>
                        <Route path='todo' element={<TodoApp/>}/>
                    </Route>

                    //미지
                    //재고관리 팝업
                    <Route path='ListPopup' element={<ListPopup/>}/>
                    <Route path='ReciptPopup' element={<ReciptPopup/>}/>

                    //해든
                    //아이디비밀번호찾기, 안내등
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/Slogin' element={<StoreLogin/>}/>
                    <Route path='/login/findId' element={<FindId/>}/>
                    <Route path='/login/fIOk/guideId' element={<GuideId/>}/>
                    <Route path='/login/fIOk/guideSId' element={<GuideStoreId/>}/>
                    <Route path='/login/findPwd' element={<FindPwd/>}/>
                    <Route path='/login/fPOk' element={<FindPwdOk/>}/>
                    <Route path='/login/fPOk/guidePwd' element={<GuidePwd/>}/>

                    //NO권한
                    <Route path='/noAuthority' element={<NoAuthority/>}/>

                    //계정신청
                    <Route path='/applyS' element={<ApplySForm/>}/>
                    <Route path='/ApplyOk' element={<ApplyOk/>}/>
              </Routes>
            {/*</ThemeProvider>*/}
          </BrowserRouter>
        </Provider>
  );
}

export default App;