import { Route, Routes } from "react-router-dom";

import Detail from "../../pages/private/detail";
import Searchig from "../../pages/private/search";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/detail" element={<Detail />} />
      <Route path="/searching" element={<Searchig />} />
    </Routes>
  );
};

export default PrivateRoutes;
