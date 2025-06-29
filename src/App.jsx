import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Service from './Pages/Service/service';
import About from './Pages/About/about';
import Resume from './Pages/Resume/resume';
import Projects from './Pages/Projects/projects';
import ContactUs from './Pages/ContectUs/contectus';
import Navbar from './Component/Navbar';
import Footer from './Component/footer';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
