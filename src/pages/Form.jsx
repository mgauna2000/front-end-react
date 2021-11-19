import React, { useState } from "react";

const Form = () => {

  const [form, setForm] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formulario enviado')
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name] : event.target.value
    });
  };

  const handleCheckbox = (event) => {
    setForm({
      ...form,
      [event.target.name] : event.target.checked
    })
  }

  const handleAttachFile = (event) => {
    setForm({
      ...form,
      [event.target.name] : event.target.files
    })
  }
  return (
    <form className="shadow p-4 rounded my-4 mx-5" style={{backgroundColor: '#adb5bd'}}  onSubmit={handleSubmit}>
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
            name="email"
            onChange={handleChange}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos su email con nadie
          </div>
        </div>
        <div className="col">
          <label className="form-label">DNI</label>
          <input
            type="text"
            className="form-control"
            id="exampleEmailAgain"
            name="dni"
            onChange={handleChange}
          />
        </div>
      </div>
      <hr />
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          name="condiciones"
          onChange={handleCheckbox}
        />
        <label className="form-check-label">Condiciones</label>
      </div>
      <hr />
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Seleccione su archivo
        </label>
        <input className="form-control" type="file" id="formFile" name="archivo" onChange={handleAttachFile} />
      </div>
      <hr />
      <select
        defaultValue={"DEFAULT"}
        className="form-select"
        aria-label="Default select example"
        name="pais"
        onChange={handleChange}
      >
        <option value="DEFAULT" disabled>
          Seleccione su Pais
        </option>
        <option value="argentina">Argentina</option>
        <option value="francia">Francia</option>
        <option value="canada">Canada</option>
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