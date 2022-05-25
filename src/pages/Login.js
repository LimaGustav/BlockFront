import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import logo from '../assets/block_logo.png'
import person from '../assets/person_login.png'
import api from "../services/api"

import './css/login.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [erroMessage, setErroMessage] = useState('');

    let navigate = useNavigate()

    const Logar = (event) => {
        event.preventDefault();
        setErroMessage('')
        setIsLoading(true)

        const data = {
            email: email,
            senha: senha
        }
        api.post('/login', data, {})
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('usuario-login', response.data.token)
                    setSenha('')

                    setEmail('')

                    setIsLoading(false)

                    navigate('/clientes')
                }
            }).catch(error => {
                console.log(error)


                setErroMessage("Email ou senha inválidos")

                setIsLoading(false)
                console.log(erroMessage)
            })
    }

    return (
            <div className='lgn'>
                <div className='lgn_container'>
                    <img src={logo} alt="Block time logo" className='lgn_logo' />
                    <form onSubmit={Logar} className='lgn_form'>
                        <div className='lgn_container_inputs'>
                            <label htmlFor="email"></label>
                            <input onChange={campo => setEmail(campo.target.value)} value={email}
                                id='email' type="email" className='lgn_input' placeholder="E-mail" />
                            <label htmlFor="senha"></label>
                            <input onChange={campo => setSenha(campo.target.value)} value={senha}
                                id='senha' type="password" className='lgn_input' placeholder='Senha' />
                        </div>
                            <span className='lgn_erro'>{erroMessage}</span>

                        {isLoading ? <button disabled className='lgn_btn lgn_loading' >Carregando</button> : <button type='submit' className='lgn_btn'>Entrar</button>}
                    </form>
                </div>
                <img className='lgn_image_person' src={person} alt="Image of a person" />
            </div>
    )
}
