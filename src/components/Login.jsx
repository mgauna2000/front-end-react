import React from "react";
import '../styles/Login.css';
import incognito from "../../src/images/incognito.png"

function Login() {
  return (
    <main className="form-signin text-center">
      <form>
        <img
          className="mb-4 rounded-circle"
          src={incognito}
          alt=""
          width="90"
          height="70"
        />
        <h1 className="h3 mb-3 fw-normal">Inicie Sesión</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Direccíon de correo electrónico</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Recuerdame
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Ingresar
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </main>
  );
}

export default Login;
