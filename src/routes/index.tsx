import React from "react";

import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes";

const Navigations = React.memo(() => {
  return (
    <React.Fragment>
      <PrivateRoutes />
      <PublicRoutes />
    </React.Fragment>
  );
});

export default Navigations;
