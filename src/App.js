import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./pages/layouts/layout";
import Approval from './pages/approvalPage/Approval'


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                    <Route path='approval' element={<Approval/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;