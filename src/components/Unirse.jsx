import React, { useState } from 'react';
import styles from './Unirse.module.css';

const Unirse = () => {
  const [copied, setCopied] = useState(false);
  const email = "consultoressmya@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500); // Hide message after 2.5s
  };

  return (
    <div className={`${styles.container} animate__animated animate__fadeIn`}>
      <h1 className="pageMainTitle animate__animated animate__fadeInDown" style={{ marginBottom: '2rem' }}>
        UNIRSE
      </h1>

      <div className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}>
        <p className={styles.paragraph}>
          Formar parte de Synergy Global es mucho más que unirse a una consultora de salud mental; es comprometerse con la construcción de un futuro donde la esperanza se recupera y la cooperación colectiva es el motor del cambio. Estamos diseñando la próxima generación de estrategias de bienestar, fusionando el rigor de la evidencia científica con una ejecución territorial sin precedentes.
        </p>

        <p className={styles.paragraph}>
          Aquí, te enfrentarás a desafíos complejos que generan un impacto real y tangible en la vida de las personas: desde el diseño de políticas públicas integrales y programas de prevención en entornos corporativos, hasta la intervención crítica en situaciones de alta complejidad.
        </p>

        <p className={styles.paragraph}>
          Si valorás la integridad clínica, la colaboración interdisciplinaria y el pensamiento disruptivo, escribinos y te convocaremos si algún proyecto se adecúa a tu perfil.
        </p>
        
        <div className={styles.copySection}>
          <button 
            className={styles.copyEmailBtn} 
            onClick={handleCopy}
            title="Haz clic para copiar"
          >
            {email}
          </button>
          
          <div className={`${styles.copyMessage} ${copied ? styles.show : ''}`}>
            Dirección de correo copiada en el portapapeles
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unirse;
