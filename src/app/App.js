import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import Header from "../widgets/Header/Header";

function App() {
  const basename =
      process.env.NODE_ENV === "development"
          ? ""
          : process.env.REACT_APP_BASENAME || "/";
  return <Router basename={basename}>
    <Header />
    <Routes>
      <Route path="/movie/:id" element={<Detail/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>;
}

export default App;
