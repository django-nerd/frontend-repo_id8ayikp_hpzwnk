import { useState } from 'react'
import { Menu, X, ShoppingCart, Rocket } from 'lucide-react'

function NavLink({ children, href = '#' }) {
  return (
    <a href={href} className="text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-white font-semibold">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 grid place-items-center">
              <Rocket size={18} className="text-slate-900" />
            </div>
            VibeSell
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="relative inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-slate-900 font-semibold px-4 py-2 transition-colors shadow-lg shadow-emerald-500/20">
              <ShoppingCart size={18} />
              View Cart
              <span className="absolute -top-2 -right-2 text-xs bg-white text-slate-900 rounded-full px-1.5 py-0.5 shadow">2</span>
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:text-white hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col gap-4">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button className="mt-2 inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-slate-900 font-semibold px-4 py-2 transition-colors">
                <ShoppingCart size={18} /> View Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
