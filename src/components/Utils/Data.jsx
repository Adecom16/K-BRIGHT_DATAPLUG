import React, { useState, useEffect } from "react";
import axios from "axios";
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

const DataBuyForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dataPlan, setDataPlan] = useState("300MB");
  const [network, setNetwork] = useState("mtn");
  const [dataPlans, setDataPlans] = useState([]);

  useEffect(() => {
    // Fetch data plans based on the selected network
    const fetchDataPlans = async () => {
      try {
        const response = await axios.get(
          `https://app.wirelesspay.ng/api/v1/user/data/all-data-list?network=${network}`
        );
        setDataPlans(response.data.plans);
      } catch (error) {
        console.error("Error fetching data plans:", error);
      }
    };

    fetchDataPlans();
  }, [network]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API request to purchase data
      const response = await axios.post(
        "https://wirelesspay.ng/api/v1/user/data/buy-sme-data",
        {
          phoneNumber,
          dataPlan,
        }
      );

      // Handle the response (you may want to display a success message)
      console.log("Data purchase successful:", response.data);
    } catch (error) {
      // Handle errors (you may want to display an error message)
      console.error("Error purchasing data:", error);
    }
  };

  return (
    <Container>
      <Title>Data Buying Page</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="network">Network:</label>
          <select
            id="network"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          >
            <option value="mtn">MTN</option>
            {/* Add more networks as needed */}
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor="dataPlan">Data Plan:</label>
          <select
            id="dataPlan"
            value={dataPlan}
            onChange={(e) => setDataPlan(e.target.value)}
          >
            {dataPlans.map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </FormGroup>
        <Button type="submit">Buy Data</Button>
      </Form>
    </Container>
  );
};

function App() {
  return (
    <div className="App">
      <DataBuyForm />
    </div>
  );
}

export default App;
