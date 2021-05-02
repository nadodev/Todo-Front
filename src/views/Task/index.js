import React, { useState, useEffect } from 'react'
import * as S from './style'
import { ToastContainer, toast } from 'react-toastify';
import api from '../../services/api'
/* components */
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import typeIcons from '../../utils/typeIcons'
import iconCalendar from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'
import { BrowserRouter as Redirect } from 'react-router-dom'
export default function Task() {
  const [late, setLate] = useState();
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacAddress] = useState('11:11:11:11:11:11');
  async function lateVerify() {
    api.get(`/task/filter/late/11:11:11:11:11:11`)
      .then(response => {
        setLate(response.data.length);
      })
  }
  async function Save() {
    await api.post('/task', {
      macaddress,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000`
    }).then(() => {
      toast.success('Cadastrado Com sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    })
  }
  useEffect(() => {
    lateVerify();
  }, [])

  return (
    <S.Task>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header late={late} />
      <S.Form>
        <S.TypeIcons>
          {
            typeIcons.map((icon, index) => (
              index > 0 &&
              <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="tipo da tarefa" className={type && type != index && 'inative'} />
              </button>
            ))
          }
        </S.TypeIcons>
        <S.Input>
          <span>Titulo</span>
          <input type="text" placeholder="Titulo da Tarefa" onChange={(e) => setTitle(e.target.value)} value={title} />
        </S.Input>
        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={5} placeholder="Detalhe da tarefa" onChange={(e) => setDescription(e.target.value)} value={description} />
        </S.TextArea>
        <S.Input>
          <span>Data</span>
          <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
          <img src={iconCalendar} alt="" />
        </S.Input>
        <S.Input>
          <span>Hora</span>
          <input type="time" onChange={(e) => setHour(e.target.value)} value={hour} />
          <img src={iconClock} alt="" />
        </S.Input>
        <S.Options>
          <div>
            <input type="checkbox" onChange={(e) => setDone(e.target.value)} />
            <span>CONCLUIDO</span>
          </div>
          <button type="button">Excluir</button>
        </S.Options>
        <S.Save>
          <button type="button" onClick={Save}>
            Salvar
          </button>
        </S.Save>
      </S.Form>
      <Footer />
    </S.Task>
  )
}
