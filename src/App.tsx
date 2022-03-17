import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import RouterGroup from "./components/particles/routegroup";
import NavBar from "./components/organisms/NavBar/NavBar";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <RouterGroup />
      </BrowserRouter>
    </Provider>
  );
};
export default App;
