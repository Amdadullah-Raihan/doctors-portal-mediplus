// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import Doctors from './pages/Doctors';
import './utilities.css'
import Newsletter from './components/Newsletter';
import Services from './pages/Services';
import Appointment from './pages/Appointment';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
            <Route path='/services' element={<Services></Services>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/doctors' element={<Doctors></Doctors>}></Route>
            <Route path='/appointment' element={<Appointment></Appointment>}></Route>

            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
