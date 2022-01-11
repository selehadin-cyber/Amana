import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import { SliderData } from "./components/ImageData";
import { ImageSlider } from "./components/ImageSlider";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
        <Route path='/Amana' exact element={<ImageSlider slides={SliderData}/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
