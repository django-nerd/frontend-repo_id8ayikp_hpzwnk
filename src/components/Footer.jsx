export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© 2025 VibeSell. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="/test" className="hover:text-white">System Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
