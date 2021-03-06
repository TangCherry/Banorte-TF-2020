import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import MaskInput from "react-maskinput";

function Loginpass({ render, history, loginPassValue }) {
  const [loginPassDumy, setLoginPassDummy] = useState('')
  loginPassValue(loginPassValue)
    const register = () => {
        history.push("/Register")
    }
    const main = () => {
      history.push("/Main");
    }

    return (
        <div>
            <div className="has-text-centered">
          <h1 className="has-text-weight-medium is-size-3 onboarding-title">
            Tu banca digital
          </h1>
        </div>
        <div className=" has-text-centered is-italic is-size-5">
          <p className="is-inline-block pr-1">Ingresa tu</p>
          <p className="is-inline-block is-pink ">contraseña.</p>
        </div>
        <div className="file is-centered">
        <div className="field input-form">
          <label className="label is-size-6">Contraseña</label>
          <div className="control has-icons-right">
            <input
              className="input"
              type="password"
              placeholder="xxxxxx"
              onChange={e => setLoginPassDummy(e.target.value)}
            />
            <span className="icon is-small is-right fa-red">
              <i className="fas fa-question-circle"></i>
            </span>
          </div>
          <div className="control has-icons-right">
            <div className="file is-centered is-rounded">
              <button 
              className="button is-halfwidth is-danger is-outlined button-login"
              onClick={main}
              >
                Entrar
              </button>
            </div>
          </div>
          <div className="control has-icons-right">
            <div className="file is-centered is-rounded">
              <button 
              className="button is-halfwidth is-danger button-login"
              onClick={register}
              >
                Olvidé mi contraseña
              </button>
            </div>
          </div>
          </div>
          </div>
        </div>
    )
}

export default withRouter(Loginpass)
