import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/layout";
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
import ApplyMForm from "./pages/applyForm/applyMForm";
import ApplyOk from "./pages/applyForm/applyOk";
import FindPwdOk from "./pages/Login/findPwdOk";
import GuideId from "./pages/Login/guideId";
import GuidePwd from "./pages/Login/guidePwd";
import ApplySForm from "./pages/applyForm/applySForm";
import OutOk from "./pages/outForm/outOk";
import OutSForm from "./pages/outForm/outSForm";
import OutMForm from "./pages/outForm/outMForm";
import Mmail from "./pages/emailGuide/Mmail";
import Smail from "./pages/emailGuide/Smail";

//지수
import Management from "./pages/managementPage/Management"
import Department from "./pages/managementPage/Department"
import HeadOffice from "./pages/managementPage/HeadOffice"
import Mail from "./pages/managementPage/Mail"

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


function App() {
    return (
        <>
            <BrowserRouter>
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
                        <Route path='/stock' element={<Stock/>}>
                            <Route path='check' element={<Check/>}/>
                            <Route path='orderlist' element={<OrderList/>}/>
                            <Route path='bill' element={<Bill/>}/>
                            <Route path='bill/detail' element={<BillDetail/>}/>
                            <Route path='statistics' element={<Statistics/>}/>
                            <Route path='stockio' element={<StockIo/>}/>
                            <Route path='productregist' element={<ProductRegist/>}/>
                            <Route path='productdelete' element={<ProductDelete/>}/>
                            <Route path='category' element={<Category/>}/>
                            <Route path='standard' element={<Standard/>}/>
                            <Route path='unit' element={<Unit/>}/>
                            <Route path='order' element={<Order/>}/>
                            <Route path='myorderlist' element={<MyOrderList/>}/>
                            <Route path='myorderlist/detail' element={<MyOrderListDetail/>}/>
                            <Route path='refund' element={<Refund/>}/>
                            <Route path='mybill' element={<MyBill/>}/>
                            <Route path='mystatistics' element={<MyStatistics/>}/>
                        </Route>
                    </Route>

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

                    //사원 등록
                    <Route path='/registration' element={<Registration/>}/>
                    <Route path='/registration/registOk' element={<RegistOk/>}/>

                    //계정신청
                    <Route path='/applyM' element={<ApplyMForm/>}/>
                    <Route path='/applyS' element={<ApplySForm/>}/>
                    <Route path='/ApplyOk' element={<ApplyOk/>}/>

                    //계정 비활성화 신청
                    <Route path='/outM' element={<OutMForm/>}/>
                    <Route path='/outS' element={<OutSForm/>}/>
                    <Route path='/OutOk' element={<OutOk/>}/>

                    //계정 안내(메일)
                    <Route path='/Mmail' element={<Mmail/>}/>
                    <Route path='/Smail' element={<Smail/>}/>

              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;