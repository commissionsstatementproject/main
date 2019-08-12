import React from "react";

function PostTableText({ data }) {
  return (
    <div data-testid="postTableText">
      <div className="text open-sans">
        The total gross sales incentive variable pay is: £
        {data.totalVariablePayEarned}
      </div>
      <div className="text open-sans bold">Sales Incentive Boosters:</div>
      <div className="text open-sans">
        The total gross booster pay is: £{data.boostersClaimed}
      </div>
      <div className="text open-sans bold">
        The total gross Sales incentive payout is: £
        {data.totalVariableCompensation}
      </div>
      <div className="text open-sans">
        If you have any questions, please feel free to reach out to the people
        team / HOD / Sales Operations or HOD Finance. The payment will be made
        to you with your regular payroll.
      </div>
    </div>
  );
}

export default PostTableText;
