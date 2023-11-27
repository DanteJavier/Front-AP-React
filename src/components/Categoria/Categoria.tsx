import { useEffect, useState } from "react";
import { Task } from "../../types/Task";
import CategoriasSelector from "../CategoriasSelector/CategoriasSelector";
import CategoriasTareas from "../CategoriasTareas/CategoriasTareas";
import TaskService from "../../services/TaskService";

const Categoria = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    };
    fetchTasks();
  },[]);
  
//Filtrar tareas por categoría seleccionada

const filteredTasks = selectedCategory
? tasks.filter((task) => task.estado.toUpperCase() === selectedCategory.toUpperCase())
: tasks;

  return (
    <div className="conteiner mt-5 mx-1">
      <CategoriasSelector onSelectedCategory={setSelectedCategory}/>{/*Pasa la funcion para manejar la seleccion de categorias*/}
      <CategoriasTareas tasks={filteredTasks}/>{/*Pasa las tareas filtradas por categorias*/}
    </div>
  )
}

export default Categoria