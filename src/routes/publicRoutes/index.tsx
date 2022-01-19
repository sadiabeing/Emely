import { Route, Routes } from "react-router-dom";

import Signup from "../../pages/public/auth/signup";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default PublicRoutes;
