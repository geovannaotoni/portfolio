import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <a href="" className={styles.logo}>Geovanna <span>Otoni</span></a>

      <nav className={styles.navbar}>
        <a href="#home" className={styles.active}>Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  )
}

export default Header;