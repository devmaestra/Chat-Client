import './App.css';
import Auth from './components/auth/Auth';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

function App() {

  const [ sessionToken, setSessionToken ] = useState('');
  
  console.log('Token: ', sessionToken)

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
        <Route
          path='/'
          element={<Auth updateToken={updateToken} />}
        />
        <Route
          path='/signup'
          element={<Auth updateToken={updateToken} />}
        />
        <Route
          path='/rooms'
          element={<Auth updateToken={updateToken} />}
        />
      </Routes>
    </div>
  );
}

export default App;