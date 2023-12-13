import projectsMap from '@/projects.jsx';

export default function PortfolioSection() {
  return (
    <div className="w-full px-2 md:px-10 lg:px-20 xl:px-40 2xl:px-80" id="portfolio">
      <h2 className="text-4xl md:text-left font-bold mb-4 text-white">Portfolio of Successful Projects</h2>
      Explore our portfolio to witness the breadth and quality of our work. It is only a small part of our works, but each project is a testament to our commitment to excellence in visualization.
      <div className="flex flex-row overflow-auto w-full md:grid gap-4 md:grid-cols-2 mt-5">
        {Object.entries(projectsMap).map(([ path, project ]) => (
          <a key={path} className="border" href={path}>
            <img className="w-full h-52 bg-gray-300 object-cover min-w-270" src={project.preview} />
            <h3 className="p-2 text-lg font-semi-bold">{project.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
