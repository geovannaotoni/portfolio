import React from 'react';
import styles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <header className={styles.header}>
      <a href="" className={styles.logo}>Geovanna <span>Otoni</span></a>

      <MenuIcon className={styles.menu_icon}/>

      <nav className={styles.navbar}>
        <a href="#home" className={styles.active}>Home</a>
        <a href="#about">Sobre mim</a>
        <a href="#technologies">Tecnologias</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  )
}

export default Header;