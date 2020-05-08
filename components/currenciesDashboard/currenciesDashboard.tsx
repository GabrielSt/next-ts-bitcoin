import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEuroSign,
  faDollarSign,
  faPoundSign,
} from "@fortawesome/free-solid-svg-icons";
import { BpiType } from "../../shared/models/bpi";

import "./styles.scss";

type propTypes = {
  bpi: BpiType;
};

const CurrenciesDashboard = ({ bpi }: propTypes) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card card">
        <div className="card-content red">
          <h3 className="card-title">
            Euro
            <span className="card-count start-counter">
              {bpi.eur} <FontAwesomeIcon icon={faEuroSign} />
            </span>
          </h3>
        </div>
      </div>
      <div className="dashboard-card card">
        <div className="card-content green">
          <h3 className="card-title">
            Dolar
            <span className="card-count start-counter">
              {bpi.usd} <FontAwesomeIcon icon={faDollarSign} />
            </span>
          </h3>
        </div>
      </div>
      <div className="dashboard-card card">
        <div className="card-content blue">
          <h3 className="card-title">
            Pound
            <span className="card-count start-counter">
              {bpi.gbp} <FontAwesomeIcon icon={faPoundSign} />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CurrenciesDashboard;
