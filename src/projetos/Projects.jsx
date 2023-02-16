import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Projeto 1',
      image: '',
      description: 'Descrição do projeto 1',
    },
    {
      id: 2,
      title: 'Projeto 2',
      image: '',
      description: 'Descrição do projeto 2',
    },
    {
      id: 3,
      title: 'Projeto 3',
      image: '',
      description: 'Descrição do projeto 3',
    },
    {
      id: 4,
      title: 'Projeto 4',
      image: '',
      description: 'Descrição do projeto 4',
    },
    {
      id: 5,
      title: 'Projeto 5',
      image: '',
      description: 'Descrição do projeto 5',
    },
    {
      id: 6,
      title: 'Projeto 6',
      image: '',
      description: 'Descrição do projeto 6',
    },
  ];

  return (
    <div className="projects">
      <h2>Nossos Projetos</h2>
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.id}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
