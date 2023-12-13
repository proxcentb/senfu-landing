'use client'

import projectsMap from '@/projects.jsx';

export default function Project({ params }) {
  const project = projectsMap[params.name];

  if (!project) {
    return (
      <div className="flex flex-col items-center space-y-5 justify-center h-screen">
        Project not found <br />
        <a href="/#portfolio" className="bg-white text-c2 px-6 py-3 rounded font-bold w-fit">Return</a>
      </div>
    )
  }

  return (
    <div className='mt-16 flex flex-col justify-center items-center'>
      <span className='font-bold'>{project.title}</span>
      <span className='px-2'>You can find our work on their website in "Apartment" section, like <a target="_blank" className="underline" href={project.link}>here</a>.{project.description}</span>
      <span className='px-2'>We display only a few panoramas since projects are usually pretty big in size :)</span>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10 px-2 md:px-5 lg:px-10 xl:px-40 2xl:px-60 w-full">
        {project.views.map(src => <iframe className='w-full h-96 bg-white' src={src} allowFullScreen />)}
      </div>
    </div>
  );
}
