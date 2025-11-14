import { motion } from 'framer-motion'

const experiences = [
  // No explicit internships provided; keeping section ready for future roles
]

const education = [
  { title: 'B.E. Computer Science and Engineering — Sri Eshwar College of Engineering', meta: 'CGPA: 8.0 (up to 4th Sem)' },
  { title: 'HSC — Laxmi Kishori College', meta: '70%' },
  { title: 'SSLC — Damodar Academy', meta: '84%' },
]

function TimelineItem({ item }) {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow" />
      <h4 className="font-semibold text-slate-100">{item.title}</h4>
      {item.meta && <p className="text-sm text-slate-400 mt-1">{item.meta}</p>}
    </div>
  )
}

function ExperienceEducation() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-2">Experience / Internships</h3>
          <div className="border-l-2 border-blue-900/40 pl-4">
            {experiences.length === 0 ? (
              <p className="text-slate-400">Coming soon — ready to add your upcoming roles.</p>
            ) : (
              experiences.map((e) => <TimelineItem key={e.title} item={e} />)
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-2">Education</h3>
          <div className="border-l-2 border-blue-900/40 pl-4">
            {education.map((e) => <TimelineItem key={e.title} item={e} />)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceEducation
