import logo from './logo.svg';
import './App.css';
import Example from './components/signIn';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/signIn';
import HomeScreen from './components/Navbar';
import Login from './components/logIn';
import Forgot from './components/fogotPassword';
import HomePage from './components/HomePage';
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
function App() {
  return (
    <Router>
   

    <Routes>
      <Route path="/signIn" element={<Signup />} />
      <Route path="/LogIn" element={<Login />} />

      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/forgot" element={<Forgot />} />

    </Routes>
  </Router>
    
  );
}

export default App;
