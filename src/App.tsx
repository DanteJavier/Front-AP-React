import Footer from "./components/Footer/Footer"
import NavBar from "./components/Navbar/NavBar"
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  return (

    <>
    <ToastContainer/>
    <Router>
      <NavBar/>
        <AppRoutes/>  
      <Footer/>
    </Router>

    </>

  )
}

export default App