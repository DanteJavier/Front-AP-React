import { BsBookmarkCheck, BsCheck, BsGear, BsPencilSquare } from 'react-icons/bs'

interface CategoriasSelectorProps {
  onSelectedCategory: (categoria: string) => void
}


const CategoriasSelector: React.FC<CategoriasSelectorProps> = ({onSelectedCategory}) => {
  const categorias = [
    {nombre:'PorHacer', icono:<BsCheck/>},
    {nombre:'EnProduccion', icono:<BsGear/>},
    {nombre:'PorTestear', icono:<BsPencilSquare/>},
    {nombre:'Completada', icono:<BsBookmarkCheck/>},
  ];

  return (
    <section className="container mt-3" id="selector-categorias">
      <p className="fs-3">Seleccione una categoría</p>
      <div className='row gap-4'>
        {categorias.map((categoria, index) => (
          <div className="col d flex justify-content-center p-0" key={index}>
            <button
            onClick={()=> onSelectedCategory(categoria.nombre)} 
            className='border border-1 border-black d-flex gap-1 aling-items-center rounded p-1 text-decoration-none'
            style={{cursor:'pointer'}}>
              {categoria.icono}{categoria.nombre}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
export default CategoriasSelector