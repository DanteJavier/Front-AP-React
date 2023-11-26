import Footer from "./components/Footer/Footer"
import NavBar from "./components/Navbar/NavBar"
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"




const App = () => {
  return (

    <>
    
    <Router>
      <NavBar/>
        <AppRoutes/>  
      <Footer/>
    </Router>

    </>

  )
}

export default App