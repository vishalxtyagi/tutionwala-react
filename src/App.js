import HomeScreen from "./components/HomeScreen";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from "./components/Nav";
import Live from "./components/Live";
import Videos from "./components/Videos";
import Notes from "./components/Notes";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return(
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/live' element={<Live />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
