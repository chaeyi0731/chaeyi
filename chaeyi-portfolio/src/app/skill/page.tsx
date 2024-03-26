'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../component/navbar';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true, // 자동 재생 활성화
  autoplaySpeed: 4000, // 2초마다 슬라이드 전환
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <div className="rootDiv">
          <div>
            <h1>Skills</h1>
            <Navbar activeMenu="Skill" />
            <div className="skillWidgets">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="skillCategory">
                  <p>{category}</p>
                  <Slider {...settings}>
                    {skills.map((skill) => (
                      <div key={skill.id} className="skill">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                          <Image src={skill.image} alt={skill.name} width={100} height={100} />
                        </div>
                        <p>{skill.name}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Skills;
