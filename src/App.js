import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/layout";
import Approval from './pages/approvalPage/Approval'
import Login from "./pages/Login/Login";
import FindId from "./pages/Login/findId";
import FindPwd from "./pages/Login/findPwd";
import FindIdOk from "./pages/Login/findIdOk";
import FindPwdOk from "./pages/Login/findPwdOk";
import Registration from "./pages/createMember/registration";
import RegistOk from "./pages/createMember/registOk";
import ApplyMForm from "./pages/applyForm/applyMForm";
import ApplySForm from "./pages/applyForm/applySForm";
import ApplyOk from "./pages/applyForm/applyOk";
import GuideId from "./pages/Login/guideId";
import GuidePwd from "./pages/Login/guidePwd";
import OutMForm from "./pages/outForm/outMForm";
import OutOk from "./pages/outForm/outOk";
import OutSForm from "./pages/outForm/outSForm";


function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Layout/>}>
                      <Route path='approval' element={<Approval/>}/>
                  </Route>

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

              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;