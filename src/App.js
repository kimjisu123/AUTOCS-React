import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./pages/layouts/layout";


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;