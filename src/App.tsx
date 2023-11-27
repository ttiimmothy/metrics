import "./App.css";
import metricsGaearon from "../metrics_gaearon.svg";
import metricsAntfuPrivateRepository from "../metrics_antfu_private_repository.svg";
import metricsAntfu from "../metrics_antfu.svg";
import metricsKarpathy from "../metrics_karpathy.svg";
import metrics from "../metrics.svg";
import metricsPrivateRepository from "../metrics_private_repository.svg";
import metricsOctocat from "../metrics_octocat.svg";

function App() {
  return (
    <div className="main-container">
      <img src={metricsGaearon} width="400rem" />
      <img src={metricsAntfu} width="400rem" />
      <img src={metricsAntfuPrivateRepository} width="400rem" />
      <img src={metricsKarpathy} width="400rem" />
      <img src={metrics} width="400rem" />
      <img src={metricsPrivateRepository} width="400rem" />
      <img src={metricsOctocat} width="400rem" />
    </div>
  );
}

export default App;
