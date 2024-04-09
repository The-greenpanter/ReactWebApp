import './App.css';
import Header from './Resources/Header';
import Body from './Resources/Body';
import Footrt from "./Resources/footrt";
import './porta.css'

const handleFormSubmission = (formData) => {
  // Handle submitted data here (e.g., send to server, display, etc.)
};

function App() {
  return (
  <><Header /><Body />
  <Footrt onSubmit={handleFormSubmission} /* other props */ />
  </>
  );
}

export default App;