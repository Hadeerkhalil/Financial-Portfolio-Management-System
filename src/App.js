import React from "react";
import { PortfolioProvider } from "./context/PortfolioContext";
import Dashboard from "./components/Dashboard";
import PortfolioManagement from "./components/PortfolioManagement";
import TransactionManagement from "./components/TransactionManagement";

function App() {
  return (
    <PortfolioProvider>
      <div className="App">
        <h1>Financial Portfolio Management System</h1>
        <Dashboard />
        <PortfolioManagement />
        <TransactionManagement />
      </div>
    </PortfolioProvider>
  );
}

export default App;
