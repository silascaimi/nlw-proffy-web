import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
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
      <p>Entusiasta de tecnologias</p>
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
  );
}

export default TeacherItem;
