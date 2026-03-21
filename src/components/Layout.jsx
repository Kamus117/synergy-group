import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import NuestraIdentidad from './NuestraIdentidad';
import ElProblema from './ElProblema';
import NuestrasCapacidades from './NuestrasCapacidades';
import Directivos from './Directivos';
import PerfilLider from './PerfilLider';
import Unirse from './Unirse';
import Contacto from './Contacto';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = () => {
  const [activeTab, setActiveTab] = useState('Inicio');

  const renderContent = () => {
    // Intercepción dinámica para perfiles
    if (activeTab.startsWith('Perfil-')) {
      const leaderId = activeTab.replace('Perfil-', '');
      return <PerfilLider liderId={leaderId} />;
    }

    switch (activeTab) {
      case 'Inicio':
        return <Hero />;
      case 'Nuestra identidad':
        return <NuestraIdentidad />;
      case 'El problema':
        return <ElProblema />;
      case 'Nuestras capacidades':
        return <NuestrasCapacidades />;
      case 'Nuestros líderes':
        return <Directivos setActiveTab={setActiveTab} />;
      case 'Unirse':
        return <Unirse />;
      case 'Contacto':
        return <Contacto />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>
      <main className={styles.mainContent}>
        {renderContent()}
      </main>
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default Layout;
