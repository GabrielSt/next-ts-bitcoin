import Sidebar from "../components/sidebar";
import "../styles/global.scss";

const App = ({ Component, pageProps }) => {
  return (
    <div id="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div id="page-wrap">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
