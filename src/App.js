import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/layout";
import Approval from './pages/approvalPage/Approval'
import Login from "./pages/Login/Login";
import FindId from "./pages/Login/findId";
import FindPwd from "./pages/Login/findPwd";
import FindOk from "./pages/Login/findOk";
import Registration from "./pages/createMember/registration";
import RegistOk from "./pages/createMember/registOk";
import ApplyMForm from "./pages/applyForm/applyMForm";
import ApplyOk from "./pages/applyForm/applyOk";
import LoginLayout from "./pages/layouts/LoginLayout";
import Stock from './pages/stock/Stock'
import Category from "./pages/stock/Category";
import Check from "./pages/stock/Check";
import Product from "./pages/stock/Product";



function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path='/login' element={<LoginLayout/>}>
              <Route path='/login' element={<Login/>}/>
              </Route>

              <Route path='/' element={<Layout/>}>
                    <Route path='approval' element={<Approval/>}/>

                    <Route path='/stock' element={<Stock/>}>
                        <Route path='check' element={<Check/>}/>
                        <Route path='category' element={<Category/>}/>
                        <Route path='product' element={<Product/>}/>
                    </Route>
              </Route>


          </Routes>
        </BrowserRouter>
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

                  <Route path='/ApplyM' element={<ApplyMForm/>}/>
                  <Route path='/ApplyOk' element={<ApplyOk/>}/>

              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;