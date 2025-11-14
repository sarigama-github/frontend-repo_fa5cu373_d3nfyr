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
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_10px_50px_-10px_rgba(56,189,248,0.25)]"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0">
              <img
                src="https://lh3.googleusercontent.com/gg-dl/ABS2GSmeV5dUDb9uXscaY6DmzyD1h6jujfrRMGa20RzyZLG9HuMK5Psrap9rEk_pFIpQFv2dEoExJY2MhQxj_bpFNtdmXKl8akRgHuEPG2nsNEG3kzDNw_k0Rx1H-M5p3pcFR5vwPO8HCed8wocVbsZQxp1uCngw_PnJkU1OL79825UV3Fgq4A=s1024-rj"
                alt="Sushant Kumar Mishra"
                className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover ring-1 ring-white/20 shadow-lg shadow-blue-500/10"
              />
            </div>
            <div>
              <p className="text-sm tracking-wider uppercase text-blue-300 font-semibold">Sushant Kumar Mishra</p>
              <h1 className="mt-3 text-4xl md:text-6xl font-black text-slate-100 leading-tight">
                Full-Stack Developer • Data Analyst
              </h1>
              <p className="mt-4 text-slate-300 text-lg max-w-2xl">
                I build reliable web apps and data products — blending modern frontends, robust backends, and insightful analytics.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#contact" className="px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow hover:bg-blue-400 transition">Contact Me</a>
                <a href="http://sushantmishra.com.np/?i=1" target="_blank" className="px-5 py-3 rounded-xl bg-white/10 text-slate-100 font-semibold border border-white/10 shadow hover:bg-white/15 transition">Download Resume</a>
              </div>

              <div className="mt-6 flex items-center gap-4">
                {social.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" aria-label={s.label} className="p-2 rounded-full bg-white/10 border border-white/10 shadow hover:scale-105 transition">
                    <s.icon className="w-5 h-5 text-slate-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
