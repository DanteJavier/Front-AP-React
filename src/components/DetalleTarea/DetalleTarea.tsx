import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Task } from "../../types/Task";
import TaskService from "../../services/TaskService";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";


const DetalleTarea = () => {
  const { taskId } = useParams<{ taskId?: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [estado, setEstado] = useState<string>("");
  const [relatedTasks, setRelatedTasks] = useState<Task[]>([]);

  const navigate = useNavigate();//Redirigir al usuario a la pagina principal
  //Obtener la tarea
  useEffect(() => {
    const fetchTask = async () => {
      try {
        if (taskId && !isNaN(parseInt(taskId, 10))) {
          const taskData = await TaskService.getOneTask(parseInt(taskId, 10));
          setTask(taskData);

          const taskByCategory = await TaskService.getTasksByCategory(taskData.estado);
          setRelatedTasks(taskByCategory);
        } else {
          console.error("El id de la tarea no es valido");
        }
      } catch (error) {
        console.error('Error al cargar la tarea', error);
      }
    };

    fetchTask();
  }, [taskId]);

  //Cambiar estado a la tarea
  const handleUpdateTask = async () => {
    if (estado !== "") {
      try {
        const updatedTask = await TaskService.updateStatusTask(parseInt(taskId!, 10), estado);
        //Actualizar el estado de la tarea
        setTask(updatedTask);
        //Mustra notificacion de exito utilizando el componente Toast
        toast.success("Estado de la tarea actualizado correctamente", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      } catch (error) {
        //Manejo de errores de la actualizacion de la tarea
        toast.error('Error al actualizar la tarea', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        console.error('Error al actualizar la tarea', error);
      }
    } else {
      //Si el estado esta vacio, no se actualiza la tarea
      toast.error('Selecciona un estado valido', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.error('Selecciona un estado valido');
    }
  };

  //Eliminar tarea
  const handleDeleteTask = async () => {
    try {
      if (taskId) {
        await TaskService.deleteTask(parseInt(taskId!, 10));
        toast.success("Tarea eliminada correctamente", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        navigate("/");
      }
    } catch (error) {
      toast.error('Error al eliminar la tarea', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.error('Error al eliminar la tarea', error);
    }
  };


  return (
    <div className="conteiner mt-5 mx-3">
      {task && (
        <div className="row">
          <div className="col-md-6 col-12">
            <img src={task.imagen} alt={task.titulo} className="card-img-top mb-5" />
          </div>

          <div className="col-12">
            <h1 className="display-5 fw-bolder"> Titulo: {task.titulo}</h1>
            <h3>Detalles de la tarea con ID: {task.id}</h3>
            <h5>Estado actual: {task.estado}</h5>
            <p className="lead">Tiempo: {task.tiempo} días</p>
            <p className="lead">Responsable: {task.responsable}</p>
            <p className="lead">Descripcion: {task.descripcion}</p>

            <select className="form-select mb-3" onChange={(e)=>setEstado(e.target.value)} value={estado}>
              <option value="">Selecciona un estado</option>
              <option value="PorHacer">Por Hacer</option>
              <option value="EnProduccion">En Producción</option>
              <option value="PorrTestear">Por Testear</option>
              <option value="Completada">Completada</option>
            </select>
            <button className="btn btn-primary" onClick={handleUpdateTask}>Actualizar Estado</button>
            <button className="btn btn-danger" onClick={handleDeleteTask}>Eliminar Tarea</button>
          </div>

        </div>
      )}
      <div className="row mt-5">
        {relatedTasks.map((relatedTasks) => (
          <div className="col-12 col-md-4 mb-4" key={relatedTasks.id}>
            <div className="card">
              <img src={relatedTasks.imagen} alt={relatedTasks.titulo} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{relatedTasks.titulo}</h5>
                <p className="card-text">{relatedTasks.descripcion}</p>
                <p className="card-text">Tiempo: {relatedTasks.tiempo} días</p>
                <p className="card-text">Responsable: {relatedTasks.responsable}</p>

                <Button variant="primary" onClick={() => navigate(`/detalle/${relatedTasks.id}`)}>Ver más</Button>
              </div>
            </div>
          </div>
        ))}

      </div>


    </div>
  )
}

export default DetalleTarea