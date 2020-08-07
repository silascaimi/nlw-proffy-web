import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form action="" id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars0.githubusercontent.com/u/9321996?s=460&u=c12cda58fe7fbce6f4ed73b2a0222aef30e99894&v=4"
              alt="Silas Caimi"
            />
            <div>
              <strong>Silas Caimi</strong>
              <span>Tecnologia</span>
            </div>
          </header>
          <p>Entusiasta</p>
          <br />
          <br />
          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
