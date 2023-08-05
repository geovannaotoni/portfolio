"use client"

import React, { useState } from 'react';
import styles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [openNavBar, setOpenNavBar] = useState(false);

  const handleClickOpenNavBar = () => {
    setOpenNavBar(!openNavBar);
  }

  const handleClickLink = () => {
    setOpenNavBar(false);
  }

  return (
    <header className={styles.header}>
      <a href="" className={styles.logo}>Geovanna <span>Otoni</span></a>

      {openNavBar ? 
      <CloseIcon className={styles.menu_icon} onClick={handleClickOpenNavBar}/> : <MenuIcon className={styles.menu_icon} onClick={handleClickOpenNavBar}/>}

      <nav className={`${styles.navbar} ${openNavBar && styles.open}`}>
        <a href="#home" className={styles.active} onClick={handleClickLink}>Home</a>
        <a href="#about" onClick={handleClickLink}>Sobre mim</a>
        <a href="#technologies" onClick={handleClickLink}>Tecnologias</a>
        <a href="#projects" onClick={handleClickLink}>Projetos</a>
        <a href="#contact" onClick={handleClickLink}>Contato</a>
      </nav>
    </header>
  )
}

export default Header;