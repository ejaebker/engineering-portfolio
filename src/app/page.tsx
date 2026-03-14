import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 pt-32">
        {/* HERO SECTION */}
        <section className="py-20 border-l-2 border-blue-500 pl-8 ml-2">
          <h1 className="text-5xl font-bold mb-6 font-mono tracking-tighter">
            ELECTRICAL <br />
            <span className="text-blue-500 underline"></span> ENGINEER
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Specializing in embedded systems, power electronics, and scalable 
            web architecture. Currently building at the intersection of bits and atoms.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-mono text-sm transition-all">
              VIEW_REPOS
            </button>
            <button className="border border-zinc-700 hover:border-zinc-500 px-6 py-2 rounded-md font-mono text-sm transition-all">
              DOWNLOAD_CV
            </button>
          </div>
        </section>

        {/* PROJECT SECTION HEADER */}
        <section id="projects" className="py-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold font-mono uppercase tracking-widest">Active Projects</h2>
            <div className="h-[px] flex-1 bg-zinc-800"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* We will build a ProjectCard component next to go here */}
            <div className="h-64 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center italic text-zinc-600">
              Project Component Pending...
            </div>
            <div className="h-64 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center italic text-zinc-600">
              Project Component Pending...
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}