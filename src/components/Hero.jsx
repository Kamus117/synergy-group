import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Logo from './Logo';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const easeOutQuad = (t) => t * (2 - t);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const current = Math.floor(easeOutQuad(progress) * end);
      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    // Add a slight delay to start the count up after the entrance animations
    const timer = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, 800);

    return () => clearTimeout(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString('es-ES')}</span>;
};

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTopSection}>
        {/* Lado izquierdo: Logo animado */}
        <div className={styles.heroLogoWrapper}>
          <Logo />
        </div>

        {/* Separador vertical */}
        <div className={`${styles.heroDivider} animate__animated animate__fadeIn`} style={{ animationDelay: '0.4s' }}></div>

        {/* Lado derecho: Titulo animado */}
        <div className={`${styles.heroTitleWrapper} animate__animated animate__fadeInRight`} style={{ animationDelay: '0.4s' }}>
          <h1 className={styles.heroTitle}>
            Innovación <br />
            <span className={styles.textDark}>al servicio del</span> <br />
            <span className={styles.textPrimary}>bienestar</span>
          </h1>
        </div>
      </div>

      <div className={`${styles.statsContainer} animate__animated animate__fadeInUp`} style={{ animationDelay: '0.6s' }}>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>+<CountUp end={20} /></h2>
          <p className={styles.statLabel}>AÑOS DE EXPERIENCIA</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>+<CountUp end={15} /></h2>
          <p className={styles.statLabel}>PAÍSES DE ALCANCE</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>+<CountUp end={150} /></h2>
          <p className={styles.statLabel}>CIUDADES INTERVENIDAS</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>+<CountUp end={180} /></h2>
          <p className={styles.statLabel}>PROYECTOS TERMINADOS</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>+<CountUp end={100000} /></h2>
          <p className={styles.statLabel}>PERSONAS ALCANZADAS</p>
        </div>
      </div>

      <p className={`${styles.heroDescription} animate__animated animate__fadeInUp`} style={{ animationDelay: '0.8s' }}>
        Synergy Global es un equipo de consultores con una trayectoria consolidada en Hispanoamérica; transformamos desafíos del comportamiento humano en sistemas de resiliencia institucional. <br /><br />
        En un panorama global marcado por soluciones fragmentadas, nuestra propuesta garantiza la alineación total entre el capital humano y los procesos de gestión. Entregamos soluciones que no solo alivian puntos de dolor críticos, sino que también generan un retorno social y económico tangible. <br /><br />
        No somos observadores del cambio; nos aseguramos de que el sistema funcione antes de que la crisis se convierta en tragedia.
      </p>
    </div>
  );
};

export default Hero;
