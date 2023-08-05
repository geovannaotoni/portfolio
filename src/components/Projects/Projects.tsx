"use client"
import React from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';
import LinkIcon from '@mui/icons-material/Link';

function Projects() {
  return (
    <section className={styles.projects} id='projects'>
      <h2>Principais <span>Projetos</span></h2>
      <div className={styles.projects_container}></div>
      <article>
        <Image 
          className={styles.image}
          src="/galaxy.jpg"
          alt="img"
          width={450}
          height={450}
        />
        <div className={styles.layer}>
          <h4>Título Projeto</h4>
          <p>Projeto tal bla bla</p>
          <a href="#"><LinkIcon className={styles.icon} /></a>
        </div>
      </article>
      <article>
        <Image 
          className={styles.image}
          src="/galaxy.jpg"
          alt="img"
          width={450}
          height={450}
        />
        <div className={styles.layer}>
          <h4>Título Projeto</h4>
          <p>Projeto tal bla bla</p>
          <a href="#"><LinkIcon className={styles.icon} /></a>
        </div>
      </article>
    </section>
  )
}

export default Projects;