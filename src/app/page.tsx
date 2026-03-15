import Navbar from './components/Navbar';
import Publications from './components/Publications';
import Projects from './components/Projects';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <div className="relative pb-20">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-28 space-y-28 scroll-smooth">
        {/* HERO SECTION */}
        <AnimatedSection className="relative min-h-[75vh] flex items-center" id="home">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -left-20 -top-10 w-80 h-80 bg-linear-to-br from-blue-500/40 via-purple-500/20 to-transparent blur-[140px]" />
            <div className="absolute -right-16 top-32 w-96 h-96 bg-linear-to-tr from-pink-500/30 via-indigo-500/10 to-transparent blur-[160px]" />
          </div>

          <div className="w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Info */}
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                Eric Jaebker
              </h1>
              <p className="text-lg text-blue-400 font-semibold mb-4">
                Electrical Engineer | Researcher | Builder
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                I&apos;m passionate about building elegant solutions to complex problems. With a background in software engineering and research, I combine technical depth with creative problem-solving.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500/90 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400/90"
                >
                  LINKEDIN
                </a>
                <a
                  href="/cv.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold tracking-wide text-white/80 transition hover:text-white hover:border-white hover:bg-white/10"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>

            {/* Right: Profile Picture Placeholder */}
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-2xl bg-linear-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <p className="text-zinc-400 font-mono text-sm">Your Photo Here</p>
                  <p className="text-zinc-500 text-xs mt-2">Replace with your profile image</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ABOUT SECTION */}
        <AnimatedSection id="about" className="space-y-6">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase underline underline-offset-8">
            ABOUT ME
          </h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>
              I&apos;m a passionate developer and researcher with expertise in full-stack development, machine learning, and open-source contributions. My journey in tech has been driven by curiosity and a desire to create meaningful impact.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community through writing and speaking engagements.
            </p>
          </div>
        </AnimatedSection>

        {/* PROJECTS SECTION */}
        <AnimatedSection id="projects" className="space-y-6">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase underline underline-offset-8">
            FEATURED PROJECTS
          </h2>
          <Projects />
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
            GET IN TOUCH
          </h2>
          <p className="text-zinc-300 max-w-3xl leading-relaxed">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out for collaboration or just a friendly chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="ejaebker@purdue.edu"
              className="inline-flex items-center justify-center rounded-full bg-blue-500/90 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400/90"
            >
              EMAIL ME
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold tracking-wide text-white/80 transition hover:text-white hover:border-white hover:bg-white/10"
            >
              CONNECT ON LINKEDIN
            </a>
          </div>
        </AnimatedSection>

        {/* FOOTER */}
        <footer className="border-t border-white/10 pt-10 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Eric Jaebker. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
