import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';

function About() {
  return (
    <section id='about' className={styles.about}>
      <article>
        <Image 
          className={styles.image}
          src="/profile-pic.jpeg"
          alt="Geovanna Img"
          width={450}
          height={450}
          style={{
            border: '3px solid rgb(230, 0, 255)',
            borderRadius: '50%', 
            boxShadow: '0 0 0.5rem rgb(230, 0, 255)' }}
        />
      </article>
      <article className={styles.about_content}>
        <h2>Sobre <span>Mim</span></h2>
        <h3>Desevolvedora Full Stack e Engenheira Química</h3>
        <p>Belo Horizonte - Minas Gerais</p>
        <p>Engenheira Química formada pela Universidade Federal de Minas Gerais</p>
        <p>Estudando Desenvolvimento Web pela Trybe e Sistemas de Informação pela UFMG</p>
        <a href="https://www.linkedin.com/in/geovanna-otoni/" className={styles.btn}>Saiba mais</a>
      </article>
    </section>
  )
}

export default About;