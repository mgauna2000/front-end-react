import React from "react";
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="page-footer font-small blue pt-2">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Pie de pagína</h5>
            <p>
            Aquí puede utilizar filas y columnas para organizar el contenido de su pie de página.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3" style={{marginLeft: '110px'}}>
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled ml-5">
              <li>
                <a href="https://www.instagram.com/martin_gauna23/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/martin-gauna-009a68208/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.facebook.com/tino.gauna.10" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://github.com/mgauna2000" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
            </ul>
          </div>

          {/* <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Enlace 1</a>
              </li>
              <li>
                <a href="#!">Enlace 2</a>
              </li>
              <li>
                <a href="#!">Enlace 3</a>
              </li>
              <li>
                <a href="#!">Enlace 4</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
    </footer>
  );
}

export default Footer;
