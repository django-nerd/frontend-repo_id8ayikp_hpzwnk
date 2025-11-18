import { Star, ShoppingBag, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Nebula Headphones',
    price: 199,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1528412294453-619cb8787670?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWJ1bGElMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3NjM0OTMxNzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Carbon Smartwatch',
    price: 249,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516570161787-2fd917215a3d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Aurora Speaker',
    price: 149,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1725266588224-9efcc3d903dd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJvcmElMjBTcGVha2VyfGVufDB8MHx8fDE3NjM0OTMxNzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
]

export default function Products() {
  return (
    <section id="products" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured products</h2>
            <p className="mt-2 text-slate-300">Curated picks that blend performance with style.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200">View all <ArrowRight size={18} /></a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{p.name}</h3>
                  <div className="text-emerald-300 font-semibold">${p.price}</div>
                </div>
                <div className="mt-2 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className={i < Math.round(p.rating) ? 'fill-amber-400' : 'opacity-30'} />
                  ))}
                  <span className="ml-2 text-xs text-slate-400">{p.rating}</span>
                </div>
                <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-slate-900 font-semibold px-4 py-2 hover:bg-emerald-400 transition-colors">
                  <ShoppingBag size={18} /> Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
