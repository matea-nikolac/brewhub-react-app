import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css';
import Home from './components/Home'
import HotCoffeeIndex from './components/coffee/HotCoffeeIndex'
import IcedCoffeeIndex from './components/coffee/IcedCoffeeIndex'
import HotCoffeeSingle from './components/coffee/HotCoffeeSingle'
import IcedCoffeeSingle from './components/coffee/IcedCoffeeSingle'
import PageNavbar from './components/common/PageNavBar'
import PageNotFound from './components/common/PageNotFound'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <PageNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hot-coffee" element={<HotCoffeeIndex />} />
          <Route path="/iced-coffee" element={<IcedCoffeeIndex />} />
          <Route path="/iced-coffee/:coffeeId" element={<IcedCoffeeSingle />} />
          <Route path="/hot-coffee/:coffeeId" element={<HotCoffeeSingle />} />
          <Route path="*" element = { <PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
