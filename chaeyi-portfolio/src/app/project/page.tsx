'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
      <div className="rootDiv">
        <h1>Projects</h1>
        <div>
          <Navbar activeMenu="Project" />
          <div className="skillWidgets">
            <div className="gallery">
              {projects.map((project) => (
                <div key={project.id} className="gallery-item">
                  <div onClick={() => openModal(project)}>
                    {' '}
                    {/* 모달 열기 이벤트 핸들러 추가 */}
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
                  <div>
                    <h2>{selectedProject.name}</h2>
                    <img src={selectedProject.image} alt={selectedProject.name} />
                  </div>
                  <div className="modal-content-description">
                    <p>{selectedProject.description}</p>
                    <button onClick={closeModal}>Close</button>
                  </div>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </main>
  );
};

export default Projects;
