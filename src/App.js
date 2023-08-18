import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/layout";
import Approval from './pages/approvalPage/Approval'
import Login from "./pages/Login/Login";
import FindId from "./pages/Login/findId";
import FindPwd from "./pages/Login/findPwd";
import FindOk from "./pages/Login/findOk";
import Registration from "./pages/createMember/registration";
import RegistOk from "./pages/createMember/registOk";


function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Layout/>}>
                      <Route path='approval' element={<Approval/>}/>
                  </Route>

                  <Route path='login' element={<Login/>}/>
                  <Route path='/login/findId' element={<FindId/>}/>
                  <Route path='/login/findPwd' element={<FindPwd/>}/>
                  <Route path='/login/findOk' element={<FindOk/>}/>

                  <Route path='/registration' element={<Registration/>}/>
                  <Route path='/registration/registOk' element={<RegistOk/>}/>

              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;