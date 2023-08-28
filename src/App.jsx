import './App.css';
import Auth from './components/auth/Auth';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import RoomDisplay from './components/room/RoomIndex';
/* import MessageDisplay from './components/message/MessageDisplay'; */
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';

function App() {

  const [sessionToken, setSessionToken ] = useState('');

  const updateToken = newToken => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  },[])

  return (
    <div className="App">
      <Nav />
      <Footer />
      <Routes>
{/*         <Route
          path='/'
          element={<Auth updateToken={updateToken} />}
          /> */}
        <Route
          path='/login'
          element={<Login updateToken={updateToken} />}
          />
        <Route
          path='/signup'
          element={<Signup updateToken={updateToken} />}
          />
        <Route
          path='/room'
          element={<RoomDisplay token={sessionToken} />}>
        </Route>
{/*         <Route
          path='/message'
          element={<MessageDisplay token={sessionToken} />}>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
