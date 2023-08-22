import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./pages/layouts/layout";
import AppHome from './pages/approvalPage/AppHome'
import Purchase from './pages/approvalPage/Purchase'
import Vacation from './pages/approvalPage/Vacation'
import Traffic from './pages/approvalPage/Traffic'
import Business from './pages/approvalPage/Business'
import Pay from './pages/approvalPage/Pay'


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route path='approval' element={<AppHome/>}/>
                  <Route path='/approval/purchase' element={<Purchase/>}/>
                  <Route path='/approval/vacation' element={<Vacation/>}/>
                  <Route path='/approval/traffic' element={<Traffic/>}/>
                  <Route path='/approval/business' element={<Business/>}/>
                  <Route path='/approval/pay' element={<Pay/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;