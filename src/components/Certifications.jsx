import { useState, useEffect, useRef } from 'react'

const items = [
  'Get Started with Data Analytics — Microsoft (2025)',
  'Power BI — Microsoft (2025)',
  'Python — HackerRank',
  'SQL — HackerRank',
  'JavaScript, Web Development — Udemy',
  'DSA in C & C++ — EduPyramids, IIT Bombay',
  'MERN Stack Internship — Better Tomorrow',
  'Full-Stack TypeScript + Next.js Internship — Algotutor',
]

function Certifications() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, 2500)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <section id="certs" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-white/70 bg-white/60 backdrop-blur p-6 shadow-[0_8px_30px_rgba(31,38,135,0.08)]">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
          <div className="relative overflow-hidden">
            <div className="whitespace-nowrap transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
              <div className="inline-flex gap-4">
                {items.map((it) => (
                  <div key={it} className="min-w-full">
                    <div className="px-4 py-3 rounded-xl bg-gradient-to-br from-white/80 to-white/40 border border-white/70 shadow text-gray-900">
                      {it}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
