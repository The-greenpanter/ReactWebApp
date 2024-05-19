import Header from './Resources/Header.tsx';
import Body from './Resources/Body.tsx';
import Footrt from "./Resources/Footrt.tsx";
import React from 'react';
import "./js/efectos.js"
import '@fortawesome/fontawesome-free/css/all.min.css';
import FinalSection from './Resources/finalSection.tsx';
// import "./js/jqueryD-3.6.1.js"
// import "./js/jquery-3.6.1.min.js"


function App() {
  return (
  <><Header/>
  <Body/>
  <Footrt /> 
  <FinalSection/> 
   </>
  );
}



export default App;