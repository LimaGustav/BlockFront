import React from 'react'
import { useState, useEffect } from "react"
import Header from '../components/Header'
import api from "../services/api"
import { Link } from 'react-router-dom'

import './css/listagemClientes.css'
import editIcon from '../assets/edit.svg'

export default function ListagemClientes() {
    return (
        <div>
            <Header />
            <div className='cl_container_center'>
                <div className='cl_container grid'>
                    <div className='cl_table_head'>
                        <span>Cliente</span>
                        <span>Descricao</span>
                        <span>Status</span>
                        <span>Contato</span>
                    </div>
                    <hr className='cl_hrTitle' />
                </div>

                <div className='cl_container_client grid'>
                    <div className='cl_table_head cl_table_client'>
                        <span className='cl_cliente_text'>SypressTech</span>
                        <p className='cl_descricao_text'>Empresa especializada em desenvolvimento WEB</p>
                        <span className='cl_status_text'>Pendente</span>
                        <span className='cl_contact_text'>11 986574325</span>
                        <Link to='/perfil'><img className='cl_edit' src={editIcon} alt="icone de editar" /></Link>
                    </div>
                    <hr className='cl_hrCliente' />
                </div>
                
                <button type='submit' className='lgn_btn cl_btn'>Testar em massa</button>
            </div>

        </div>
    )
}