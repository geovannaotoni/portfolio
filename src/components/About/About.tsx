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
        <div>
          <PlaceIcon style={{color: 'rgb(230, 0, 255)', fontSize: '2rem'}}/><p>Belo Horizonte - Minas Gerais</p>
        </div>
        <div>
          <SchoolIcon style={{color: 'rgb(230, 0, 255)', fontSize: '2rem'}}/>
          <p>Engenheira Química pela Universidade Federal de Minas Gerais</p>
        </div>
        <div>
          <MenuBookIcon style={{color: 'rgb(230, 0, 255)', fontSize: '2rem'}}/>
          <p>Estudando Desenvolvimento Web pela Trybe e Sistemas de Informação pela UFMG</p>

        </div>
        <a href="https://www.linkedin.com/in/geovanna-otoni/" className={styles.btn}>Saiba mais</a>
      </article>
    </section>
  )
}

export default About;