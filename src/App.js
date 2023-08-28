import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./pages/layouts/layout";
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from "./layouts/layout";
//지호

import Approval from './pages/approvalPage/Approval'

//해든
//로그인 관련
import Login from "./pages/Login/Login";
import FindId from "./pages/Login/findId";
import FindPwd from "./pages/Login/findPwd";
import FindIdOk from "./pages/Login/findIdOk";
import Registration from "./pages/createMember/registration";
import RegistOk from "./pages/createMember/registOk";
import ApplyOk from "./pages/applyForm/applyOk";
import FindPwdOk from "./pages/Login/findPwdOk";
import GuideId from "./pages/Login/guideId";
import GuidePwd from "./pages/Login/guidePwd";
import ApplySForm from "./pages/applyForm/applySForm";
import OutSForm from "./pages/outForm/outSForm";
import OutMForm from "./pages/outForm/outMForm";
import Mmail from "./pages/emailGuide/Mmail";
import Smail from "./pages/emailGuide/Smail";
import NoAuthority from "./pages/Login/noAuthority"

//지수
import Management from "./pages/management/Management"
import Department from "./pages/management/Department"
import HeadOffice from "./pages/management/HeadOffice"
import Mail from "./pages/Mail/Mail"

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
import UpdatePW from "./pages/Mypage/UpdatePW";
import UpdatePwApp from "./pages/Mypage/UpdatePwApp";
import MyMemoTemplate from "./pages/mainpage/memo/MyMemoTemplate";
import Table from "./pages/mainpage/Table";
import SlideCard from "./pages/mainpage/SlideCard";
import UpdatePWok from "./pages/Mypage/UpdatePWok";
import YourComponent from "./pages/Mypage/YourComponent";
import MypageStore from "./pages/Mypage/MypageStore";
// import {ThemeProvider} from "./theme/context/ThemeProvider";
// import {GlobalStyle} from "./theme/theme/GlobalStyle";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {/*<ThemeProvider>*/}
                    {/*<GlobalStyle/>*/}
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        //지호
                        <Route path='approval' element={<Approval/>}/>

                        //지수
                        <Route path='management' element={<Management />} />
                        <Route path='department' element={<Department />} />
                        <Route path='headOffice' element={<HeadOffice />} />
                        <Route path='mail' element={<Mail />} />

                        //미지
                        //재고관리
                        <Route path='stock' element={<Stock/>}>
                            //본사 재고관리
                            <Route path='check' element={<Check/>}/>
                            <Route path='orderlist' element={<OrderList/>}/>
                            <Route path='bill' element={<Bill/>}/>
                            <Route path='bill/detail' element={<BillDetail/>}/>
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
                            <Route path='myorderlist/detail' element={<MyOrderListDetail/>}/>
                            <Route path='refund' element={<Refund/>}/>
                            <Route path='mybill' element={<MyBill/>}/>
                            <Route path='mystatistics' element={<MyStatistics/>}/>
                        </Route>

                        //해든
                        //사원 등록
                        <Route path='registration' element={<Registration/>}/>
                        <Route path='registOk' element={<RegistOk/>}/>
                        //계정 비활성화 신청
                        <Route path='outM' element={<OutMForm/>}/>
                        <Route path='outS' element={<OutSForm/>}/>

                        //지은
                        <Route path='myPage' element={<Mypage/>}>
                            <Route path='employee' element={<Mypage/>}/>
                            <Route path='store' element={<MypageStore/>}/>
                        </Route>
                        <Route path='pw2' element={<UpdatePwApp/>}/>
                        <Route path='home' element={<MainContent/>}/>
                        <Route path='test' element={<MyMemoTemplate/>}/>
                        // 비밀번호 변경 팝업
                        <Route path='pwpopup' element={<UpdatePWok/>}/>
                        <Route path='store' element={<YourComponent/>}/>
                    </Route>

                    //미지
                    //재고관리 팝업
                    <Route path='ListPopup' element={<ListPopup/>}/>
                    <Route path='ReciptPopup' element={<ReciptPopup/>}/>

                    //해든
                    //아이디비밀번호찾기, 안내등
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/login/findId' element={<FindId/>}/>
                    <Route path='/login/fIOk' element={<FindIdOk/>}/>
                    <Route path='/login/fIOk/guideId' element={<GuideId/>}/>
                    <Route path='/login/findPwd' element={<FindPwd/>}/>
                    <Route path='/login/fPOk' element={<FindPwdOk/>}/>
                    <Route path='/login/fPOk/guidePwd' element={<GuidePwd/>}/>

                    //NO권한
                    <Route path='/noAuthority' element={<NoAuthority/>}/>

                    //계정신청
                    <Route path='/applyS' element={<ApplySForm/>}/>
                    <Route path='/ApplyOk' element={<ApplyOk/>}/>

                    //계정 안내(메일)
                    <Route path='/Mmail' element={<Mmail/>}/>
                    <Route path='/Smail' element={<Smail/>}/>



                </Routes>
            {/*</ThemeProvider>*/}
          </BrowserRouter>
        </Provider>
  );
}

export default App;