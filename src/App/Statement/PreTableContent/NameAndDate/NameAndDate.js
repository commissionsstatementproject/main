import React from "react";
import "./NameAndDate.css";

function NameAndDate({ data }) {
  return (
    <div data-testid="nameAndDate">
      <div className="text open-sans">Name: {data.salespersonName}</div>
      <div className="date text open-sans">
        Date: {data.paymentNotificationDate}
      </div>
    </div>
  );
}

export default NameAndDate;
