import Navbar from './components/Navbar';
import Publications from './components/Publications';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <div className="relative pb-20">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-28 space-y-28 scroll-smooth">
        {/* HERO SECTION */}
        <AnimatedSection className="relative min-h-[75vh] flex items-center" id="home">
          <div className="absolute inset-0 -z-10">
            {/* Extra glow layers to match the reference style */}
            <div className="absolute -left-20 -top-10 w-80 h-80 bg-gradient-to-br from-blue-500/40 via-purple-500/20 to-transparent blur-[140px]" />
            <div className="absolute -right-16 top-32 w-96 h-96 bg-gradient-to-tr from-pink-500/30 via-indigo-500/10 to-transparent blur-[160px]" />
          </div>

          <div className="w-full">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
              WELCOME
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-blue-500/90 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400/90"
              >
                LEARN MORE
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold tracking-wide text-white/80 transition hover:text-white hover:border-white"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* ABOUT SECTION */}
        <AnimatedSection id="about" className="space-y-6">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase underline underline-offset-8">
            ABOUT US
          </h2>
          <p className="text-zinc-300 max-w-3xl leading-relaxed">
            This portfolio is built to showcase a modern, neon-infused UI style with clean navigation, bold headings, and an immersive background.
          </p>
        </AnimatedSection>

        {/* PUBLICATIONS SECTION */}
        <AnimatedSection id="publications" className="space-y-6">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase underline underline-offset-8">
            RESEARCH &amp; PUBLICATIONS
          </h2>
          <Publications />
        </AnimatedSection>

        {/* CONTACT SECTION */}
        <AnimatedSection id="contact" className="space-y-6">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase underline underline-offset-8">
            CONTACT
          </h2>
          <p className="text-zinc-300 max-w-3xl leading-relaxed">
            Want to work together or have a question? Reach out via email at <a className="text-blue-400 hover:text-white" href="mailto:hello@company.com">hello@company.com</a>.
          </p>
        </AnimatedSection>

        {/* FAQ SECTION */}
        <AnimatedSection id="faq" className="space-y-6">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase underline underline-offset-8">
            FAQ
          </h2>
          <div className="space-y-4 text-zinc-300">
            <div>
              <p className="font-semibold">What is this portfolio built with?</p>
              <p className="text-zinc-400">This is a Next.js app styled using Tailwind CSS with a neon-inspired theme.</p>
            </div>
            <div>
              <p className="font-semibold">How do I customize the background?</p>
              <p className="text-zinc-400">Edit <code className="rounded bg-white/10 px-1 py-0.5">src/app/globals.css</code> and tweak the gradients + blur layers.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* SIGN IN SECTION */}
        <AnimatedSection id="signin" className="space-y-6">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase underline underline-offset-8">
            SIGN IN
          </h2>
          <p className="text-zinc-300 max-w-2xl leading-relaxed">
            This is a placeholder sign-in section. Integrate your auth provider (e.g. NextAuth) here to enable secure access.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-500/20 transition hover:bg-white/15"
          >
            SIGN IN
          </a>
        </AnimatedSection>

        {/* FOOTER */}
        <footer className="border-t border-white/10 pt-10 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} COMPANY. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
