export default function StatCard({ title, value }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <p className="text-sm text-slate-500">{title}</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </h2>
    </div>
  );
}
