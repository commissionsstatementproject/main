import React from "react";

function Title({ data }) {
  const year = data.paymentNotificationDate.slice(-4);

  return (
    <div className="text open-sans bold">
      <b>
        Your Sales Incentive Variable Pay Earnings Quarter {data.quarter}/{year}{" "}
        - Notification Payout Amount
      </b>
    </div>
  );
}

export default Title;
