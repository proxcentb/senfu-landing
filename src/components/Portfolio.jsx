import projectsMap from '@/projects';

export default function PortfolioSection() {
  return (
    <div className="px-2 md:px-10 lg:px-20 xl:px-40 2xl:px-80" id="portfolio">
      <h2 className="text-4xl md:text-left font-bold mb-4 text-white">Portfolio of Successful Projects</h2>
      Explore our portfolio to witness the breadth and quality of our work. Each project is a testament to our commitment to excellence in visualization.
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-5">
        {Object.entries(projectsMap).map(([ path, name ]) => (
          <a key={name} className="border" href={path}>
            <div className="w-full h-52 bg-gray-300"></div>
            <h3 className="p-2 text-lg font-semi-bold">{name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
