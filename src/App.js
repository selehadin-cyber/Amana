import { BrowserRouter as HashRouter, Route, Routes} from "react-router-dom"
import './App.css';
import { SliderData } from "./components/ImageData";
import { ImageSlider } from "./components/ImageSlider";
import Navbar from './components/Navbar';
import Aboutus from "./pages/Aboutus";
import Galeri from "./pages/Galeri";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        
        <Routes>
        <Route path='/Amana' exact element={<ImageSlider slides={SliderData}/>} />
        <Route path='/Amana/galeri' element={<Galeri />} />
        <Route path='/Amana/aboutus' element={<Aboutus />} />
        </Routes>

      </HashRouter>
    </>
  );
}

export default App;
