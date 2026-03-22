import React from 'react';
import styles from './Contacto.module.css';

const Contacto = () => {
  return (
    <div className={`${styles.contactoContainer} animate__animated animate__fadeIn`}>
      <h1 className="pageMainTitle animate__animated animate__fadeInDown" style={{ marginBottom: '1rem' }}>CONTACTO</h1>
      
      <div className={`${styles.contentGrid} animate__animated animate__fadeInUp`}>
        
        {/* Columna Izquierda: Info & Sedes */}
        <div className={styles.infoColumn}>
          <p className={styles.introText}>
            Ofrecemos nuestro tiempo y expertise para escuchar, entender y diseñar una solución a medida a partir de una metodología que hemos comprobado que funciona. Comienza a transformar tu institución con nosotros.
          </p>

          <div className={styles.sedesBox}>
            <div className={styles.sede}>
              <h3>Sede Cono Sur:</h3>
              <p>Ciudad de Buenos Aires, República Argentina.</p>
              <p>+54 (11) 41594083</p>
              <p>contacto@coresynergy.info</p>
            </div>

            <div className={styles.sede}>
              <h3>Sede España:</h3>
              <p>Paseo de la Castellana, 194, 28046 Madrid, España</p>
              <p>contacto@coresynergy.info</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario de Diagnóstico */}
        <div className={styles.formColumn}>
          <div className={styles.formHeader}>
            <h2>¿Tiene alguna pregunta? Iniciemos una conversación estratégica.</h2>
          </div>

          <form className={styles.contactForm}>
            
            {/* Información Básica */}
            <h3 className={styles.formSectionTitle}>Información Básica</h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="nombre">Nombre y Apellido *</label>
              <input type="text" id="nombre" className={styles.input} required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="organizacion">Organización / Institución *</label>
              <input type="text" id="organizacion" className={styles.input} required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Correo Electrónico *</label>
              <input type="email" id="email" className={styles.input} required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="telefono">Teléfono de Contacto (con prefijo de país)</label>
              <input type="tel" id="telefono" className={styles.input} />
            </div>

            {/* Perfil del Desafío */}
            <h3 className={styles.formSectionTitle} style={{ marginTop: '2rem' }}>Perfil del Desafío</h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="audiencia">¿A quiénes afecta principalmente el desafío? (Ej.: empleados, comunidad, funcionarios, otros)</label>
              <input type="text" id="audiencia" className={styles.input} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="reto">¿Cuál es el mayor reto que enfrenta hoy su organización?</label>
              <textarea id="reto" className={styles.textarea} rows="4"></textarea>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="intentos">¿Qué soluciones ha intentado?</label>
              <textarea id="intentos" className={styles.textarea} rows="4"></textarea>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="solucion_buscada">¿Qué tipo de solución está buscando?</label>
              <textarea id="solucion_buscada" className={styles.textarea} rows="4"></textarea>
            </div>

            <button type="button" className={styles.submitBtn}>
              Iniciar Diagnóstico Estratégico
            </button>
            
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contacto;
