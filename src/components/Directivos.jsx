import React from 'react';
import styles from './Directivos.module.css';

export const lideresData = {
  luis: {
    id: 'luis',
    name: 'Luis Alfonzo Bello',
    role: 'Estrategia Global y Salud Pública',
    enfoque: 'El puente entre la evidencia científica y la gobernanza internacional.',
    perfil: 'Médico psiquiatra con +40 años de trayectoria. Exasesor regional de la OPS/OMS y especialista de la CICAD/OEA.',
    impacto: 'Ha liderado la arquitectura de políticas públicas en América Latina y Europa, transformando la visión global hacia la reducción de la demanda.',
    quote: 'Una política pública adecuada protege; por cada dólar invertido en prevención real, devolvemos siete a la sociedad en bienestar y productividad.',
    image: '',
    color: 'var(--color-primary)'
  },
  dario: {
    id: 'dario',
    name: 'Dario Gigena Parker',
    role: 'Liderazgo Clínico Global y Diseño de Sistemas',
    enfoque: 'La excelencia clínica aplicada a la gestión de redes de asistencia masiva en todos los niveles de complejidad.',
    perfil: 'Médico psiquiatra, máster en drogadependencia y profesor universitario. Creador de uno de los sistemas de atención pública más extensos de Argentina.',
    impacto: 'Experto en el despliegue de redes territoriales que unan los conocimientos con la práctica en la gestión pública y privada.',
    quote: 'No podemos esperar a tocar fondo; el sistema debe ser un continuo de cuidados que detecte el riesgo antes de que se convierta en tragedia.',
    image: '/dario.png',
    color: 'var(--color-beige-light)'
  },
  roberto: {
    id: 'roberto',
    name: 'Roberto Canay',
    role: 'Investigación de Políticas y Análisis de Datos',
    enfoque: 'La transformación del dato en decisiones estratégicas de salud mental.',
    perfil: 'Doctor en Psicología (PhD) y especialista en gobernabilidad (GWU).',
    impacto: 'Lideró políticas públicas locales y nacionales en Argentina. Experto en integrar indicadores de calidad con la gestión operativa.',
    quote: 'La evidencia es lo que convierte una intervención aislada en una política confiable y sostenible. Un líder formado en datos es un multiplicador de impacto real.',
    image: '/RobertoCanay.png',
    color: 'var(--color-gray-light)'
  }
};

const Directivos = ({ setActiveTab }) => {
  const profesionales = [lideresData.luis, lideresData.dario, lideresData.roberto];

  return (
    <div className={styles.directivosContainer}>
      <div className={`${styles.titleSection} animate__animated animate__fadeInDown`}>
        <h1 className="pageMainTitle">NUESTROS LÍDERES</h1>
        <p className={styles.introText}>
          Somos un equipo de más de 20 profesionales liderados por:
        </p>
      </div>

      <div className={`${styles.cardsGrid} animate__animated animate__fadeInUp`}>
        {profesionales.map((prof) => (
          <div key={prof.id} className={styles.profCard} onClick={() => setActiveTab(`Perfil-${prof.id}`)}>
            <div className={styles.circleBg} style={{ '--card-bg': prof.color }}></div>
            {prof.image && <img src={prof.image} alt={prof.name} className={styles.profImage} />}
            <div className={styles.namePill}>
              {prof.name}
            </div>
            <div className={styles.quoteOverlay}>
              <span className={styles.quoteMarkOpen}>“</span>
              <p>{prof.quote}</p>
              <span className={styles.quoteMarkClose}>”</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Directivos;
