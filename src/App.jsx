import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ExperienceEducation from './components/ExperienceEducation'
import Certifications from './components/Certifications'
import Profiles from './components/Profiles'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-white/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">Sushant<span className="text-blue-600">.</span></a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#skills" className="hover:text-blue-700/90">Skills</a>
            <a href="#projects" className="hover:text-blue-700/90">Projects</a>
            <a href="#experience" className="hover:text-blue-700/90">Experience</a>
            <a href="#certs" className="hover:text-blue-700/90">Certifications</a>
            <a href="#profiles" className="hover:text-blue-700/90">Profiles</a>
            <a href="#contact" className="hover:text-blue-700/90">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-2xl border border-white/70 bg-white/60 backdrop-blur p-6 shadow-[0_8px_30px_rgba(31,38,135,0.08)]">
              <h3 className="text-2xl font-bold">About Me</h3>
              <p className="mt-2 text-gray-700">
                I’m Sushant Kumar Mishra from Coimbatore, India. I craft modern, performant web applications and data-driven dashboards. I love solving problems, building products end-to-end, and shipping delightful user experiences.
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-xl bg-white border border-gray-200">Email: <a className="text-blue-700/90" href="mailto:sushantmishra.ctr@gmail.com">sushantmishra.ctr@gmail.com</a></div>
                <div className="p-3 rounded-xl bg-white border border-gray-200">Phone: <a className="text-blue-700/90" href="tel:+918969903662">+91 8969903662</a></div>
                <a className="p-3 rounded-xl bg-white border border-gray-200 text-blue-700/90" target="_blank" href="https://www.linkedin.com/in/sushant-mishra-9b6423293/">LinkedIn</a>
                <a className="p-3 rounded-xl bg-white border border-gray-200 text-blue-700/90" target="_blank" href="https://github.com/Sushantmishra2002">GitHub</a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/60 backdrop-blur p-6 shadow-[0_8px_30px_rgba(31,38,135,0.08)]">
              <h3 className="text-2xl font-bold">Highlights</h3>
              <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                <li>Full-Stack Developer / Data Analyst</li>
                <li>250+ LeetCode, 300+ CodeChef, 150+ HackerRank problems</li>
                <li>Built multiple production-level apps</li>
              </ul>
              <a href="#projects" className="mt-4 inline-block px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">View Projects</a>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <ExperienceEducation />
        <Certifications />
        <Profiles />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Sushant Kumar Mishra. All rights reserved.
      </footer>
    </div>
  )
}

export default App
