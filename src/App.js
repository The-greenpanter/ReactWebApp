import './App.css';
import Header from './Resources/Header';
import Body from './Resources/Body.tsx';
import Footrt from "./Resources/Footrt.tsx";
import './sassmainpage/output.css'
import FinalSection from './Resources/finalSection.js';


function App() {
  return (
  <><Header /><Body />
  <Footrt  /* other props */ />
  {/* <FinalSection />   */}
   </>
  );
}

export default App;