import React from 'react';
import { useState } from 'react';
// import Contact from './Components/Contact';
import Contact from './Components/Contact';
import Fnavbar from './Components/Fnavbar';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import Menu from './Components/Menu';
// import LoginPage from './Components/LoginPage';


function App() {
  const [isLogged, setisLogged] = useState(false);
  const checkLogged=(message)=>{
    setisLogged(message);
  };
  
  return (
    <div>
      
      {/* <LoginPage/> */}
      {/* <Fnavbar/>
      <Menu/>
      <Home/>
      <Contact/> */}
      {!isLogged ? (
        <LoginPage checkLogged={checkLogged} />
      ) : (
          <>
              <Fnavbar />
              <Menu />
              <Home />
              <Contact />
          </>
        )}
      
    </div>
  );
}

export default App;
