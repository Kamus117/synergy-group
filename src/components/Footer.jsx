import React from 'react';
import styles from './Footer.module.css';
import { PiInstagramLogo, PiFacebookLogo, PiLinkedinLogo, PiYoutubeLogo, PiEnvelopeSimple, PiPhone } from 'react-icons/pi';

const Footer = ({ setActiveTab }) => {
  const tabs = ['Inicio', 'Nuestra identidad', 'El problema', 'Nuestras capacidades', 'Nuestros líderes', 'Unirse', 'Contacto'];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        {/* Columna 1: Branding y Propósito */}
        <div className={styles.brandColumn}>
          <div className={styles.logoContainer} onClick={() => setActiveTab('Inicio')}>
            <img src="/SVG Sinergy Group.svg" alt="Synergy Group" className={styles.logoMark} />
            <span className={styles.logoText}>Synergy Group</span>
          </div>
          <p className={styles.tagline}>
            Apasionados por el problema, libres para crear la solución.
          </p>
          <p className={styles.proposito}>
            Transformamos desafíos del comportamiento humano en sistemas de resiliencia institucional.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Explorar</h4>
          <ul className={styles.navLinks}>
            {tabs.map((tab) => (
              <li key={tab}>
                <button onClick={() => setActiveTab(tab)} className={styles.linkBtn}>
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Contacto y Redes */}
        <div className={styles.contactColumn}>
          <h4 className={styles.columnTitle}>Conectar</h4>
          
          <div className={styles.contactInfo}>
            <a href="mailto:contacto@synergyglobal.com" className={styles.contactItem}>
              <PiEnvelopeSimple size={20} /> contacto@synergyglobal.com
            </a>
            <span className={styles.contactItem}>
              <PiPhone size={20} /> +54 (11) --- ----
            </span>
            <span className={styles.contactItem}>
              <PiPhone size={20} /> +34 --- ----
            </span>
          </div>

          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/synergygroup/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <PiInstagramLogo size={22} />
            </a>
            <a href="https://www.facebook.com/synergygrouparg/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <PiFacebookLogo size={22} />
            </a>
            <a href="#" className={styles.iconLink}>
              <PiLinkedinLogo size={22} />
            </a>
            <a href="#" className={styles.iconLink}>
              <PiYoutubeLogo size={22} />
            </a>
          </div>
        </div>

      </div>
      
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Synergy Global. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
