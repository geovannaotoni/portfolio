"use client"

import React from 'react';
import styles from './Technologies.module.css';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BuildIcon from '@mui/icons-material/Build';
import ComputerIcon from '@mui/icons-material/Computer';

import Image, { StaticImageData } from 'next/image';
import frontendTechs from '@/utils/frontendTechs';
import backendTechs from '@/utils/backendTechs';
import toolsTechs from '@/utils/ferramentas&devops';
import systemTechs from '@/utils/systemTechs';

function Technologies() {
  return (
    <section id='technologies' className={styles.tech}>
      <h2>Habilidades <span>Técnicas</span></h2>
      <div className={styles.tech_container}>
        <article style={{ minHeight: '33vw'}}>
          <CoPresentIcon className={styles.icon} />
          <h3>Front-End</h3>
          <div>
            {frontendTechs.map((img: { name: string; url: string; }) => (
              <img 
              src={img.url}
              className="badge"
              style={{ height: '55px' }}
              alt={img.name}
            />
            ))}
          </div>
        </article>
        <article style={{ minHeight: '33vw'}}>
          <ManageAccountsIcon className={styles.icon} />
          <h3>Back-End</h3>
          <div>
            {backendTechs.map((img: { name: string; url: string; }) => (
              <img 
              src={img.url}
              className="badge"
              style={{ height: '55px' }}
              alt={img.name}
            />
            ))}
          </div>
        </article>
      
        <article style={{ minHeight: '25vw'}}>
          <BuildIcon className={styles.icon} />
          <h3>Ferramentas & DevOps</h3>
          <div>
            {toolsTechs.map((img: { name: string; url: string; }) => (
              <img 
              src={img.url}
              className="badge"
              style={{ height: '55px' }}
              alt={img.name}
            />
            ))}
          </div>
        </article>

        <article style={{ minHeight: '25vw'}}>
          <ComputerIcon className={styles.icon} />
          <h3>Sistema & Outros</h3>
          <div>
            {systemTechs.map((img: { name: string; url: string; }) => (
              <img 
              src={img.url}
              className="badge"
              style={{ height: '55px' }}
              alt={img.name}
            />
            ))}
          </div>
        </article>
        </div>
    </section>
  )
}

export default Technologies;