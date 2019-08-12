import React from "react";

function PreTableText({ data }) {
  return (
    <div data-testid="preTableText">
      <div className="text open-sans">
        We highly appreciate your efforts and contributions over the last
        quarter. With this notification we would like to confirm the amount of
        your sales incentive variable pay reflecting the target achievement of
        Quarter {data.quarter}.
      </div>
      <div className="text open-sans bold">
        Quarterly Sales Incentive Target Amount for Quarter {data.quarter}: £
        {data.quarterlyVariableTarget}
      </div>
    </div>
  );
}

export default PreTableText;
