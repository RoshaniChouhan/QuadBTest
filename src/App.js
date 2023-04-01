import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
// Components
import Navbar from './components/Navbar';
// Pages

import Homepage from "./pages/HomePage";
import Aboutpage from "./pages/AboutPage";
import Singlepage from "./pages/SinglePage";
function App() {
  return (
    <Router>
      <Navbar/>

            {/* navbar */}
      <div className="cantainer">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/singleshow/:id" element={<Singlepage/>}/>
        </Routes>
           {/* HomeRoute */}
      {/* Aboutpage */}
      {/* React app */}
      {/* Single detail page */}
      </div>

   
    </Router>
  );
}

export default App;
