import { Task } from "../../types/Task";
import {Link} from 'react-router-dom';


  const CategoriasTareas = ({tasks}:{tasks:Task[]}) => {
  const categorias = ['PorHacer', 'EnProduccion', 'PorTestear', 'Completada'];

  return (
    <section className="conteiner-fluid mt-5" id="categorias">
      {categorias.map((categoria, index) => (
        <section className="text-center mb-5" key={index}>
          <h3 className="display-6">{categoria}</h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-4">
            {tasks.filter(tasks => tasks.estado.toUpperCase() === categoria.toUpperCase())
            .map(task => (
              <div className="col mx-1" key={task.id}>
                <div className="card h-100">
                  <img style={{minHeight:'300px', maxHeight: '300px'}} className="card-img-top" src={task.imagen} alt={task.titulo} />
                  <div className="card-body p-4">
                    <div className="d-flex flex-column align-items-center">
                      <h5 className="card-title">{task.titulo}</h5>
                      <span>{`Tiempo: ${task.tiempo} días`}</span>
                      <span>{`Responsable: ${task.responsable}`}</span>
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-trasparent">
                    <div className="text-center d-flex gap-1 aling-items-center justify-content-center">
                      <Link to={`/detalle/${task.id}`} className="btn btn-outline-secondary mt-auto">Ver más</Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </section>
  )
}

export default CategoriasTareas