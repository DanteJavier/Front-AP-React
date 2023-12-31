
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Task } from "../../types/Task";
import TaskService from "../../services/TaskService";
import { toast } from "react-toastify";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarrea";
import { useState } from "react";



const NavBar =() => {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


  //Agregar tarea
  const createTask = async (newTask: Task) => {
    try {
      const result = await TaskService.createTask(newTask);
      console.log('Nueva tarea agregada: ',result.id);
      navigate(`/detalle/${result.id}`);// Ir al detalle de la tarea creada

      //Muestra notificacion de tarea creada exitosamente
      toast.success('Tarea creada exitosamente', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,//Cierra la notificacion automaticamente despues de 3 segundos
      });
    } catch (error) {
      //Muestra notificacion de error al crear tarea
      toast.error('Error al crear tarea', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,//Cierra la notificacion automaticamente despues de 3 segundos
      });
      console.log('Error al crear la atrea', error);
    }
  };

  return (
    <>    
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand onClick={()=>navigate('/')}>Desarrollo en Argentina</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link onClick={()=>navigate('/')}>Inicio</Nav.Link>
          <NavDropdown title="Tareas" id="navbarScrollingDropdown">
            <NavDropdown.Item >Por Hacer</NavDropdown.Item>
            <NavDropdown.Item >En Producción</NavDropdown.Item>
            <NavDropdown.Item >Por Testear</NavDropdown.Item>
            <NavDropdown.Item >Completada</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link onClick={handleShowModal}>Nueva Tarea</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <ModalAgregarTarea showModal={showModal} handleClose={handleCloseModal} createTask={createTask}/>
  
  </>
);
}

export default NavBar