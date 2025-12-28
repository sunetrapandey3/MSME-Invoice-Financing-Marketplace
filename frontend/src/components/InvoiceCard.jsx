import { motion } from "framer-motion";

export default function InvoiceCard({ invoice }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl p-5 shadow hover:shadow-lg"
    >
      <h3 className="font-semibold text-lg">{invoice.msmeName}</h3>
      <p className="text-sm text-gray-500">Due: {invoice.dueDate}</p>

      <div className="flex justify-between mt-4">
        <span className="font-bold">₹{invoice.amount}</span>
        <button className="bg-primary text-white px-4 py-1 rounded-lg">
          Fund
        </button>
      </div>
    </motion.div>
  );
}
