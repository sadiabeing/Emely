import { Provider } from "react-redux";

import { store } from "./redux";
import Navigations from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";

const App = () => {
  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );
};

export default App;
