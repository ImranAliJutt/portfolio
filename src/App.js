import './App.css';
import MainNavbar from './MainNavbar';
import Header from './Header';
import About from './About';
import TechStack from './TechStack';
import Contact from './Contact';
import Footer from './Footer';
import Project1 from './Project1';
import Project2 from './Project2';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Header /> 
      <TechStack />
      <About  />
      
      <Project1 />
      <Project2 />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
