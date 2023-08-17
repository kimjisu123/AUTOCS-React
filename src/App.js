import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/layout";
import Approval from './pages/approvalPage/Approval'
import Login from "./pages/Login/Login";
import LoginLayout from "./pages/layouts/LoginLayout";


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
              </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;