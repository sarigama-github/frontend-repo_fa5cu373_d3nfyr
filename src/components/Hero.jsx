import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail } from 'lucide-react'

const social = [
  { icon: Github, href: 'https://github.com/Sushantmishra2002', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sushant-mishra-9b6423293/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sushantmishra.ctr@gmail.com', label: 'Email' },
]

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-white/40 border border-white/60 rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_-10px_rgba(30,64,175,0.25)]"
        >
          <p className="text-sm tracking-wider uppercase text-blue-700/90 font-semibold">Sushant Kumar Mishra</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            Full-Stack Developer • Data Analyst
          </h1>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl">
            I build reliable web apps and data products — blending modern frontends, robust backends, and insightful analytics.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Contact Me</a>
            <a href="http://sushantmishra.com.np/?i=1" target="_blank" className="px-5 py-3 rounded-xl bg-white/70 text-gray-900 font-semibold border border-gray-200 shadow hover:bg-white transition">Download Resume</a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" aria-label={s.label} className="p-2 rounded-full bg-white/70 border border-gray-200 shadow hover:scale-105 transition">
                <s.icon className="w-5 h-5 text-gray-900" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
