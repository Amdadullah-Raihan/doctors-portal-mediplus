// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Doctors from './pages/Doctors/Doctors';
import './utilities.css'
import Newsletter from './pages/Home/Newsletter';
import Services from './pages/Services/Services';
import Appointment from './pages/Appointment/Appointment';
import CardiacClinic from './pages/Home/Diagnosis/CardiacClinic';
import Nurology from './pages/Home/Diagnosis/Nurology';
import Dentistry from './pages/Home/Diagnosis/Dentistry';
import Gastroenterology from './pages/Home/Diagnosis/Gastroenterology';
import Orthopedagogy from './pages/Home/Diagnosis/Orthopedagogy';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import About from './pages/AboutPage/About';
import ServiceDetails from './pages/Services/ServiceDetails';
import ServiceProvider from './context/ServiceProvider';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ServiceProvider>
          <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route exact path='/' element={<Home></Home>}>
                <Route path='/' element={<CardiacClinic></CardiacClinic>}></Route>
                <Route path='link-1' element={<CardiacClinic></CardiacClinic>}></Route>
                <Route path='link-2' element={<Nurology></Nurology>}></Route>
                <Route path='link-3' element={<Dentistry></Dentistry>}></Route>
                <Route path='link-4' element={<Gastroenterology></Gastroenterology>}></Route>
                <Route path='link-5' element={<Orthopedagogy></Orthopedagogy>}></Route>
              </Route>
              <Route path='/home' element={<Home></Home>}></Route>
              <Route path='/services' element={<Services></Services>}></Route>
              <Route path='/service/:id' element={<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>
              <Route path='/doctors' element={<Doctors></Doctors>}></Route>
              <Route path='/appointment' element={<PrivateRoute><Appointment></Appointment></PrivateRoute>}></Route>
              <Route path='/about-us' element={<About></About>}></Route>

              <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
            <Newsletter></Newsletter>
            <Footer></Footer>
          </BrowserRouter>
        </ServiceProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
