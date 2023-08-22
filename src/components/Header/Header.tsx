"use client"

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [openNavBar, setOpenNavBar] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleClickOpenNavBar = () => {
    setOpenNavBar(!openNavBar);
  }

  const handleClickLink = () => {
    setOpenNavBar(false);
  }

  const handleScroll = () => {
    const sections = ['#home', '#about', '#technologies', '#projects', '#contact'];
    const sectionPositions = sections.map((section) => {
      const element = document.querySelector(section);
      const htmlElement = element as HTMLElement;
      return {
        section,
        offsetTop: htmlElement.offsetTop,
        offsetBottom: htmlElement.offsetTop + htmlElement.offsetHeight,
      };
    });
  
    const currentPosition = window.scrollY + window.innerHeight / 2;
    let activeSection = '#home';
  
    sectionPositions.forEach(({ section, offsetTop, offsetBottom }) => {
      if (currentPosition >= offsetTop && currentPosition < offsetBottom) {
        activeSection = section;
      }
    });
  
    setActiveLink(activeSection);
  };

  useEffect(() => {
    window.onscroll = handleScroll;
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <header className={styles.header}>
      <a href="" className={styles.logo}>Geovanna <span>Otoni</span></a>

      {openNavBar ? 
      <CloseIcon className={styles.menu_icon} onClick={handleClickOpenNavBar}/> : <MenuIcon className={styles.menu_icon} onClick={handleClickOpenNavBar}/>}

      <nav className={`${styles.navbar} ${openNavBar && styles.open}`}>
        <a
          href="#home"
          className={activeLink === '#home' ? `${styles.active}` : ''}
          onClick={handleClickLink}
        >Home</a>
        <a
          href="#about"
          onClick={handleClickLink}
          className={activeLink === '#about' ? `${styles.active}` : ''}
        >Sobre mim</a>
        <a
          href="#technologies"
          onClick={handleClickLink}
          className={activeLink === '#technologies' ? `${styles.active}` : ''}
        >Tecnologias</a>
        <a
          href="#projects"
          onClick={handleClickLink}
          className={activeLink === '#projects' ? `${styles.active}` : ''}
        >Projetos</a>
        <a
          href="#contact"
          onClick={handleClickLink}
          className={activeLink === '#contact' ? `${styles.active}` : ''}
        >Contato</a>
      </nav>
    </header>
  )
}

export default Header;