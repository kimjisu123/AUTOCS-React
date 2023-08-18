import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Approval from './pages/approvalPage/Approval'
import Login from "./pages/Login/Login";
import LoginLayout from "./layouts/LoginLayout";
import Mypage from "./pages/Mypage/Mypage";
import Todos from "./pages/Todolist/components/Todos";


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path='/login' element={<LoginLayout/>}>
              <Route path='/login' element={<Login/>}/>
              </Route>
              <Route path='/todo' element={<Todos />}/>
              <Route path='/' element={<Layout/>}>
                    <Route path='approval' element={<Approval/>}/>
                    <Route path='myPage' element={<Mypage/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;