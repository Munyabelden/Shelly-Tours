import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/about" component={<About />} />
          <Route path="/contact" component={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
