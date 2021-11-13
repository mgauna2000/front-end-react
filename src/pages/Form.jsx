import React, { useState } from "react";

const Form = () => {

  const [data, setData] = useState({
    nombre: '',
    apellido: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('enviando datos...' + data.nombre + ' ' + data.apellido);
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    });
  };

  return (
    <form className="shadow p-4 rounded my-4 mx-5 " onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Ingrese su nombre</label>
          <input
            type="text"
            onChange={handleChange}
            name="nombre"
            className="form-control"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <label className="form-label">Ingrese su apellido</label>
          <input type="text" onChange={handleChange} name="apellido" className="form-control" aria-label="Last name" />
        </div>
      </div>
      <hr />
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Ingrese su Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos su email con nadie
          </div>
        </div>
        <div className="col mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </div>
      <hr />
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label">Condiciones</label>
      </div>
      <hr />
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Seleccione su archivo
        </label>
        <input className="form-control" type="file" id="formFile" />
      </div>
      <hr />
      <select
        defaultValue={"DEFAULT"}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="DEFAULT" disabled>
          Seleccione su Pais
        </option>
        <option value="1">Argentina</option>
        <option value="2">Francia</option>
        <option value="3">Canada</option>
      </select>
      <hr />
      <div className="text-center">
      <button type="submit" className="btn btn-primary mt-3 text-center">
        Enviar
      </button>
      </div>
    </form>
  );
};

export default Form;