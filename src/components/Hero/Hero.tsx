"use client"

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Hero() {
  return (
    <section id='home' className={styles.hero}>
      <article className={styles.hero_content}>
        <h3>Olá, meu nome é</h3>
        <h1>Geovanna Otoni</h1>
        <h3>E eu sou uma <span>Desenvolvedora Full Stack</span></h3>
        <p>Além de completamente apaixonada por tecnologia.</p>
        <div className={styles.social_media}>
          <a href="https://github.com/geovannaotoni">
            <GitHubIcon className={styles.social_media_icon} />
          </a>
          <a href="https://www.linkedin.com/in/geovanna-otoni/"><LinkedInIcon className={styles.social_media_icon} /></a>
          <a href=""><EmailIcon className={styles.social_media_icon} /></a>
        </div>
        <a href="#" className={styles.btn_cv}>Download CV</a>
      </article>

      <article>
        <Image 
          className={styles.logo}
          src="/profile-pic.jpeg"
          alt="Geovanna Img"
          width={450}
          height={450}
          style={{
            border: '3px solid rgb(230, 0, 255)',
            borderRadius: '3rem', 
            boxShadow: '0 0 0.3rem rgb(230, 0, 255)' }}
          // style={{ width: '35vw' }}
        />
      </article>
    </section>
  )
}

export default Hero;