import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  console.log(process.env.NODE_ENV);
  const basename = process.env.NODE_ENV === 'production' ? '/react-movie' : '/';
  console.info("basename" + basename)
  return <Router basename={basename}>
    <Routes>
      <Route path="/movie/:id" element={<Detail/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>;
}

export default App;