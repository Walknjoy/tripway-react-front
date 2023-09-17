import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import BackToTop from './Components/BackToTop/BackToTop';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
