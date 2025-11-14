import { motion } from 'framer-motion'

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase text-blue-600/90 mb-2"
        >
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-gray-900"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-gray-600"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle
