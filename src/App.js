
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Components/Home/Home';
import Container from './Components/Containers/Container';
import FandT from './Components/FandT/FandT';
import Cards from './Components/Cards/Cards';
import Buttons from './Components/Buttons/Buttons';
import Classes from './Components/Classes/Classes';
import Footer from './Pages/Footer';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/containers" element={<Container />} />
        <Route path="/formstables" element={<FandT />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>

     <Footer/>

    </>
  );
}

export default App;


