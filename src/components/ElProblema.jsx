import React from 'react';
import styles from './SobreNosotros.module.css';

const ElProblema = () => {
  return (
    <div className={styles.sobreNosotrosContainer}>

      {/* SECTION 2: EL PROBLEMA */}
      <h1 className="pageMainTitle animate__animated animate__fadeInDown" style={{ marginBottom: '2rem' }}>
        EL PROBLEMA
      </h1>

      {/* Bloque 1 - Problema */}
      <div className={`${styles.block} animate__animated animate__fadeInLeft`}>
        <div className={styles.textContent}>
          <p className={styles.blockParagraph}>
            Según informes de las Naciones Unidas y la OMS, la salud mental y las adicciones se han convertido en la preocupación principal en materia de salud, al considerarse una epidemia mundial que afecta a 7 de cada 10 personas, el doble que hace 10 años.
          </p>
          <p className={styles.blockParagraph}>
            El aumento exponencial de la ansiedad, el estrés, la falta de confianza y la depresión impulsan la búsqueda de alivio en sustancias como el alcohol, psicofármacos y demás drogas, a la par que disparan el uso compulsivo de dispositivos electrónicos, las apuestas y conductas autolesivas, todo de forma cada vez más adictiva y peligrosa.
          </p>
          <p className={styles.blockParagraph}>
            La pandemia de COVID-19 ha profundizado el problema, sumado a la falta de inversión y desarrollo de programas especializados que cayeron 0,33 % en ese mismo periodo, y la creciente inestabilidad económica que continúa marginando a personas del sistema, imposibilitando el acceso a prevención, concientización y tratamientos por falta de recursos.
          </p>
          <p className={styles.blockParagraph} style={{ fontSize: '0.85rem', color: 'var(--color-gray-light)', fontStyle: 'italic', marginTop: '1rem' }}>
            Fuente: Elaboración propia de Synergy Global basada en datos de Ipsos Health Service Report 2024, encuesta global realizada en 31 países con una muestra de adultos entre septiembre de 2023 y 2024.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/epidemia-mundial.png" alt="Epidemia mundial" className={styles.image} />
        </div>
      </div>

      {/* Bloque 2 - Consecuencias / Solución */}
      <div className={`${styles.block} animate__animated animate__fadeInRight`} style={{ animationDelay: '0.2s' }}>
        <div className={styles.imageContainer}>
          <img src="/post-pandemia.png" alt="Alienación y alienación" className={styles.image} />
        </div>
        <div className={styles.textContent}>
          <p className={styles.blockParagraph}>
            La sensación de que no hay un rumbo o un camino hacia un escenario mejor provoca el mayor de los peligros: la alienación. Es decir, la pérdida de la esperanza y de los valores que nos hacen seres humanos: la cooperación, el ayudarnos mutuamente para asegurar las bases de nuestro bienestar individual y colectivo.
          </p>
          <p className={styles.blockParagraph}>
            Es una espiral de situaciones que se vuelven cada vez más complejas y difíciles de resolver, y solo necesitan que no hagamos nada para desembocar en el rompimiento total del tejido sobre el cual fundamos nuestra sociedad: la familia, el sistema educativo, instituciones de salud y laborales.
          </p>
          <p className={styles.blockParagraph} style={{ fontWeight: '600', color: 'var(--color-dark)' }}>
            Nuestra sociedad está en crisis y requiere una respuesta colectiva urgente.
          </p>
          <p className={styles.blockParagraph}>
            Es por eso que fundamos Synergy, nuestra propuesta para guiar un cambio y revertirlo. Primero, poner el tema sobre la mesa, luego reconocerlo y entenderlo, para juntos poder encontrar soluciones y tratarlo.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ElProblema;
