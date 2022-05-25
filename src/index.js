import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router,Routes, Route, Link, Switch, Navigate} from 'react-router-dom'

import {usuarioAutenticado, parseJwt} from "./services/auth"

import Login from './pages/Login';
import ListagemClientes from './pages/ListagemClientes';
import TelaCliente from './pages/TelaCliente';
import Administrador from './pages/Administrador'



const routing = (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route path="/clientes" element={usuarioAutenticado() ? <ListagemClientes/> : <Navigate to='/'/>}></Route>
        <Route path="/perfil" element={usuarioAutenticado() ? <TelaCliente /> : <Navigate to='/'/>}></Route>
        <Route path="/administrador" element={usuarioAutenticado() && parseJwt().role == 2 ? <Administrador /> : <Navigate to='/'/>}></Route>
      </Routes>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
