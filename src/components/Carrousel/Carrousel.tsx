import { Carousel } from "react-bootstrap";
import './Carrousel.css'

const Carrousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src="/assets/img/IA.jpeg" alt="ia" />
          <Carousel.Caption>
            <h3>Desarrollo en Argentina</h3>
            <p>Controla tus tareas de forma ordenada</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/assets/img/Buho.png" alt="" />
          <Carousel.Caption>
            <h3>Desarrollo en Argentina</h3>
            <p>Que tu trabajo sea eficiente</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/assets/img/seguridad-informatica-scaled.jpeg" alt="" />
          <Carousel.Caption>
            <h3>Desarrollo en Argentina</h3>
            <p>Mejora enormemente tu productividad con esta aplicación</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel;
