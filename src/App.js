import logo from './logo.svg';
import './App.css';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import './App.css';
import HomePage from './pages/home';
import Header from './components/Header';
import About from './pages/about';
import Purchase from './pages/purchase';
import Contact from './pages/contact';


function App() {
  return (
    <Router forceRefresh={true}>
    <Header />
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About />}/> 
        <Route path="/purchase" element={<Purchase />}/>
        <Route path="/contact" element={<Contact />}/>

      </Routes>
    </Router>
  )
}

export default App;
