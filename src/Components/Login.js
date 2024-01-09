import React, { useState } from "react";
import { Link } from "react-router-dom";
import validacaoLogin from './ValidacaoLogin';

function Login(){

    const [value, setValue] = useState({
        name: "",
        password: ""
    })

    const [error, setError] = useState({})

    const handleInput = (event) => {
        event.preventDefault();
        setValue(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(validacaoLogin(value));
    }

    return(
        <div>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-div">
                        <label htmlFor="name">Nome</label>
                        <input 
                            onChange={handleInput}
                            placeholder="Digite seu nome"
                            name="name"
                            type="text"
                            className="Nome"
                        ></input>
                        {error.name && <span className='text-danger'>{error.name}</span>}
                    </div>
                    <div className="form-div">
                        <label htmlFor="password">Senha</label>
                        <input 
                            name="password"
                            onChange={handleInput}
                            placeholder="Digite sua senha"
                            type="password"
                            className="password"
                        ></input>
                        {error.password && <span className='text-danger'>{error.password}</span>}
                    </div>
                    <button type="submit">Entar</button>
                    <Link
                    type="submit"
                    to="/Cadastro" className="">Inscreva-se</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;