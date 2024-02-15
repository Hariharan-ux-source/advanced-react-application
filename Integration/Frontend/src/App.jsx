import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import LoginPage from './Components/LoginPage';
import MainPage from './Components/MainPage';
 import Navbar from './Components/Navbar';
import Birthday from './Components/Birthday'
import Apply from "./Components/Apply";
 import Wed from "./Components/Wed"
import Gender from "./Components/Gender"
import Admin from './Components/Admin';
import EventThemes from './Components/Themes';
import AdminLogin from './Components/AdminLogin';
import Venue from './Components/Venue';
import About from './Components/About';
import App1 from './Components/App1';
import Useredit from './Components/Useredit';
// import StarRating from './Components/StarRating';

 

const App = () => {
  return (
    <Router>
       <Routes>
          <Route path="/register" element={<Register />} />
         <Route path="/" element={<LoginPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/main" element={<MainPage />} />
         <Route path="/nav" element={<Navbar />} /> 
         <Route path="/Useredit" element={<Useredit/>} /> 

         <Route path="/birth" element={<Birthday />} />
         <Route path="/wed" element={<Wed />} />
         <Route path="/appy" element={<Apply />} />
         <Route path="/gend" element={<Gender/>} />
         <Route path="/admin" element={<Admin/>} />
         <Route path="/theme" element={<EventThemes/>} />
         <Route path="/admmm" element={<AdminLogin/>} />
         <Route path="/venue" element={<Venue/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/slider" element={<App1/>} />
        

         
         





       </Routes>
     </Router>

    
  );
};

export default App;