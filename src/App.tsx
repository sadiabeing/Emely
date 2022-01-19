import { Route, Routes } from "react-router-dom";

import Detail from "./pages/private/detail";
import Signup from "./pages/public/auth/signup";

import "./assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/detail" element={<Detail />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Signup />} />
    </Routes>
  );
}

export default App;
