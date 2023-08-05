import React from 'react';
import styles from './Technologies.module.css';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function Technologies() {
  return (
    <section id='technologies' className={styles.tech}>
      <h2>Habilidades <span>Técnicas</span></h2>
      <div className={styles.tech_container}>
        <article>
          <CoPresentIcon className={styles.icon} />
          <h3>Front-End</h3>
        </article>
        <article>
          <ManageAccountsIcon className={styles.icon} />
          <h3>Back-End</h3>
        </article>
      </div>
    </section>
  )
}

export default Technologies;