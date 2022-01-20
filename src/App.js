import { BrowserRouter as HashRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Footer from "./components/Footer";
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
        <Route path='/' exact element={<ImageSlider slides={SliderData}/>} />
        <Route path='/galeri' element={<Galeri />} />
        <Route path='/aboutus' element={<Aboutus />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
