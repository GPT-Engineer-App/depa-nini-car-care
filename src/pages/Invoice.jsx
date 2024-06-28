import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Invoice = () => {
  const { invoiceId } = useParams();

  const handleDownload = () => {
    // Logic to download the invoice
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Invoice</h1>
        <p className="text-center">Invoice ID: {invoiceId}</p>
        <Button onClick={handleDownload}>Download Invoice</Button>
      </div>
    </div>
  );
};

export default Invoice;