"use client";
import { useEffect } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    gameOfLifeCanvasId?: string;
  }
}

export default function Page() {
  const projects = [
    {
      name: "Research",
      link: "/projects/research",
      content: <img src="/projects/img/research/goes-look-angles.png" alt="Research" className="w-full h-full object-cover" />,
    },
    {
      name: "Game of Life",
      link: "/projects/game-of-life",
      content: <canvas id="game-of-life" className="w-full h-full"></canvas>,
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.gameOfLifeCanvasId = 'game-of-life';
      import('../../public/projects/game_of_life/index.js');
    }
  }, []);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Link key={index} href={project.link} className="border border-gray-300 rounded-lg shadow-md p-4">
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              {project.content}
            </div>
            <h2 className="mt-2 text-center">{project.name}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
