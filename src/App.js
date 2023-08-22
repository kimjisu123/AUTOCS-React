import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/layout";
import AppHome from './pages/approvalPage/AppHome'
import Purchase from './pages/approvalPage/Purchase'
import Vacation from './pages/approvalPage/Vacation'
import Traffic from './pages/approvalPage/Traffic'
import Business from './pages/approvalPage/Business'
import Pay from './pages/approvalPage/Pay'
import React from 'react';
import { Provider } from 'react-redux';
import store from './modules/store';

//지호
import Approval from './pages/approvalPage/Approval'


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        //지호
                        <Route path='approval' element={<AppHome/>}/>
                        <Route path='/approval/purchase' element={<Purchase/>}/>
                        <Route path='/approval/vacation' element={<Vacation/>}/>
                        <Route path='/approval/traffic' element={<Traffic/>}/>
                        <Route path='/approval/business' element={<Business/>}/>
                        <Route path='/approval/pay' element={<Pay/>}/>

                        //지수
                        <Route path='management' element={<Management />} />
                        <Route path='department' element={<Department />} />
                        <Route path='headOffice' element={<HeadOffice />} />
                        <Route path='calendar' element={<Calendar />} />
                        <Route path='mail' element={<Mail />} />

                        //미지
                        //재고관리
                        <Route path='/stock' element={<Stock/>}>
                            //본사 고관리
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
                        <Route path='account' element={<AccountCreate/>} />
                        //사원 등록
                        <Route path='/registration' element={<Registration/>}/>
                        <Route path='/registration/registOk' element={<RegistOk/>}/>
                        //계정신청
                        <Route path='/applyM' element={<ApplyMForm/>}/>
                        //계정 비활성화 신청
                        <Route path='/outM' element={<OutMForm/>}/>
                        <Route path='/outS' element={<OutSForm/>}/>
                    </Route>

                    //미지
                    //재고관리 팝업
                    <Route path='ListPopup' element={<ListPopup/>}/>
                    <Route path='ReciptPopup' element={<ReciptPopup/>}/>

                    //해든
                    //로그인, 아이디비밀번호찾기, 안내등
                    <Route path='login' element={<Login/>}/>
                    <Route path='/login/findId' element={<FindId/>}/>
                    <Route path='/login/fIOk' element={<FindIdOk/>}/>
                    <Route path='/login/fIOk/guideId' element={<GuideId/>}/>
                    <Route path='/login/findPwd' element={<FindPwd/>}/>
                    <Route path='/login/fPOk' element={<FindPwdOk/>}/>
                    <Route path='/login/fPOk/guidePwd' element={<GuidePwd/>}/>

                    //계정신청
                    <Route path='/applyS' element={<ApplySForm/>}/>
                    <Route path='/ApplyOk' element={<ApplyOk/>}/>

                    //계정 안내(메일)
                    <Route path='/Mmail' element={<Mmail/>}/>
                    <Route path='/Smail' element={<Smail/>}/>
              </Routes>
          </BrowserRouter>
        </Provider>
  );
}

export default App;