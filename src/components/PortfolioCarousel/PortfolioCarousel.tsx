"use client"

import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PortfolioCarousel.module.css';
import projects from '@/utils/projects';
import LinkIcon from '@mui/icons-material/Link';
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';

const PortfolioCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings} className={styles.carousel}>
      {projects.map((project, index) => (
        <article key={index} className={styles.article}>
          <Image 
            className={styles.image}
            src={project.img}
            layout="responsive"
            alt="Project Img"
          />
          <div className={styles.project_content}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            {/* <p><span>Tecnologias: </span> 
              {project.tecnologies.join(', ')}
            </p> */}
            <div className={styles.links}>
              <a href={project.src}><GitHubIcon className={styles.icon} />Repositório</a>
              <a href={project.deploy}><LinkIcon className={styles.icon} /> Deploy</a>
            </div>
          </div>
        </article>
      ))}
    </Slider>
  );
};

export default PortfolioCarousel;
