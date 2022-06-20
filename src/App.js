import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Register from "./component/Login/Register";
import Login from "./component/Login/Login";
import Reset from "./component/Login/Reset";
import Home from "./component/Home/Home";

function App() {

  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          {/* <FullScreen handle={handle}> */}
          <Route path="home/*" element={<Home />} />

          {/* </FullScreen> */}
          {/* <Route path="dashboard/*" element={<Dashboard />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
