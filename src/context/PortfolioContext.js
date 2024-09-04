import React, { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolios, setPortfolios] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const addPortfolio = (portfolio) => {
    setPortfolios([...portfolios, portfolio]);
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolios,
        setPortfolios,
        addPortfolio,
        transactions,
        setTransactions,
        addTransaction,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
