import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

function Dashboard() {
  const { portfolios } = useContext(PortfolioContext);

  const totalValue = portfolios.reduce(
    (sum, portfolio) => sum + portfolio.value,
    0
  );

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Total Portfolio Value: ${totalValue}</p>
    </div>
  );
}

export default Dashboard;
