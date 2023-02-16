import React from 'react';
import './Portifolio.css';
import linkLogo from  "../img/linkLogo.png"

function Portfolio() {
  return (

    <div>

        <img src={linkLogo} alt="linkLogo"  className="linkImg"/>
        
      <h1 className="portfolio-heading">Link Marketing Digital</h1>

      <p className="portfolio-description">Aqui estão alguns exemplos de nossos trabalhos recentes:</p>

      <div className="portfolio-items">

        <div className="portfolio-item">
          <h2 className="portfolio-item-title">Campanha de Mídia Social</h2>
          <img className="portfolio-item-image" src=" " alt="Campanha de Mídia Social" />
          <p className="portfolio-item-description">Descrição da campanha de mídia social.</p>
        </div>

        <div className="portfolio-item">
          <h2 className="portfolio-item-title">SEO para Site de Clínica Médica</h2>
          <img className="portfolio-item-image" src=" " alt="trabalho de Clínica Médica" />
          <p className="portfolio-item-description">Descrição do trabalho de Clínica Médica</p>
        </div>

        <div className="portfolio-item">
          <h2 className="portfolio-item-title">Criação de Conteúdo para Escritório de Arquitetura</h2>
          <img className="portfolio-item-image" src=" " alt="Criação de Conteúdo para Escritório de Arquitetura" />
          <p className="portfolio-item-description">Descrição da criação de conteúdo para Escritório de Arquitetura.</p>
        </div>

        <div className="portfolio-item">
          <h2 className="portfolio-item-title">Criação de App para Cliente</h2>
          <img className="portfolio-item-image" src=" " alt="Criação de App para Cliente" />
          <p className="portfolio-item-description">Descrição da criação de Criação de App para Cliente.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
