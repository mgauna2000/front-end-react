import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000/">
            Nombre de la Empresa
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;