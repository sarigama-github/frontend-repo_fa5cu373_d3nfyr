import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Your message has been noted.')
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">Contact</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea rows="5" required placeholder="Your Message" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-400 transition">Send Message</button>
            {status && <p className="text-emerald-400 font-medium">{status}</p>}
          </form>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)] space-y-3 text-slate-200">
          <div className="flex items-center gap-3"><MapPin className="w-5 h-5"/> Coimbatore, India</div>
          <a href="mailto:sushantmishra.ctr@gmail.com" className="flex items-center gap-3 text-blue-300"><Mail className="w-5 h-5"/> sushantmishra.ctr@gmail.com</a>
          <a href="tel:+918969903662" className="flex items-center gap-3 text-blue-300"><Phone className="w-5 h-5"/> +91 8969903662</a>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://github.com/Sushantmishra2002" target="_blank" className="p-2 rounded-full bg-white/10 border border-white/10 shadow"><Github className="w-5 h-5"/></a>
            <a href="https://www.linkedin.com/in/sushant-mishra-9b6423293/" target="_blank" className="p-2 rounded-full bg-white/10 border border-white/10 shadow"><Linkedin className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
