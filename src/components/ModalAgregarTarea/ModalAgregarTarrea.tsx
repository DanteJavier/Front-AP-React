import { Task } from "../../types/Task";
import { useFormik } from "formik";
import { Modal, Form, Button } from "react-bootstrap";
import * as Yup from "yup";


type ModalAgregarTareaProps = {
    showModal: boolean;
    handleClose: () => void;
    createTask: (newTask: Task) => void;
};

const ModalAgregarTarea: React.FC<ModalAgregarTareaProps> = ({showModal, handleClose, createTask}) => {
    const validationSchema = Yup.object({
        titulo: Yup.string().required("El titulo es requerido"),
        descripcion: Yup.string().required("La descripcion es requerida"),
        tiempo: Yup.number().required("El tiempo es requerido").integer('El tiempo debe ser un numero entero').positive('El tiempo debe ser mayor a 0'),
        responsable: Yup.string().required("El responsable es requerido"),
        imagen: Yup.string().required("La imagen es requerida"),
        estado: Yup.string().required("El estado es requerido"),
    });

    const formik = useFormik({
        initialValues: {
            titulo: "",
            descripcion: "",
            tiempo: 0,
            responsable: "",
            imagen: "",
            estado: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            values.estado.toUpperCase();

            await createTask(values);
            handleClose();
        },
    });

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar tarea</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                
                <Form onSubmit={formik.handleSubmit}>

                    {/* titulo */}
                    <div className="mb-3 mt-1">
                        <label htmlFor="titulo" className="form-label">Titulo</label>
                        <input type="text" className="form-control"
                        id="titulo" 
                        name="titulo" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.titulo} />
                        {formik.touched.titulo && formik.errors.titulo ? (
                            <div className="text-danger">{formik.errors.titulo}</div>
                        ) : null}
                    </div>
                        
                    {/* descripcion */}
                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripcion</label>
                        <textarea className="form-control"
                        id="descripcion" 
                        name="descripcion" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.descripcion}
                        rows={3}
                        cols={50} />
                        {formik.touched.descripcion && formik.errors.descripcion ? (
                            <div className="text-danger">{formik.errors.descripcion}</div>
                        ) : null}
                    </div>
                        
                    {/* tiempo */}
                    <div className="mb-3">
                        <label htmlFor="tiempo" className="form-label">Tiempo</label>
                        <input type="number" className="form-control"
                        id="tiempo" 
                        name="tiempo" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tiempo} 
                        placeholder="Ej: 30 días"/>
                        {formik.touched.tiempo && formik.errors.tiempo ? (
                            <div className="text-danger">{formik.errors.tiempo}</div>
                        ) : null}
                    </div>

                    {/* responsable */}
                    <div className="mb-3">
                        <label htmlFor="responsable" className="form-label">Responsable</label>
                        <input type="text" className="form-control"
                        id="responsable" 
                        name="responsable" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.responsable} />
                        {formik.touched.responsable && formik.errors.responsable ? (
                            <div className="text-danger">{formik.errors.responsable}</div>
                        ) : null}
                    </div>

                    {/* imagen */}
                    <div className="mb-3">
                        <label htmlFor="imagen" className="form-label">Imagen</label>
                        <input type="text" className="form-control"
                        id="imagen" 
                        name="imagen" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.imagen} />
                        {formik.touched.imagen && formik.errors.imagen ? (
                            <div className="text-danger">{formik.errors.imagen}</div>
                        ) : null}
                    </div>

                    {/* estado */}
                    <div className="mb-3">
                        <label htmlFor="estado" className="form-label">Estado</label>

                        <Form.Select 
                        id="estado" 
                        name="estado" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.estado}>

                        <option value="PorHacer">Por hacer</option>
                        <option value="EnProduccion">En producción</option>
                        <option value="PorTestear">Por testear</option>
                        <option value="Completada">Completada</option>
                        </Form.Select>
                        {formik.touched.estado && formik.errors.estado ? (
                            <div className="text-danger">{formik.errors.estado}</div>
                        ) : null}
                    </div>

                    <div className="d-flex justify-content-end">
                        <Button type="submit" className="btn btn-primary">Agregar</Button>
                    </div>



                </Form>
                
            </Modal.Body>





        </Modal>

    );
};

export default ModalAgregarTarea;