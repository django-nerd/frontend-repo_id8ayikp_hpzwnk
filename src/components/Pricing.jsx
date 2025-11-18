import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 19,
    features: ['Single product', 'Basic analytics', 'Email support']
  },
  {
    name: 'Growth',
    price: 49,
    features: ['Up to 10 products', 'Advanced analytics', 'Priority support']
  },
  {
    name: 'Scale',
    price: 99,
    features: ['Unlimited products', 'Conversion optimization', 'Dedicated manager']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Simple pricing</h2>
          <p className="mt-3 text-slate-300">Choose a plan that fits where you are right now. Upgrade anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{t.name}</h3>
              <div className="mt-2 text-4xl font-extrabold text-white">${t.price}<span className="text-base font-medium text-slate-400">/mo</span></div>
              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                    <Check size={18} className="text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-lg bg-emerald-500 text-slate-900 font-semibold px-4 py-2 hover:bg-emerald-400 transition-colors">Get started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
