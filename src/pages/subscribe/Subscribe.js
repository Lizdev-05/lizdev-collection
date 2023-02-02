/* eslint-disable */

import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [planResponse, setPlanResponse] = useState("");
  const [plan, setPlan] = useState("");
  const [subscribeResponse, setSubscribeResponse] = useState("");
  const [interval, setInterval] = useState("");

  async function createPlan(e) {
    e.preventDefault();
    const createPlanEndpoint = "https://api.paystack.co/plan";
    console.log(plan, price, interval);

    const plandata = {
      name: plan,
      amount: price,
      interval,
    };
    try {
      const response = await fetch(createPlanEndpoint, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer sk_test_dc7ea68e6119c26d119a9bec45d120737bfb5694",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plandata),
      });

      const data = await response.json();
      setPlanResponse(data.data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function createSubscribe(e) {
    e.preventDefault();
    const subscribeEndpoint = "https://api.paystack.co/transaction/initialize";
    const subscribeData = {
      email,
      amount: price,
      plan: planResponse.plan_code,
    };
    try {
      const response = await fetch(subscribeEndpoint, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer sk_test_dc7ea68e6119c26d119a9bec45d120737bfb5694",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscribeData),
      });
      const data = await response.json();
      setSubscribeResponse(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Subscribe</h1>
      <form>
        <input
          type="text"
          placeholder="Plan"
          onChange={(e) => setPlan(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Select Interval</label>
        <input
          type="radio"
          name="interval"
          value="monthly"
          onChange={(e) => setInterval(e.target.value)}
        />
        Monthly
        <input
          type="radio"
          name="interval"
          value="daily"
          onChange={(e) => setInterval(e.target.value)}
        />
        Daily
        <button onClick={createPlan}>Create Plan</button>
      </form>

      <form>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={createSubscribe}>Subscribe</button>
      </form>

      <div>
        <h3>Plan Response</h3>
        <h2>
          Name:
          {planResponse.name}
        </h2>
        {/* <h2>Amount: {planResponse.amount}</h2>
        <h2>Plan Code : {planResponse.plan_code}</h2> */}
      </div>
      <div>
        <h3>Subscribe Response</h3>
        {/* <p>{subscribeResponse}</p> */}
      </div>
    </div>
  );
};

export default Subscribe;
