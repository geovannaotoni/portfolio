"use client"
import React, { useEffect, useState } from 'react';
import {ChangeEvent, FormEvent} from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import styles from './Contact.module.css';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../../env';

function Contact() {
  const initialFields = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  }
  const [fields, setFields] = useState(initialFields);
  const [disableBtn, setDisableBtn] = useState(true);

  const verifyFields = () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const validationEmail = emailRegex.test(fields.email);
    validationEmail ? setDisableBtn(false) : setDisableBtn(true);
  }

  useEffect(() => {
    emailjs.init(USER_ID);
  }, [])

  useEffect(() => {
    verifyFields();
  }, [fields]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prevFields) => ({
      ...prevFields,
      [target.name]: target.value,
    }));
  };

  const templateEmail = {
    from_name: fields.name,
    from_email: fields.email,
    subject: fields.subject,
    message: fields.message,
    phone: fields.phone
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(fields);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateEmail);
      Swal.fire({
        title: 'Formulário enviado com sucesso!',
        text: `Mensagem de ${fields.name} (${fields.email}): ${fields.subject}`,
        iconColor: 'rgb(230, 0, 255)',
        confirmButtonColor: 'rgb(230, 0, 255)',
        icon: 'success',
        timer: 3000,
        timerProgressBar: true,
        background: '#0f0f11',
        color: '#fff'
      });
    } catch (error) {
      Swal.fire({
        title: 'Erro ao enviar formulário',
        text: `${error}`,
        iconColor: 'rgb(230, 0, 255)',
        confirmButtonColor: 'rgb(230, 0, 255)',
        confirmButtonText: 'OK',
        icon: 'error',
        background: '#0f0f11',
        color: '#fff'
      });
    }
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