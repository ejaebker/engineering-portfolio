import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono font-bold text-blue-500">EJ_SYSTEMS_v1.0</span>
        <div className="space-x-8 font-mono text-sm">
          <Link href="/" className="hover:text-blue-400 transition-colors">HOME</Link>
          <Link href="#projects" className="hover:text-blue-400 transition-colors">PROJECTS</Link>
          <Link href="#about" className="hover:text-blue-400 transition-colors">ABOUT</Link>
        </div>
      </div>
    </nav>
  );
}