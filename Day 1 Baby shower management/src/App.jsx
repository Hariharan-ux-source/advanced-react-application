import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Components/Loginpage';
import Register from './Components/Register';
import LoginPage from './Components/Loginpage';
import MainPage from './Components/MainPage';



const App = () => {
  return (
    <Router>
      
        <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/Register" element={<Register/>} />
      {/* <Route path="/Register"  element={<Register/>}/> */}
      <Route path="/MainPage" element={<MainPage/>} />
     
      </Routes>
      
      
      
    </Router>
  );
};

export default App;