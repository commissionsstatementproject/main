import React from "react";
import "./Signature.css";

function Signature({ signatureImageURL }) {
  const renderSignatureImage = signatureImageURL => {
    if (!signatureImageURL) {
      return (
        <div>
          <br /> <br /> <br /> <br />
        </div>
      );
    } else {
      return (
        <img
          src={signatureImageURL}
          alt="signature"
          className="signature-img"
        />
      );
    }
  };

  return (
    <div className="text open-sans" data-testid="signature">
      Thanks again.
      {renderSignatureImage(signatureImageURL)}
      Head of Sales/Demand
    </div>
  );
}

export default Signature;
