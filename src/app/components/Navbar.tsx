import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white/80">
            <span className="block w-2 h-2 rounded-full bg-blue-400" />
          </span>
          <a href="#home" className="text-sm font-semibold tracking-widest text-white/80 hover:text-white transition">
            PORTFOLIO
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link href="#home" className="hover:text-white transition">
            HOME
          </Link>
          <Link href="#about" className="hover:text-white transition">
            ABOUT
          </Link>
          <Link href="#projects" className="hover:text-white transition">
            PROJECTS
          </Link>
          <Link href="#publications" className="hover:text-white transition">
            PUBLICATIONS
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            CONTACT
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 text-white/60 hover:text-blue-400 transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.806 0-9.722h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.384 3.704 4.362v5.58zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.77-1.71 1.963-1.71 1.192 0 1.925.75 1.937 1.71 0 .947-.745 1.705-1.985 1.705zm1.946 11.597H3.392V9.626h3.891v10.826zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z"/>
            </svg>
          </a>
          <a
            href="/cv.pdf"
            className="text-sm font-medium px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
}
