import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="header">

      <div className="header-tabs">
        
        <div className={`header-tab ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => handleTabClick('Home')}>
          Home
        </div>
       
        <div className={`header-tab ${activeTab === 'Quem Somos' ? 'active' : ''}`} onClick={() => handleTabClick('Quem Somos')}>
          Quem Somos
        </div>
        
        <div className={`header-tab ${activeTab === 'Fale Conosco' ? 'active' : ''}`} onClick={() => handleTabClick('Fale Conosco')}>
          Fale Conosco
        </div>
       
       <div className={`header-tab ${activeTab === 'Nossos Projetos' ? 'active' : ''}`} onClick={() => handleTabClick('Nossos Projetos')}>
          Nossos Projetos
        </div>
        
      </div>
      
    </div>
  );
}

export default Header;
