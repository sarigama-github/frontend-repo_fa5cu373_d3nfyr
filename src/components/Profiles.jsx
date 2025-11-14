import { Code2, Medal } from 'lucide-react'

function Profiles() {
  const profiles = [
    { name: 'LeetCode: 250+ problems solved', url: 'https://leetcode.com/u/sushantkumarmishra2023cse/' },
    { name: 'CodeChef: Rating 964', url: 'https://www.codechef.com/users/maihoonsushant' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/sushantkumarmis1' },
  ]

  const achievements = [
    'Certificate of Participation — AI/ML Challenge, IIT Madras',
    'Built multiple successful production-level applications',
    'Strong problem-solving: 250+ LeetCode, 300+ CodeChef, 150+ HackerRank problems',
  ]

  return (
    <section id="profiles" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/70 bg-white/60 backdrop-blur p-6 shadow-[0_8px_30px_rgba(31,38,135,0.08)]">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Code2 className="w-6 h-6"/> Coding Profiles</h3>
          <ul className="space-y-3">
            {profiles.map((p) => (
              <li key={p.url}>
                <a href={p.url} target="_blank" className="px-4 py-3 rounded-xl bg-white/70 border border-gray-200 text-blue-700/90 font-medium inline-block hover:bg-white transition">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/70 bg-white/60 backdrop-blur p-6 shadow-[0_8px_30px_rgba(31,38,135,0.08)]">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Medal className="w-6 h-6"/> Achievements</h3>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a} className="px-4 py-3 rounded-xl bg-white/70 border border-gray-200 text-gray-800">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Profiles
