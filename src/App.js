import './App.css';
import Header from './Resources/Header';
import Body from './Resources/Body';
import Footrt from "./Resources/Footrt";
import './porta.css'

const handleFormSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission
};

function App() {
  return (
  <><Header /><Body />
  <Footrt onSubmit={handleFormSubmit} /* other props */ />
  </>
  );
}

export default App;