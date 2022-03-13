
import './css/App.css';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './Pages/Login';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Ranks from './Pages/Ranks'
import MyProfile from './Pages/MyProfile';
import SignUp from './Pages/SignUp';
import Trade from './components/Trade';
function App() {

  
    return (
      <Router>
        <div className = "brybit">
          <NavBar/>
            <Routes>
              <Route path = '/' element={<Home/>}/>
              <Route path = '/login' element={<Login/>}/>
              <Route path = '/ranks' element={<Ranks/>}/>
              <Route path = '/myProfile' element={<MyProfile/>}/>
              <Route path = '/signup' element = {<SignUp/>}/>
              <Route path = '/trade' element = {<Trade/>}/>
              <Route path = "*" element={<ErrorPage/>}/>
            </Routes>
          </div>
      </Router>);
  
}

export default App;
