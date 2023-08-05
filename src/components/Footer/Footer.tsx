import React from 'react';
import styles from './Footer.module.css';
import ScrollButton from '../ScrollButton/ScrollButton';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Geovanna Otoni © 2023</p>
      <ScrollButton />
    </footer>
  )
}

export default Footer