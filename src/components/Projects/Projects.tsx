"use client"
import React from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';
import PortfolioCarousel from '../PortfolioCarousel/PortfolioCarousel';

function Projects() {
  return (
    <section className={styles.projects} id='projects'>
      <h2>Principais <span>Projetos</span></h2>
      <div className={styles.projects_container}>
        <PortfolioCarousel />
      </div>
    </section>
  )
}

export default Projects;