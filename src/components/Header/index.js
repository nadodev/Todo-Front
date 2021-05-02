import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './style';
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'
export default function index({ late, clickNotification }) {
  return (
    <S.Container>
      <header>
        <img src={logo} alt="" />
        <nav>
          <Link to="/">Inicio</Link>
          <span className="divider" />
          <Link to="/task">Novo Curso</Link>
          <span className="divider" />
          <Link to="/">Sincronizar</Link>
          <span className="divider" />
          <button type="button" id="notification" onClick={clickNotification}>
            <img src={bell} alt="notificacao" />
            <span>{late}</span>
          </button>
        </nav>
      </header>
    </S.Container>
  )
}
