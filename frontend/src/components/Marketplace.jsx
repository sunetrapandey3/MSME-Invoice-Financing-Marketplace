import { useEffect, useState } from "react";
import axios from "axios";

export default function Marketplace() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/invoices")
      .then(res => setInvoices(res.data));
  }, []);

  return (
    <div>
      <h2>Investor Marketplace</h2>
      {invoices.map(i => (
        <div key={i._id}>
          <p>{i.msmeName} — ₹{i.amount}</p>
        </div>
      ))}
    </div>
  );
}
