// import Button from "../components/button";
import CurrenciesDashboard from "../components/currenciesDashboard";
import BitcoinChart from "../components/bitcoinChart";
import { BpiType } from "../shared/models/bpi";

import axios from "axios";

type propsType = {
  bpi: BpiType;
  bitCoinHistory: Array<Array< string | number>>;
};

const Index = ({ bpi, bitCoinHistory }: propsType) => {
  return (
    <div>
      <h1>Bitcoin price</h1>
      {/* <Button>This my button component.</Button> */}
      <CurrenciesDashboard bpi={bpi} />
      <BitcoinChart hist={bitCoinHistory} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const curr = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );

  const bcHist = await axios.get(
    "https://api.coindesk.com/v1/bpi/historical/close.json"
  );

  return {
    props: {
      bpi: {
        eur: curr.data.bpi.EUR.rate,
        usd: curr.data.bpi.USD.rate,
        gbp: curr.data.bpi.GBP.rate,
      },
      bitCoinHistory: Object.entries(bcHist.data.bpi),
    },
  };
};

export default Index;
