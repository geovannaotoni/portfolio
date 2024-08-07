"use client"
import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import PlaceIcon from '@mui/icons-material/Place';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function About() {
  return (
    <section id='about' className={styles.about}>
      <article>
        <Image 
          className={styles.image}
          src="/computer.png"
          alt="Geovanna Img"
          layout="responsive"
          width={450}
          height={450}
          // style={{
          //   border: '3px solid rgb(230, 0, 255)',
          //   borderRadius: '50%', 
          //   boxShadow: '0 0 0.5rem rgb(230, 0, 255)' }}
        />
      </article>
      <article className={styles.about_content}>
        <h2>Sobre <span>Mim</span></h2>
        <h3>Desevolvedora Full Stack e Engenheira Química</h3>
        <div>
          <PlaceIcon className={styles.icon}/><p>Belo Horizonte - Minas Gerais</p>
        </div>
        <div>
          <SchoolIcon className={styles.icon}/>
          <p>Engenheira Química pela Universidade Federal de Minas Gerais</p>
        </div>
        <div>
          <MenuBookIcon className={styles.icon}/>
          <p>Formada em Desenvolvimento Web pela escola de TI Trybe</p>

        </div>
        <a href="https://www.linkedin.com/in/geovanna-otoni/" className={styles.btn}>Saiba mais</a>
      </article>
    </section>
  )
}

export default About;