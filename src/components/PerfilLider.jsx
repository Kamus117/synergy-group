import React from 'react';
import styles from './PerfilLider.module.css';
import { lideresData } from './Directivos';

const PerfilLider = ({ liderId }) => {
  const lider = lideresData[liderId];
  
  if (!lider) return <div className={styles.notFound}>Líder no encontrado</div>;

  return (
    <div className={`${styles.perfilContainer} animate__animated animate__fadeIn`}>
      <h1 className="pageMainTitle animate__animated animate__fadeInDown">{lider.name}</h1>
      <h2 className={`${styles.roleTitle} animate__animated animate__fadeInDown`} style={{ animationDelay: '0.1s' }}>{lider.role}</h2>
      
      <div className={styles.perfilContent}>
        
        {/* Lado Imagen */}
        <div className={`${styles.imageColumn} animate__animated animate__fadeInLeft`} style={{ animationDelay: '0.2s' }}>
           <div className={styles.circleBg} style={{ backgroundColor: lider.color }}></div>
           <img src={lider.image} alt={lider.name} className={styles.profImage} />
        </div>

        {/* Lado Info */}
        <div className={`${styles.infoColumn} animate__animated animate__fadeInRight`} style={{ animationDelay: '0.2s' }}>
          
          <div className={styles.infoSection}>
            <h3>Su enfoque</h3>
            <p>{lider.enfoque}</p>
          </div>
          
          <div className={styles.infoSection}>
            <h3>Perfil</h3>
            <p>{lider.perfil}</p>
          </div>
          
          <div className={styles.infoSection}>
            <h3>Impacto</h3>
            <p>{lider.impacto}</p>
          </div>
          
          <div className={styles.quoteBox}>
             <span className={styles.quoteIcon}>“</span>
             <p>{lider.quote}</p>
             <span className={styles.quoteIcon} style={{ alignSelf: 'flex-end', marginTop: 0 }}>”</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PerfilLider;
