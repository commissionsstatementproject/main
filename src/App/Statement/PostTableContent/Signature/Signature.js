import React from "react";
import "./Signature.css";

function Signature() {
  return (
    <div className="text open-sans" data-testid="signature">
      Thanks again.
      <img src="sig.jpg" alt="signature" className="signature-img" />
      Head of Sales/Demand
    </div>
  );
}

export default Signature;
