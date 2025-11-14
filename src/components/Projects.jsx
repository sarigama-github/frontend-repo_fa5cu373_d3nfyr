import { motion } from 'framer-motion'

const projects = [
  {
    title: 'VideoCall App – Real-Time Video Conferencing Platform',
    stack: 'React, ZegoCloud, CSS',
    desc: 'Scalable video conferencing platform supporting multiple meetings with smooth UI and real-time collaboration.',
    live: 'https://videocallapp-38lvwlswn-sushant-kumar-mishras-projects.vercel.app/',
    code: 'https://github.com/Sushantmishra2002/VideoCallApp',
    thumb: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'CampusWay – Educational & College Selection Platform (SIH Project)',
    stack: 'HTML, CSS, JavaScript, Bootstrap, React, Node.js, Express.js, SQL',
    desc: 'Helps students choose colleges with analytics. Built end-to-end with full frontend + backend.',
    live: 'https://github.com/Sushantmishra2002/CampusWay-Project',
    code: 'https://github.com/Sushantmishra2002/CampusWay-Project',
    thumb: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'ProgEx – In-Browser Code Executor Chrome Extension',
    stack: 'JavaScript, HTML/CSS, Chrome Extension APIs, Piston API',
    desc: 'Run code from any webpage without an IDE. Boosts developer productivity.',
    live: 'https://github.com/Sushantmishra2002/ProgEx-Compiler_Extenstion_for_Browser.git',
    code: 'https://github.com/Sushantmishra2002/ProgEx-Compiler_Extenstion_for_Browser.git',
    thumb: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'AI-Based Career Guidance Platform',
    stack: 'React.js, Node.js, Express, Firebase, Tailwind, Gemini AI, Google Maps API',
    desc: 'Personalised AI-based career insights with resume builder, career roadmap, and tech stack analyzer.',
    live: 'https://github.com/Sushantmishra2002',
    code: 'https://github.com/Sushantmishra2002',
    thumb: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'E-Commerce Sales Dashboard (Data Analytics Project)',
    stack: 'Excel, Python, Power BI',
    desc: 'Analyzed 600+ transactions and built dashboards for revenue trends and product performance.',
    live: 'https://github.com/Sushantmishra2002/E-Commerce-Sales-Data-Dashboard-PowerBI',
    code: 'https://github.com/Sushantmishra2002/E-Commerce-Sales-Data-Dashboard-PowerBI',
    thumb: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Telecom Churn Prediction',
    stack: 'Python, Power BI',
    desc: 'Built churn prediction ML model and designed dashboards for tracking churn.',
    live: 'https://github.com/Sushantmishra2002/Telecom-Customer-Churn-Analysis-Prediction',
    code: 'https://github.com/Sushantmishra2002/Telecom-Customer-Churn-Analysis-Prediction',
    thumb: 'https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'HR Analytics – Employee Attrition Dashboard',
    stack: 'SQL, Tableau, Python',
    desc: 'Comprehensive attrition analytics and insights.',
    live: 'https://github.com/Sushantmishra2002/HR-Analytics-Employee-Attrition-Dashboard',
    code: 'https://github.com/Sushantmishra2002/HR-Analytics-Employee-Attrition-Dashboard',
    thumb: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Netflix/YouTube Content Analysis Dashboard',
    stack: 'Python, Excel, Power BI',
    desc: 'Content analytics dashboards and insights.',
    live: 'https://github.com/Sushantmishra2002/Netflix-Content-Analysis',
    code: 'https://github.com/Sushantmishra2002/Netflix-Content-Analysis',
    thumb: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop'
  },
]

function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-slate-100 mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(56,189,248,0.25)] transition"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.thumb} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-100">{p.title}</h3>
                <p className="text-sm text-blue-300 mt-1">{p.stack}</p>
                <p className="text-slate-300 mt-2 text-sm">{p.desc}</p>
                <div className="mt-4 flex gap-3">
                  <a href={p.live} target="_blank" className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-400 transition">Live</a>
                  <a href={p.code} target="_blank" className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-slate-100 text-sm font-semibold hover:bg-white/15 transition">Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
