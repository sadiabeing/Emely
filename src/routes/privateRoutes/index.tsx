import { Route, Routes } from "react-router-dom";

import Detail from "../../pages/private/detail";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default PrivateRoutes;
