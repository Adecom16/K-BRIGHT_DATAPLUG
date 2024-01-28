import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AuthenticationUtility from "./AuthenticationUtility";
import Swal from "sweetalert2";

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
  const [loading, setLoading] = useState(false);

  const [networkOptions, setNetworkOptions] = useState([
    { value: "mtn", label: "MTN" },
    { value: "etisalat", label: "Etisalat" },
    { value: "airtel", label: "Airtel" },
    { value: "glo", label: "Glo" },
  ]);

  const { http, profile } = AuthenticationUtility();

  const fetchDataPlans = async (network) => {
    setDataPlans([]);
    http
      .get("/user/data/gifting-data-list?network=" + network)
      .then((response) => {
        var data = response.data;
        setDataPlans(data.data);
      })
      .catch((err) => {
        var error = err.response.data;
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDataPlans(network);
  }, [network, networkOptions]);

  const handleSubmit = async (e) => {
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
      // Perform the data purchase
      try {
        setLoading(true);
        const response = await http.post("/user/data/buy-gifting-data", {
          phone: phoneNumber,
          plan: dataPlan,
          network: network,
          transaction_pin: pin,
        });
        const data = response.data;
        console.log(data);

        // Display success alert
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Data purchase successful!",
        });
      } catch (err) {
        // Log detailed error information
        console.error("Error:", err);

        // Display error alert
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.response?.data?.message || "An error occurred",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container>
      <Title>Data Buying </Title>
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
            {networkOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor="dataPlan">Data Plan:</label>
          <select
            id="dataPlan"
            value={dataPlan}
            onChange={(e) => setDataPlan(e.target.value)}
          >
            {dataPlans &&
              dataPlans.map((plan) => (
                <option key={plan.plan} value={plan.plan}>
                  {plan.name}
                </option>
              ))}
          </select>
        </FormGroup>
        <Button type="submit" disabled={loading}>
          {loading ? "Buying Data..." : "Buy Data"}
        </Button>
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
