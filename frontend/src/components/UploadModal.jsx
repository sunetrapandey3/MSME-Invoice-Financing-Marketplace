export default function UploadModal() {
  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-md">
      <h2 className="font-bold text-xl mb-4">Upload Invoice</h2>

      <input className="w-full border p-2 rounded mb-3" placeholder="MSME Name" />
      <input className="w-full border p-2 rounded mb-3" placeholder="Amount" />
      <input className="w-full border p-2 rounded mb-3" type="date" />

      <button className="bg-accent text-white w-full py-2 rounded-lg">
        Submit
      </button>
    </div>
  );
}
