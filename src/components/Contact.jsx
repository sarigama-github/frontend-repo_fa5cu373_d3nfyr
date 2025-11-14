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
        <div className="rounded-2xl border border-white/70 bg-white/60 backdrop-blur p-6 shadow-[0_8px_30px_rgba(31,38,135,0.08)]">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <input type="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <textarea rows="5" required placeholder="Your Message" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <button className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Send Message</button>
            {status && <p className="text-green-700 font-medium">{status}</p>}
          </form>
        </div>

        <div className="rounded-2xl border border-white/70 bg-white/60 backdrop-blur p-6 shadow-[0_8px_30px_rgba(31,38,135,0.08)] space-y-3">
          <div className="flex items-center gap-3"><MapPin className="w-5 h-5"/> Coimbatore, India</div>
          <a href="mailto:sushantmishra.ctr@gmail.com" className="flex items-center gap-3 text-blue-700/90"><Mail className="w-5 h-5"/> sushantmishra.ctr@gmail.com</a>
          <a href="tel:+918969903662" className="flex items-center gap-3 text-blue-700/90"><Phone className="w-5 h-5"/> +91 8969903662</a>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://github.com/Sushantmishra2002" target="_blank" className="p-2 rounded-full bg-white/70 border border-gray-200 shadow"><Github className="w-5 h-5"/></a>
            <a href="https://www.linkedin.com/in/sushant-mishra-9b6423293/" target="_blank" className="p-2 rounded-full bg-white/70 border border-gray-200 shadow"><Linkedin className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
