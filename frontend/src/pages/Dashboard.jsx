import StatCard from "../components/StatCard";
import InvoiceCard from "../components/InvoiceCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/invoices")
      .then(res => setInvoices(res.data));
  }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Invoices" value={invoices.length} />
        <StatCard title="Liquidity Deployed" value="₹5,40,000" />
        <StatCard title="Avg ROI" value="12.4%" />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {invoices.map(inv => (
          <InvoiceCard key={inv._id} invoice={inv} />
        ))}
      </div>
    </div>
  );
}
