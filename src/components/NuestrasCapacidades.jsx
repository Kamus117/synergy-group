import React, { useState } from 'react';
import styles from './NuestrasCapacidades.module.css';

const NuestrasCapacidades = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const cards = [
    {
      title: "Creemos en la práctica compartida",
      description: "Nuestro equipo no solo posee el conocimiento técnico en prevención, tratamiento y políticas públicas, sino que también ama la práctica. Hemos enfrentado barreras, derribado estigmas y dejado cada lugar mejor de cómo lo encontramos. Creemos en una profesionalidad que se involucra."
    },
    {
      title: "Empoderando una red",
      description: "No buscamos dependencia, sino empoderamiento. Construimos redes sólidas y expansivas que trasciendan nuestra intervención."
    },
    {
      title: "Apoyado en datos y evidencia",
      description: "Apoyado en datos y evidencia científica, partiendo de datos medibles y cuantificables."
    },
    {
      title: "Con capilaridad y presencia",
      description: "Adaptamos la evidencia a la realidad de cada territorio, con soluciones realistas que funcionan en diferentes contextos."
    },
    {
      title: "Con poco se logra mucho",
      description: "Creemos que con poco se puede lograr mucho: Con intervenciones sencillas se pueden generar resultados poderosos."
    }
  ];

  return (
    <div className={styles.container}>
      
      <div className={`${styles.header} animate__animated animate__fadeInDown`} style={{ marginBottom: '2rem' }}>
        <h1 className="pageMainTitle">NUESTRAS CAPACIDADES</h1>
        <p className={styles.intro} style={{ marginTop: '1.5rem' }}>
          Estamos preparados y hemos trabajado con todo tipo de organizaciones, desde instituciones gubernamentales y educativas hasta corporaciones, organismos y todo tipo de comunidades y grupos. Estamos ante un fenómeno que exige que todos los actores de la sociedad se involucren activamente.
        </p>
      </div>

      <div className={`${styles.accordionWrapper} animate__animated animate__fadeInUp`} style={{ animationDelay: '0.4s' }}>
        {cards.map((card, index) => {
          const isExpanded = index === expandedIndex;
          return (
            <div 
              key={index} 
              className={`${styles.accordionCard} ${isExpanded ? styles.expanded : ''}`}
              onMouseEnter={() => setExpandedIndex(index)}
            >
              <div className={`${styles.cardNumber} ${isExpanded ? styles.hiddenNumber : ''}`}>
                {index + 1}
              </div>

              <div className={`${styles.cardContent} ${isExpanded ? styles.showContent : ''}`}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default NuestrasCapacidades;
