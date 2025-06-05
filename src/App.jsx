import Header from './Components/Header'
import Hero from './Components/Hero'
import Shop from './Components/Shop'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { CartProvider } from './Context/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart'

const MainPage = () => (
<>
    <Header />
    <Hero />
    <Shop />
    <About />
    <Contact />
    <Footer />
</>
);

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App