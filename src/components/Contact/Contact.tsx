"use client"
import React, { useEffect, useState } from 'react';
import {ChangeEvent, FormEvent} from 'react';
import styles from './Contact.module.css';

function Contact() {
  const initialFields = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  }
  const [fields, setFields] = useState(initialFields);
  const [disableBtn, setDisableBtn] = useState(true)

  const verifyFields = () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const validationEmail = emailRegex.test(fields.email);
    validationEmail ? setDisableBtn(false) : setDisableBtn(true);
  }

  useEffect(() => {
    verifyFields();
  }, [fields]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prevFields) => ({
      ...prevFields,
      [target.name]: target.value,
    }));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(fields);

    // Aqui você pode realizar a lógica para enviar o formulário via API, se necessário.
    // Por exemplo:
    // try {
    //   await enviarFormularioParaAPI(fields);
    //   console.log('Formulário enviado com sucesso!');
    //   setFields(initialFields); // Redefinir os campos para o valor inicial após o envio.
    // } catch (error) {
    //   console.error('Erro ao enviar formulário:', error);
    // }

    setFields(initialFields);
  }

  return (
    <section id='contact' className={styles.contact}>
      <h2>Entre em <span>Contato</span></h2>
      <form action="/api/send-email" method="POST" onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder='Seu nome completo'
            onChange={handleChange}
            value={fields.name}
          />
          <input
            type="email"
            name="email"
            placeholder='Seu endereço de email'
            onChange={handleChange}
            value={fields.email}
          />
        </div>
        <div>
          <input
            type="number"
            name="phone"
            placeholder='Número de telefone'
            onChange={handleChange}
            value={fields.phone}
          />
          <input
            type="text"
            name="subject"
            placeholder='Assunto do email'
            onChange={handleChange}
            value={fields.subject}
          />
          <textarea
            name="message"
            id=""
            cols={30}
            rows={10}
            placeholder='Insira sua mensagem aqui'
            onChange={handleChange}
            value={fields.message}
          ></textarea>
        </div>
        <input
          type="submit"
          value="Enviar Mensagem"
          className={styles.btn}
          disabled={disableBtn}
        />
      </form>
    </section>
  )
}

export default Contact;