'use client';

// pages/projects/index.tsx

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

  useEffect(() => {
    // 이 경로는 실제 프로젝트에 맞게 조정해야 합니다.
    import('@/projectJson/project.json')
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((err) => console.error('Failed to load project data:', err));
  }, []);

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
                  <Link href={`/projects/${project.id}`} passHref>
                    <div>
                      <img src={project.image} alt={project.name} style={{ width: '100%', height: 'auto' }} />
                      <h2>{project.name}</h2>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
