import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';

import zabbixApi from '../services/zabbixApi'


import './css/telaCliente.css'

const Telacliente = () => {
    const [accessZabbix, setAccessZabbix] = useState('');

    function LoginZabbix() {
        const data = {
            jsonrpc: "2.0",
            method: "user.login",
            params: {
                user: "Gustavo",
                password: "zabbix"
            },
            id: 1,
            auth: null
        }
        zabbixApi.post("", data, {}).then(response => {
            console.log(response)
            setAccessZabbix(response.data.result)
        })
    }

    function VerificaSnapshot() {
        const data = {
            jsonrpc: "2.0",
            method: "script.execute",
            params: {
                scriptid: "4",
                hostid: "10084"
            },
            id: 1,
            auth: accessZabbix
        }

        zabbixApi.post("", data, {}).then(resp => {
            console.log(resp)
            console.log(accessZabbix)
        })
    }

    return (
        <div>
            <Header />
            <div className='p_container grid'>

                <div className='p_container_title'>
                    <h1 className='p_title'>SypressTech</h1>
                    <i class="fas fa-edit fa-1x"></i>
                </div>
                <div className='p_container_text'>
                    <p className='p_company_description'>Empresa especializada em desenvolvimento web</p>
                    <div className='p_container_problem'>
                        <p>Problema - Severidade</p>
                        <input readOnly className='p_input' type="text" />
                    </div>
                </div>
                <button onClick={LoginZabbix} type='submit' className='lgn_btn cl_btn p_btn'>Testar</button>
                <button onClick={VerificaSnapshot} type='submit' className='lgn_btn cl_btn p_btn'>verificar</button>
            </div>

        </div>
    );
}

export default Telacliente;
