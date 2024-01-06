// Stat.jsx

import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const Stat = () => {
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://wirelesspay.ng/api/v1/user/transaction-histories/WV910040344304AIRTIME2CASHqw",
          {
            headers: {
              Authorization: "Bearer {{token}}",
            },
          }
        );

        // Update the transactions state with the data from the API
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleViewReceipt = () => {
    setShowReceiptModal(true);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.type}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.description}</td>
              <td>
                <Button variant="primary" onClick={handleViewReceipt}>
                  View Receipt
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Receipt Modal */}
      <Modal show={showReceiptModal} onHide={() => setShowReceiptModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add receipt details here */}
          <p>Transaction ID: 12345</p>
          <p>Date: {new Date().toLocaleDateString()}</p>
          <p>Amount: $50.00</p>
          {/* Add more receipt details as needed */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowReceiptModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Stat;
