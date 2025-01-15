import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import wim2 from './img/wimg.png'

function Home() {
  return (
    <section>
      <Container id="home">
        <Container className="home-content">
          <Row>
            
            {/* <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AGUSTIN BORIO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          
            <p className="envianos">Envianos un Whatsapp</p>
            <p className="para">Para crear tu cuenta</p>
            <div className="botonw1">
  <button className="botonw">
    <a
      className="colorbo"
      href="https://wa.link/4476ir" //colocar aca el link
      target="_blank"
      rel="noopener noreferrer"
    >
      CREA TU USUARIO
    </a><img
    src={wim2} 
    alt="WhatsApp"
  />
  </button>
</div>

            <p className="minimo">Minimio de carga: $1000</p>
            <h3 className="retiros">
              RETIROS TOTALES
              <br></br>
              AL INSTANTE
              <br></br>
              LA MEJOR ATENCION
            </h3>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;


