import React from 'react';
import styles from './Navbar.module.css';
import { PiInstagramLogo, PiFacebookLogo, PiLinkedinLogo, PiYoutubeLogo, PiCaretDownBold } from 'react-icons/pi';

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = ['Inicio', 'Nuestra identidad', 'El problema', 'Nuestras capacidades', 'Nuestros líderes', 'Unirse', 'Contacto'];

  return (
    <nav className={styles.navbar}>
      <div 
        className={styles.logoContainer} 
        onClick={() => setActiveTab('Inicio')}
        style={{ cursor: 'pointer' }}
      >
        {/* Usamos el SVG que subió el usuario en public */}
        <img src="/SVG Sinergy Group.svg" alt="Synergy Group Logo" className={styles.logoMark} />
        <span className={styles.logoText}>Synergy Group</span>
      </div>

      <ul className={styles.navLinks}>
        {tabs.map((tab) => (
          <li key={tab} className={styles.navItemWrapper}>
            {tab === 'Nuestros líderes' ? (
              <div className={styles.dropdownContainer}>
                <button
                  className={`${styles.navButton} ${(activeTab === tab || activeTab.startsWith('Perfil-')) ? styles.active : ''}`}
                  onClick={() => setActiveTab(tab)}
                  style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  {tab} <PiCaretDownBold size={12} />
                </button>
                <div className={styles.dropdownMenu}>
                  <button onClick={() => setActiveTab('Perfil-luis')}>Luis Alfonzo Bello</button>
                  <button onClick={() => setActiveTab('Perfil-dario')}>Dario Gigena Parker</button>
                  <button onClick={() => setActiveTab('Perfil-roberto')}>Roberto Canay</button>
                </div>
              </div>
            ) : (
              <button
                className={`${styles.navButton} ${activeTab === tab ? styles.active : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )}
          </li>
        ))}
      </ul>

      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/synergygroup/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}><PiInstagramLogo size={24} /></a>
        <a href="https://www.facebook.com/synergygrouparg/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}><PiFacebookLogo size={24} /></a>
        <a href="#" className={styles.iconLink}><PiLinkedinLogo size={24} /></a>
        <a href="#" className={styles.iconLink}><PiYoutubeLogo size={24} /></a>
      </div>
    </nav>
  );
};

export default Navbar;
