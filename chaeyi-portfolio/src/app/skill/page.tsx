'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../component/navbar';
import Slider from 'react-slick';
import Image from 'next/image'; // Image 컴포넌트를 import 합니다.
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

interface Skill {
  id: number;
  name: string;
  image: string;
}

interface SkillsData {
  [category: string]: Skill[];
}

const categories = ['language', 'frontend', 'backend', 'database', 'hosting', 'versionControl'];

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<SkillsData>({});

  useEffect(() => {
    const loadSkills = async () => {
      const loadedSkills: SkillsData = {};

      await Promise.all(
        categories.map(async (category) => {
          const data = await import(`../../../public/skillJson/${category}.json`);
          loadedSkills[category] = data.default;
        })
      );

      setSkillsData(loadedSkills);
    };

    loadSkills();
  }, []);

  return (
    <main>
      <div className="rootDiv">
        <Navbar activeMenu="Skill" />
        <h1>Skills</h1>
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skillCategory">
            <h2>{category}</h2>
            <Slider {...settings}>
              {skills.map((skill) => (
                <div key={skill.id} className="skill">
                  <div className="imageContainer">
                    <Image src={skill.image} alt={skill.name} width={100} height={100} objectFit="cover" />
                  </div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
