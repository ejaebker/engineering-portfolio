import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white/80">
            <span className="block w-2 h-2 rounded-full bg-blue-400" />
          </span>
          <span className="text-sm font-semibold tracking-widest text-white/80">COMPANY</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link href="/" className="hover:text-white transition">
            HOME
          </Link>
          <Link href="#about" className="hover:text-white transition">
            ABOUT US
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            CONTACT US
          </Link>
          <Link href="#faq" className="hover:text-white transition">
            FAQ
          </Link>
        </div>

        <div className="hidden md:block">
          <a
            href="#signin"
            className="text-sm font-medium px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition"
          >
            SIGN IN
          </a>
        </div>
      </div>
    </nav>
  );
}
