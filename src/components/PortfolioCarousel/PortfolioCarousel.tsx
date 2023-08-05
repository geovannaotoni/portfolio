"use client"

import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PortfolioCarousel.module.css';
import projects from '@/utils/projects';
import LinkIcon from '@mui/icons-material/Link';
import Image from "next/image";

const PortfolioCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
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
            src="/galaxy.jpg"
            alt="Geovanna Img"
            width={300}
            height={300}
          />
          <div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href="#"><LinkIcon className={styles.icon} /></a>
          </div>
        </article>
      ))}
    </Slider>
  );
};

export default PortfolioCarousel;
