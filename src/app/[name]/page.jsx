import projectsMap from '@/projects';

export default function Project({ params }) {
  if (!projectsMap[params.name]) {
    return (
      <div className="flex flex-col items-center space-y-5 justify-center h-screen">
        Project not found <br />
        <a href="/#portfolio" className="bg-white text-c2 px-6 py-3 rounded font-bold w-fit">Return</a>
      </div>
    )
  }

  return (
    <div className='mt-16 flex flex-col justify-center items-center'>
      <span className='font-bold'>{projectsMap[params.name]}</span>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10 px-2 md:px-5 lg:px-10 xl:px-40 2xl:px-60 w-full">
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
        <div className='w-full h-96 bg-white' />
      </div>
    </div>
  );
}
