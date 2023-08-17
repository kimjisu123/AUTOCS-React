import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./pages/layouts/layout";
import Approval from './pages/approvalPage/Approval'
import Stock from './pages/stock/Stock'


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                    <Route path='approval' element={<Approval/>}/>
                    <Route path='stock' element={<Stock/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;