'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

import Modal from 'react-modal';
import Navbar from '../../component/navbar';

interface Project {
  id: number;
  name: string;
  image: string;
  githubURL?: string;
  projectURL?: string;
  blogURL?: string;
  description: string;
  frontend?: { technologies: string[] };
  backend?: { technologies: string[] };
  database?: { technologies: string[] };
  deployment?: { technologies: string[] };
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // 선택된 프로젝트 상태 추가

  useEffect(() => {
    // 이 경로는 실제 프로젝트에 맞게 조정해야 합니다.
    import('@/projectJson/project.json')
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((err) => console.error('Failed to load project data:', err));
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <main>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <div className="rootDiv">
          <h1>Projects</h1>
          <div>
            <Navbar activeMenu="Project" />
            <div className="skillWidgets">
              <div className="gallery">
                {projects.map((project) => (
                  <div key={project.id} className="gallery-item">
                    <div onClick={() => openModal(project)}>
                      <img src={project.image} alt={project.name} style={{ width: '100%', height: 'auto' }} />
                      <h2>{project.name}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Modal isOpen={!!selectedProject} onRequestClose={closeModal} contentLabel="Project Modal" className="project-modal" overlayClassName="project-modal-overlay">
              {selectedProject && (
                <div className="modal">
                  <div className="modal-content">
                    <div className="modal-left">
                      <h2>{selectedProject.name}</h2>
                      <img src={selectedProject.image} alt={selectedProject.name} />
                    </div>
                    <div className="modal-right">
                      <div className="font">
                        <p>{selectedProject.description}</p>
                        {selectedProject.githubURL && (
                          <button onClick={() => window.open(selectedProject.githubURL, '_blank')} className="button-git">
                            Github
                          </button>
                        )}
                        {selectedProject.projectURL && (
                          <button onClick={() => window.open(selectedProject.projectURL, '_blank')} className="button-project">
                            Project Site
                          </button>
                        )}
                        {selectedProject.blogURL && (
                          <button onClick={() => window.open(selectedProject.blogURL, '_blank')} className="button-read">
                            ReadMore
                          </button>
                        )}
                        <div>
                          <h3>Frontend:</h3>
                          <ul>
                            {selectedProject.frontend?.technologies.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </ul>
                          <h3>Backend:</h3>
                          <ul>
                            {selectedProject.backend?.technologies.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </ul>
                          <h3>Database:</h3>
                          <ul>
                            {selectedProject.database?.technologies.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </ul>
                          <h3>배포:</h3>
                          <ul>
                            {selectedProject.deployment?.technologies.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <button className="modal-button" onClick={closeModal}>
                      ❌
                    </button>
                  </div>
                </div>
              )}
            </Modal>
          </div>
        </div>
      </motion.main>
    </main>
  );
};

export default Projects;
