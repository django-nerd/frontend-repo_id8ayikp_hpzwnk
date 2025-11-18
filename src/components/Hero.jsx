import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/95 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300 text-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Minimal, modern, and built to sell
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Elevate your brand with a clean dark storefront
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-slate-300">
            A sleek, high-converting experience with metallic depth and subtle green glow.
            Showcase products, highlight features, and guide visitors to purchase.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#products" className="inline-flex items-center rounded-lg bg-emerald-500 text-slate-900 font-semibold px-5 py-3 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">Browse Products</a>
            <a href="#pricing" className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 text-white px-5 py-3 hover:bg-white/10 transition-colors">View Pricing</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
