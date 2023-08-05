import React from 'react';
import styles from './Technologies.module.css';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import Image, { StaticImageData } from 'next/image';
import frontendTechs from '@/utils/frontendTechs';
import backendTechs from '@/utils/backendTechs';

function Technologies() {
  return (
    <section id='technologies' className={styles.tech}>
      <h2>Habilidades <span>Técnicas</span></h2>
      <div className={styles.tech_container}>
        <article>
          <CoPresentIcon className={styles.icon} />
          <h3>Front-End</h3>
          <div>
            {frontendTechs.map((img: StaticImageData) => (
              <Image 
              src={img}
              className={styles.image}
              layout="responsive"
              alt=""
              width={10}
              height={10}
            />
            ))}
          </div>
        </article>
        <article>
          <ManageAccountsIcon className={styles.icon} />
          <h3>Back-End</h3>
          <div>
            {backendTechs.map((img: StaticImageData) => (
              <Image 
              src={img}
              className={styles.image}
              layout="responsive"
              alt=""
              width={10}
              height={10}
            />
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Technologies;