// ElectricityBillingPage.js

import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import AuthenticationUtility from "./AuthenticationUtility";
import FormInput from "./FormInput";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ElectricityBillingPage = () => {
  const [type, setType] = useState("prepaid");
  const [companyCode, setCompanyCode] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionPin, setTransactionPin] = useState("");

  const { http } = AuthenticationUtility();

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const response = await http.post("/user/electricity/verify", {
        type,
        company_code: companyCode,
        meter_number: meterNumber,
      });

      const data = response.data;
      console.log("Electricity verification successful:", data);
    } catch (error) {
      console.error("Error verifying electricity:", error);
    }
  };

  const handlePurchase = async (e) => {
    e.preventDefault();

    // Display SweetAlert for transaction pin input
    const { value: pin } = await Swal.fire({
      title: "Enter your transaction pin",
      input: "password",
      inputPlaceholder: "Enter your pin",
      inputAttributes: {
        maxlength: 4,
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
    });

    if (pin) {
      // Perform the electricity purchase
      try {
        const response = await http.post("/user/electricity/purchase", {
          type,
          company_code: companyCode,
          meter_number: meterNumber,
          amount,
          transaction_pin: pin,
          debit_from: "",
        });

        const data = response.data;
        console.log("Electricity purchase successful:", data);

        // Display success alert
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Electricity purchase successful!",
        });
      } catch (error) {
        // Log detailed error information
        console.error("Error purchasing electricity:", error);

        // Display error alert
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.message || "An error occurred",
        });
      }
    }
  };

  return (
    <Container>
      <Title>Electricity Billing</Title>
      <Form>
        <FormInput
          label="Type"
          type="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
          options={[
            { value: "prepaid", label: "Prepaid" },
            { value: "postpaid", label: "Postpaid" },
          ]}
        />
        <FormInput
          label="Company Code"
          type="text"
          value={companyCode}
          onChange={(e) => setCompanyCode(e.target.value)}
          placeholder="Enter company code"
        />
        <FormInput
          label="Meter Number"
          type="text"
          value={meterNumber}
          onChange={(e) => setMeterNumber(e.target.value)}
          placeholder="Enter meter number"
        />
        <Button onClick={handleVerify}>Verify</Button>
        <FormInput
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        {/* <FormInput
          label="Transaction Pin"
          type="password"
          value={transactionPin}
          onChange={(e) => setTransactionPin(e.target.value)}
          placeholder="Enter transaction pin"
        /> */}
        <Button onClick={handlePurchase}>Purchase Electricity</Button>
      </Form>
    </Container>
  );
};

export default ElectricityBillingPage;
