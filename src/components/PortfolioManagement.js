import React, { useContext, useState } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import PortfolioForm from "../forms/PortfolioForm";

function PortfolioManagement() {
  const { portfolios, setPortfolios } = useContext(PortfolioContext);
  const [editingPortfolio, setEditingPortfolio] = useState(null);

  const handleEdit = (portfolio) => {
    setEditingPortfolio(portfolio);
  };

  const handleDelete = (index) => {
    const updatedPortfolios = portfolios.filter((_, i) => i !== index);
    setPortfolios(updatedPortfolios);
  };

  return (
    <div className="portfolio-management">
      <h2>Portfolio Management</h2>
      <PortfolioForm
        editingPortfolio={editingPortfolio}
        setEditingPortfolio={setEditingPortfolio}
      />
      <ul>
        {portfolios.map((portfolio, index) => (
          <li key={index}>
            {portfolio.name} - ${portfolio.value}
            <button type="button" onClick={() => handleEdit(portfolio)}>
              Edit Portfolio
            </button>
            <button type="button" onClick={() => handleDelete(index)}>
              Delete Portfolio
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioManagement;
