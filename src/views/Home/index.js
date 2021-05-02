import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import * as S from './style'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [filterActived, setFilterActived] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [late, setLate] = useState();

  async function loadTask() {
    api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      .then(response => {
        setTasks(response.data);
      })
  }
  async function lateVerify() {
    api.get(`/task/filter/late/11:11:11:11:11:11`)
      .then(response => {
        setLate(response.data.length);
      })
  }

  function Notification() {
    setFilterActived('late');
  }

  useEffect(() => {
    loadTask();
    lateVerify();
  }, [filterActived])

  return (
    <>

      <S.Container>

        <Header late={late} clickNotification={Notification} />

        <S.FilterArea>
          <button onClick={() => setFilterActived('all')} type="button">
            <FilterCard title="Todos" actived={filterActived == 'all'} />
          </button>

          <button type="button" onClick={() => setFilterActived('today')} >
            <FilterCard title="Hoje" actived={filterActived == 'today'} />
          </button>

          <button type="button" onClick={() => setFilterActived('week')} >
            <FilterCard title="Semana" actived={filterActived == 'week'} />
          </button>

          <button type="button" onClick={() => setFilterActived('month')} >
            <FilterCard title="Mes" actived={filterActived == 'month'} />
          </button>

          <button type="button" onClick={() => setFilterActived('year')} >
            <FilterCard title="Ano" actived={filterActived == 'year'} />
          </button>

        </S.FilterArea>
        <S.Title>
          <h3>{filterActived == 'late' ? 'Tarefas atrasadas' : 'Tarefas'}</h3>
        </S.Title>
        <S.Content>
          {tasks.map(task => (
            <TaskCard type={task.type} title={task.title} when={task.when} />
          ))}
        </S.Content>
        <Footer />
      </S.Container>
    </>
  )
}
