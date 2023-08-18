import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/layout";
import Approval from './pages/approvalPage/Approval'
import Login from "./pages/Login/Login";
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
      </>
  );
}

export default App;