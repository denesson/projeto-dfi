import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ValidacaoCadastro from './ValidacaoCadastro'

function Cadastro(){

    const [value, setValue] = useState({
        email: "",
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
        setError(ValidacaoCadastro(value));
    }

    return(
        <div>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-div">
                        <label htmlFor="name">Nome</label>
                        <input 
                            name="name"
                            onChange={handleInput} 
                            placeholder="Digite seu nome"
                            type="text"
                            className="name"
                        ></input>
                        {error.name && <span className='text-danger'>{error.name}</span>}
                    </div>
                    <div className="form-div">
                        <label htmlFor="email">E-mail</label>
                        <input
                            name="email"
                            onChange={handleInput} 
                            placeholder="Digite seu E-mail"
                            type="email"
                            className="email"
                        ></input>
                        {error.email && <span className='text-danger'>{error.email}</span>}
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
                    <button type="submit">Cadastre-se</button>
                </form>
            </div>
        </div>
    );
};
export default Cadastro;