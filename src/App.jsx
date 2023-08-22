import './App.css';
import Auth from './components/auth/Auth';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

function App() {

  const updateToken = newToken => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  return (
    <div className="App">
      <Nav />
      <Footer />
      <Routes>
        <Route
          path='/'
          element={<Auth updateToken={updateToken} />}
          />
        {/* <Route
          path='/rooms'
          element={<Display />}>
        </Route>
        <Route>
          
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
