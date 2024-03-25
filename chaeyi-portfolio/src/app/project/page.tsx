'use client';

import Navbar from '../../component/navbar';

const Project = () => {
  return (
    <main>
      <div className="rootDiv">
        <h1>Projects</h1>
        <div>
          <Navbar activeMenu="Project" />
          <div className="skillWidgets"></div>
        </div>
      </div>
    </main>
  );
};

export default Project;
