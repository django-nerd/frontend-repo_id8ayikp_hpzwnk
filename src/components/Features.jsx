import { Shield, Sparkles, Gauge, CreditCard } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Trusted Security',
    desc: 'Enterprise-grade security baked in from day one.'
  },
  {
    icon: Sparkles,
    title: 'Polished Design',
    desc: 'A minimalist, modern interface that puts products first.'
  },
  {
    icon: Gauge,
    title: 'Blazing Performance',
    desc: 'Optimized for speed and smooth browsing across devices.'
  },
  {
    icon: CreditCard,
    title: 'Frictionless Checkout',
    desc: 'Clear CTAs and streamlined steps to maximize conversions.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Why brands choose us</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">A focused set of advantages designed to help you sell more with less noise.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-emerald-400/10 border border-emerald-400/20 grid place-items-center mb-4 text-emerald-300">
                <f.icon size={20} />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-slate-300/80 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
