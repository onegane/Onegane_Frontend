import * as P from "./pages/index";
import * as C from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <C.Header />
        <Routes>
          <Route path="/" element={<P.RendingPage />}></Route>
          <Route path="/view" element={<P.ViewPage />}></Route>
          <Route path="/register" element={<P.RegisterPage />}></Route>
          <Route path="/redirect" element={<P.Redirect />}></Route>
          <Route path="/error" element={<P.Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
