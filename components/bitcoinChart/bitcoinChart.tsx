import React from "react";
import { Chart } from "react-charts";

type propTypes = {
    hist: Array<Array< string | number>>;
  };

const BitcoinChart = ({ hist }: propTypes) => {
  const data = React.useMemo(
    () => [
      {
        label: "Price in USD",
        data: hist,
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "75rem",
        height: "300px",
        margin: "auto",
      }}
    >
        Daily quotation in USD
      <Chart data={data} axes={axes} tooltip dark />
    </div>
  );
}

export default BitcoinChart;
