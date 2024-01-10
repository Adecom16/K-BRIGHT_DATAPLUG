import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
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

const CableTVPage = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [plan, setPlan] = useState("");
  const [transactionPin, setTransactionPin] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("kbrightdataplug_token");
    if (token) {
      fetchServices(token);
    }
  }, []); 

  const fetchServices = async (token) => {
    try {
      const response = await fetch(
        "https://wirelesspay.ng/user/cable-tv/get-service?service=dstv",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setServices(data.services);
    } catch (error) {
      console.error("Error fetching cable TV services:", error);
    }
  };

  const handlePurchase = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem("kbrightdataplug");
      if (!token) {
        console.error("Token not found in localStorage");
        return;
      }


      const response = await fetch(
        "https://wirelesspay.ng/user/cable-tv/purchase",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            plan,
            card_number: cardNumber,
            service: selectedService,
            debit_from: "wallet", // Assuming debit_from and transaction_pin are constants for now
            transaction_pin: "2222",
          }),
        }
      );

      const data = await response.json();
      console.log("Cable TV purchase successful:", data);
    } catch (error) {
      console.error("Error purchasing cable TV:", error);
    }
  };

  return (
    <Container>
      <Title>Cable TV Purchase Page</Title>
      <Form onSubmit={handlePurchase}>
        <FormGroup>
          <label htmlFor="service">Select Service:</label>
          <select
            id="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="plan">Select Plan:</label>
          <select
            id="plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="">Select a plan</option>
            {selectedService &&
              services[selectedService]?.plans.map((planOption) => (
                <option key={planOption} value={planOption}>
                  {planOption}
                </option>
              ))}
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor="transactionPin">Transaction Pin:</label>
          <input
            type="password"
            id="transactionPin"
            value={transactionPin}
            onChange={(e) => setTransactionPin(e.target.value)}
            placeholder="Enter transaction pin"
            required
          />
        </FormGroup>
        <Button type="submit">Purchase Cable TV</Button>
      </Form>
    </Container>
  );
};

export default CableTVPage;
