import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { PiInstagramLogo, PiFacebookLogo, PiLinkedinLogo, PiYoutubeLogo, PiCaretDownBold, PiList, PiX } from 'react-icons/pi';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const tabs = ['Nuestra identidad', 'El problema', 'Nuestras capacidades', 'Nuestros líderes', 'Unirse', 'Contacto'];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false); // Close menu on navigation
  };

  // Prevenir scroll en el body cuando el panel modal está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div 
        className={styles.logoContainer} 
        onClick={() => handleTabClick('Inicio')}
        style={{ cursor: 'pointer' }}
      >
        <img src="/SVG Sinergy Group.svg" alt="Synergy Group Logo" className={styles.logoMark} />
        <span className={styles.logoText}>Synergy Group</span>
      </div>

      <button 
        className={styles.hamburgerBtn}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Menú"
      >
        {isMobileMenuOpen ? <PiX size={32} /> : <PiList size={32} />}
      </button>

      {/* Overlay background on mobile */}
      <div 
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.showOverlay : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div className={`${styles.navContent} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.navLinks}>
          {tabs.map((tab) => (
            <li key={tab} className={styles.navItemWrapper}>
              {tab === 'Nuestros líderes' ? (
                <div className={styles.dropdownContainer}>
                  <button
                    className={`${styles.navButton} ${(activeTab === tab || activeTab.startsWith('Perfil-')) ? styles.active : ''}`}
                    onClick={() => handleTabClick(tab)}
                    style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                  >
                    {tab} <PiCaretDownBold size={12} className={styles.caret} />
                  </button>
                  <div className={styles.dropdownMenu}>
                    <button onClick={() => handleTabClick('Perfil-luis')}>Luis Alfonzo Bello</button>
                    <button onClick={() => handleTabClick('Perfil-dario')}>Dario Gigena Parker</button>
                    <button onClick={() => handleTabClick('Perfil-roberto')}>Roberto Canay</button>
                  </div>
                </div>
              ) : (
                <button
                  className={`${styles.navButton} ${activeTab === tab ? styles.active : ''}`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/company/synergygroupar/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}><PiLinkedinLogo size={24} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
