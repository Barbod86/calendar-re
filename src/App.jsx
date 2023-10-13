import "./css/App.css";
import Navbar from "./Navbar";
import Age from "./pages/Age";
import Year from "./pages/Year-difference";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar-difference";
import About from "./pages/About";


export default function App() {
  let component 
  switch (window.location.pathname) {
    case "/":
    component = <Home />
      break
      case "/Age":
    component = <Age />
      break
      case "/Year-difference":
    component = <Year />
      break
      case "/Calendar-difference":
    component = <Calendar />
      break  
      case "/About":
    component = <About />
      break  
  }
  return( 
  <>
    <Navbar />
    {component}
  </>
  )
}