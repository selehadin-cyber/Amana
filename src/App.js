import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import { SliderData } from "./components/ImageData";
import { ImageSlider } from "./components/ImageSlider";
import Navbar from './components/Navbar';
import Aboutus from "./pages/Aboutus";
import Galeri from "./pages/Galeri";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
        <Route path='/Amana' exact element={<ImageSlider slides={SliderData}/>} />
        <Route path='/galeri' element={<Galeri />} />
        <Route path='/aboutus' element={<Aboutus />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
