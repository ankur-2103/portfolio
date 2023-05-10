import './App.css';
import Connect from './Components/Connect';
import Info from './Components/Info';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer className='info'/>
      <Info className='info'/>
      <Skills className='skills'/>
      <Projects className='projects'/>
      <Connect className='contact'/> 
    </div>
  );
}

export default App;
