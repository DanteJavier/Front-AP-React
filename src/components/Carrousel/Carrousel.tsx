import { Carousel } from "react-bootstrap";
import './Carrousel.css'

const Carrousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src="/assets/img/IA.jpeg" alt="ia" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/assets/img/Buho.png" alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/assets/img/seguridad-informatica-scaled.jpeg" alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel;
