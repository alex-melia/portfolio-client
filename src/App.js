import { Routes, Route } from 'react-router-dom';
import './css/App.css';

// COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// PAGES
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
