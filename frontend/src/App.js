import Login from "./components/Login";
import Register from "./components/Register";
import Dashbord from "./components/Dashbord";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  const DashbordView=()=>(

    <div>
      <Navbar/>
      <Dashbord/>
    </div>
  )
  return (
    <>
     <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashbord" element={<DashbordView/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
