import { Outlet } from "react-router-dom";
import Home from "./home/Home";
import Nav from "./nav/Nav";

const App = () => {
  return (
    <div>
      <Nav />
     <Outlet/>
    </div>
  );
};

export default App;
