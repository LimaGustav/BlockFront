import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';

import './css/administrador.css'

import admEdit from '../assets/adm_edit.svg'
import admDelete from '../assets/adm_delete.svg'
import api from '../services/api';

const Administrador = () => {
    const [colaboradores, setColaboradores] = useState([]);
    const [colaboradorId, setColaboradorId] = useState(0);
    const [msgDelete, setMsgDelete] = useState('');

    function BuscarColaboradores() {
        api.get("/Usuarios").then(response => {
            if (response.status === 200) {
                setColaboradores(response.data)
            }
            console.log(response.data)
        }).catch(erro => console.log(erro))
    }

    function Delete(id) {
        api.delete(`/Usuarios/${id}`).then(response => {
            if (response.status === 204) {
                setMsgDelete('Usuário deletado com sucesso.')
            }
        }).then(BuscarColaboradores)
        
    }

    useEffect(BuscarColaboradores, [])

    return (
        <div className='container_adm_page'>
            <Header></Header>

            <div className="grid adm_btn_container">
                <button className="lgn_btn adm_btn">Novo Usuário</button>
            </div>

            <div className='cl_container grid'>
                <div className='cl_table_head adm_table_head'>
                    <span>Nome</span>
                    <span>Tipo</span>
                    <span>E-mail</span>
                </div>
                <hr className='cl_hrTitle' />
            </div>

            {colaboradores.map(colaborador => {
                return (
                    <div className='cl_container_client grid'>
                        <div className='cl_table_head cl_table_client adm_table_user'>
                            <span className='cl_cliente_text'>{colaborador.nome}</span>
                            <p className='cl_descricao_text adm_tipo_text'>{colaborador.idTipoUsuarioNavigation.titulo}</p>
                            <span className='cl_status_text'>{colaborador.email}</span>
                            <div className="adm_icon_container">
                                <img className='pointer' src={admEdit} alt="icone de editar usuário" />
                                <img onClick={() => setColaboradorId(colaborador.id)} className="pointer" src={admDelete} alt="icone de deletars usuário" />
                            </div>
                        </div>
                        <hr className='cl_hrCliente' />
                    </div>
                )
            })}
        </div>
    );
}

export default Administrador;
