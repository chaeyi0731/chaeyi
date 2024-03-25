'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../component/navbar';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projectsData from '@/projectJson/project.json';

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // JSON 파일에서 프로젝트 데이터를 불러옵니다.
  const [projects, setProjects] = useState(projectsData.projects);

  return (
    <main>
      <div className="rootDiv">
        <Navbar activeMenu="Project" />
        <h1>Projects</h1>
        <div className="skillWidgets">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="projectSlide">
                <div className="projectImage">
                  <Slider {...settings}>
                    <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" />
                  </Slider>
                </div>
                <div className="projectInfo">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="projectLinks">
                    {project.githubURL && (
                      <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="githubLink">
                        GitHub
                      </a>
                    )}
                    {project.blogURL && (
                      <a href={project.blogURL} target="_blank" rel="noopener noreferrer" className="readMoreLink">
                        Read More
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
};

export default Project;
