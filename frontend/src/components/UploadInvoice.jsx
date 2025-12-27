import { ethers } from "ethers";
import abi from "./InvoiceNFT.json";

export const getContract = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(
    "YOUR_CONTRACT_ADDRESS",
    abi,
    signer
  );
};
