import React from 'react';
import styles from './Footer.module.css';
import { PiInstagramLogo, PiFacebookLogo, PiLinkedinLogo, PiEnvelopeSimple, PiPhone } from 'react-icons/pi';

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
            Innovación al servicio del bienestar
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
            <a href="mailto:consultoressmya@gmail.com" className={styles.contactItem}>
              <PiEnvelopeSimple size={20} /> consultoressmya@gmail.com
            </a>
            <span className={styles.contactItem}>
              <PiPhone size={20} /> +54 (11) 41594083 (ARG)
            </span>
          </div>

          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/synergygroup.global?igsh=MTR3dWZ0NjI5Mmp5aQ==" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <PiInstagramLogo size={22} />
            </a>
            <a href="https://www.facebook.com/share/1DPbqjxbWo/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <PiFacebookLogo size={22} />
            </a>
            <a href="https://www.linkedin.com/company/synergygroupar/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <PiLinkedinLogo size={22} />
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
