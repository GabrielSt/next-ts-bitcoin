import React from "react";
import { Chart } from "react-charts";
import { useMediaQuery } from "react-responsive";

type propTypes = {
  hist: Array<Array<string | number>>;
};

const BitcoinChart = ({ hist }: propTypes) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const totalHist = isTabletOrMobile ? hist.slice(20) : hist;
  const data = React.useMemo(
    () => [
      {
        label: "Price in USD",
        data: totalHist,
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
        width: "90vw",
        height: "300px",
        margin: "auto",
      }}
    >
      Daily quotation in USD
      <Chart data={data} axes={axes} tooltip dark />
    </div>
  );
};

export default BitcoinChart;
