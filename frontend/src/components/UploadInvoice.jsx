import { getContract } from "../utils/contract";

export default function UploadInvoice() {
  const handleUpload = async () => {
    const contract = await getContract();
    console.log("Contract loaded:", contract);
  };

  return (
    <button
      onClick={handleUpload}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Upload Invoice
    </button>
  );
}
