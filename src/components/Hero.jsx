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
            Apasionados <br />
            <span className={styles.textDark}>por el problema;</span> <br />
            <span className={styles.textPrimary}>libres para crear la solución</span>
          </h1>
        </div>
      </div>

      <p className={`${styles.heroDescription} animate__animated animate__fadeInUp`} style={{ animationDelay: '0.6s' }}>
        Synergy Global es una consultora estratégica especializada con una presencia consolidada en el Cono Sur y España, con proyección global. Apoyamos desde pequeñas instituciones a gobiernos, corporaciones y organismos multilaterales en la transformación profunda de sus modelos de salud mental y bienestar.
        En un mercado de soluciones fragmentadas, nuestro pensamiento innovador proporciona una estructura para resistir y prosperar en entornos de crisis constantes.
        Combinando una avanzada capacidad de diseño de redes con un conocimiento técnico de vanguardia, traducimos los desafíos más críticos de nuestros clientes —desde la alienación social hasta los riesgos operativos derivados de los problemas del comportamiento humano— en sistemas integrados y preparados para el futuro. Nuestra metodología garantiza una alineación total entre el capital humano, los procesos de gestión y la evidencia científica, impulsando un impacto medible que reconstruye el tejido institucional desde la base.
        Aportamos una maestría única que fusiona la experiencia en políticas públicas de escala masiva con la agilidad de una consultora flexible. Desde la implementación de observatorios epidemiológicos georreferenciados hasta la respuesta crítica ante incidentes complejos, entregamos soluciones inteligentes, éticas y estrictamente diseñadas a medida de la realidad territorial de cada cliente.

      </p>

      <div className={`${styles.statsContainer} animate__animated animate__fadeInUp`} style={{ animationDelay: '0.8s' }}>
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
    </div>
  );
};

export default Hero;
