import React from 'react';
import styles from './SobreNosotros.module.css';

const NuestraIdentidad = () => {
  return (
    <div className={styles.sobreNosotrosContainer}>
      
      {/* SECTION 1: NUESTRA IDENTIDAD */}
      <h1 className="pageMainTitle animate__animated animate__fadeInDown" style={{ marginBottom: '2rem' }}>
        NUESTRA IDENTIDAD
      </h1>

      <div className={`${styles.mvmContainer} animate__animated animate__fadeInUp`}>
        
        {/* Nuestro Compromiso */}
        <div className={styles.mvmRow}>
          <div className={styles.mvmTitle}>
            <h3>1. Nuestro<br/>compromiso</h3>
          </div>
          <div className={styles.mvmContent}>
            <p>Nuestro compromiso es fortalecer las capacidades de instituciones, empresas y comunidades para generar entornos de bienestar que transformen positivamente la calidad de vida de las personas, y a su vez convertirlos en agentes y faros de cambio.</p>
          </div>
        </div>

        {/* Visión */}
        <div className={styles.mvmRow}>
          <div className={styles.mvmTitle}>
            <h3>2. Nuestra<br/>visión</h3>
          </div>
          <div className={styles.mvmContent}>
            <p>Aspiramos a ser referentes a nivel regional, reconocidos por nuestra innovación técnica, ética profesional y liderazgo en la creación de políticas públicas y programas. Buscamos desestigmatizar los problemas del comportamiento humano y fortalecer los pilares fundamentales de personas y organizaciones.</p>
          </div>
        </div>

        {/* Valores */}
        <div className={`${styles.mvmRow} ${styles.noBorder}`}>
          <div className={styles.mvmTitle}>
            <h3>3. Nuestros<br/>valores</h3>
          </div>
          <div className={styles.mvmContent}>
            <p style={{ fontWeight: '600', marginBottom: '1rem', color: 'var(--color-dark)' }}>¿En qué creemos?</p>
            <ul>
              <li><strong>Integridad:</strong> Actuamos bajo estándares éticos, garantizando la confidencialidad y el respeto a la dignidad humana.</li>
              <li><strong>Empatía:</strong> Comprendemos las realidades complejas de nuestros clientes y sus beneficiarios para ofrecer soluciones sensibles, personalizadas y escalables.</li>
              <li><strong>Evidencia Científica:</strong> Basamos nuestras intervenciones y consultorías en las investigaciones más recientes y metodologías probadas en el campo del comportamiento humano.</li>
              <li><strong>Integración de saberes:</strong> Creemos en el trabajo multidisciplinario y en la creación de alianzas estratégicas para lograr un impacto profundo y sostenible.</li>
              <li><strong>Compromiso Social Ampliado:</strong> Trabajamos para que el conocimiento no quede encerrado en oficinas de expertos. Impulsamos una reacción social donde líderes, directivos y ciudadanos hacen de la crisis una oportunidad de cambio transversal.</li>
              <li><strong>Innovación:</strong> Buscamos constantemente nuevas herramientas y enfoques creativos para abordar los retos emergentes en el ámbito de las adicciones y el bienestar emocional.</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};

export default NuestraIdentidad;
