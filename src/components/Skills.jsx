import { motion } from 'framer-motion'

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm mr-2 mb-2 shadow-sm">
    {children}
  </span>
)

function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS', 'SQL', 'R'],
    },
    {
      title: 'Core Concepts',
      items: ['Data Structures & Algorithms', 'OOPS', 'DBMS'],
    },
    {
      title: 'Frameworks & Libraries',
      items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Bootstrap', 'jQuery'],
    },
    {
      title: 'Tools & Platforms',
      items: ['VS Code', 'GitHub', 'Replit', 'Eclipse', 'Cursor', 'Power BI', 'Tableau', 'Excel', 'Firebase', 'MongoDB', 'Google Maps API', 'ZegoCloud', 'Piston API'],
    },
    {
      title: 'Data Analytics',
      items: ['Data Cleaning', 'Data Wrangling', 'ETL', 'Data Visualization', 'Statistical Analysis'],
    },
  ]

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="backdrop-blur bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-3">{cat.title}</h3>
              <div>
                {cat.items.map((it) => (
                  <Badge key={it}>{it}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
