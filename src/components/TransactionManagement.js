import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import TransactionForm from "../forms/TransactionForm";

function TransactionManagement() {
  const { transactions } = useContext(PortfolioContext);

  return (
    <div className="transaction-management">
      <h2>Transaction Management</h2>
      <TransactionForm />
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionManagement;
