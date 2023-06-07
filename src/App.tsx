import * as P from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<P.RendingPage />}></Route>
        <Route path="/view" element={<P.ViewPage />}></Route>
        <Route path="/register" element={<P.RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
