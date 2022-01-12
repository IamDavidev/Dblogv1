import styled from 'styled-component';
import React, { useState, useEffect } from 'react';

const StyledForm = styled.footer`
  margin: 4rem 0;
  p {
    margin: 1rem 0;
    padding: 0;
    color: #010920;
    font-weight: bold;
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .info {
      grid-column: 1/2;
      label {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1rem 0;
        p {
          margin: 0;
          padding: 0;
          font-size: 1rem;
          color: #000;
        }
        input {
          border-radius: 1rem;
          background: #6183ab;
          box-shadow: inset 11px 11px 23px #557396,
            inset -11px -11px 23px #6d93c0;
          width: 80%;
          border: none;
          padding: 1rem;
          border-radius: 5px;
          :focus {
            outline: none;
          }
          ::placeholder {
            color: #000;
            opacity: 0.5;
          }
        }
      }
    }
    .message {
      grid-column: 2/3;
      label {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p {
          margin: 0;
          padding: 0;
          font-size: 1rem;
          color: #000;
        }
        textarea {
          border-radius: 1rem;
          background: #6183ab;
          box-shadow: inset 11px 11px 23px #557396,
            inset -11px -11px 23px #6d93c0;
          border: none;
          padding: 0.5rem;
          border-radius: 5px;
          min-width: 300px;
          max-width: 300px;
          min-height: 200px;
          max-height: 200px;
          margin: 0 1rem;
          :focus {
            outline: none;
          }
          ::placeholder {
            color: #000;
            opacity: 0.5;
          }
        }
      }
    }
    .buttonEnv {
      grid-column: 1/3;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        border: none;
        border-radius: 1rem;
        background: #6183ab;
        box-shadow: inset 20px -20px 59px #4e6989, inset -20px 20px 59px #749dcd;
        padding: 1rem;
        color: #910505;
        margin: 1rem 0;
      }
    }
  }
`;

const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleEnv = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <StyledForm>
      <p>
        Aquí podrás contactar conmigo si tienes alguna duda o quieres contribuir
        con algun posts.
      </p>
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleEnv}>
        <div className="info">
          <label>
            <p>Nombre :</p>
            <input
              type="text"
              name="name"
              placeholder="nombre completo"
              onChange={handleChange}
            />
          </label>

          <label>
            <p>Email :</p>
            <input
              type="email"
              name="email"
              placeholder="email "
              onChange={handleChange}
            />
          </label>
          <input
            type="hidden"
            name="form-name"
            value="the-name-of-the-html-form"
          />
        </div>
        <div className="message">
          <label>
            <p>Mensaje :</p>
            <textarea
              name="message"
              placeholder="message ..."
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="buttonEnv">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </StyledForm>
  );
};

export default Form;
