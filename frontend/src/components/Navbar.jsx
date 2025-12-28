export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-900 px-8 py-4 text-white">
      <h1 className="text-2xl font-bold tracking-wide">
        DE‑FI AGENTS 
      </h1>
      <button className="rounded-xl bg-emerald-500 px-5 py-2 font-semibold hover:bg-emerald-600">
        Connect Wallet
      </button>
    </nav>
  );
}
