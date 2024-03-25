// pages/projects/[id].tsx
'use client';

import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface ProjectDetails {
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

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<ProjectDetails | null>(null);

  useEffect(() => {
    if (id) {
      // 클라이언트 측에서 데이터를 가져오는 로직
      fetch(`/api/projects/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProject(data);
        })
        .catch((error) => {
          console.error('Failed to fetch project data:', error);
        });
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      {/* 프로젝트 세부 정보 표시 */}
      <p>{project.description}</p>
      {/* 돌아가기 버튼 */}
      <Link href="/projects" passHref>
        <a>Back to Projects</a>
      </Link>
    </div>
  );
};

export default ProjectDetail;
