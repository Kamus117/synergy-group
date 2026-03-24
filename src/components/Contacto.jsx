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
              <p>consultoressmya@gmail.com</p>
            </div>

            <div className={styles.sede}>
              <h3>Sede España:</h3>
              <p>Paseo de la Castellana, 194, 28046 Madrid, España</p>
              <p>consultoressmya@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Enlace al Formulario de Diagnóstico */}
        <div className={styles.formColumn}>
          <div className={styles.formHeader}>
            <h2>Diagnóstico Estratégico</h2>
            <p className={styles.formDescription}>
              Comenzar a transformar su institución requiere entender su realidad. Le invitamos a completar nuestro formulario de diagnóstico para que nuestro equipo pueda evaluar sus desafíos y diseñar una solución a medida.
            </p>
          </div>

          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSchlYlD_Mo0_l5dG3N3pwGDvbbl3XfnMLTve301I7XjCoJPrA/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.submitBtn}
          >
            Iniciemos una conversación estratégica.
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contacto;
