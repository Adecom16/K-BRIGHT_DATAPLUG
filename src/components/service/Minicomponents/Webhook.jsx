import React, { useEffect, useState } from "react";
import axios from "axios";

const WebhookComponent = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://app.wirelesspay.ng/api/v1/user/v-webhook";
      const apiKey = "DHDHEE34ytfdsfhfsdgsaDBSDS";

      const data = {
        type: "transaction-update",
        data: {
          code: "040",
          content: {
            transactions: {
              status: "reversed",
              unique_element: "08011111111",
              unit_price: 50,
              commission: 2,
              total_amount: 48.5,
              discount: null,
              amount: 50,
              transactionId: "1583501216545377109916",
              wallet_credit_id: "15835022148401519675278125",
            },
          },
          response_description: "TRANSACTION REVERSAL TO WALLET",
          amount: 48.5,
          requestId: "20230630174736electR9L3Q3JYP5YZP80EXV",
          purchased_code: "",
        },
      };

      try {
        const response = await axios.post(url, data, {
          headers: {
            API_KEY: apiKey,
            "Content-Type": "application/json",
          },
        });

        setResponseData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Webhook Component</h1>

      {responseData && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}

      {/* Additional JSX content */}
      <p>This is additional content for the WebhookComponent.</p>
    </div>
  );
};

export default WebhookComponent;
