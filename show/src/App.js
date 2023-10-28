import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Games } from "./components/Games";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import firebase from './firebaseConfig';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Games />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
