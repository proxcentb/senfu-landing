export default function PortfolioSection() {
  return (
    <div className="p-8 px-80" id="portfolio">
      <h2 className="text-5xl font-bold mb-4 text-white">Portfolio of Successful Projects</h2>
      Explore our portfolio to witness the breadth and quality of our work. Each project is a testament to our commitment to excellence in visualization.
      <div className="grid grid-cols-2 gap-4 mt-10">
        {[
          { title: 'Fyrstikkbakken', },
          { title: 'Fyrstikkbakken', },
          { title: 'Fyrstikkbakken', },
          { title: 'Fyrstikkbakken', },
        ].map(item => (
          <div key={item.title} className="border">
            <div className="w-full h-52 bg-gray-300"></div> {/* Placeholder for image */}
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
