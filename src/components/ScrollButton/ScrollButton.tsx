"use client";

import React, { useContext, useEffect, useState } from 'react';
import { ArrowUpward } from '@mui/icons-material'
import styles from './ScrollButton.module.css';

function ScrollButton() {
  const [scrollVisible, setScrollVisible] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    // const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrolled: number = document.documentElement.scrollTop
    const shouldShowButton: boolean = scrolled > 100;
    setScrollVisible(shouldShowButton);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {scrollVisible && 
        <button className={styles.upward} onClick={scrollToTop}>
          <ArrowUpward className={styles.icon}/>
      </button>}
    </>
  )
}

export default ScrollButton