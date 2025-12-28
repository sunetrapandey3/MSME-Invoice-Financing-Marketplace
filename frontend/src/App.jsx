import UploadInvoice from "./components/UploadInvoice";
import Marketplace from "./components/Marketplace";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <h1>DE-FI AGENTS 💸</h1>
      <Navbar />
      <Dashboard />
      <UploadInvoice />
      <Marketplace />
    </>
  );
}


