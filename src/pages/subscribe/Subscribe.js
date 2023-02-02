/* eslint-disable */

import React, { useState } from "react";
import { toast } from "react-toastify";

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
      toast.success("Plan Created Successfully.");
      return data;
    } catch (error) {
      toast.error("Plan Creation Failed.");
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
      toast.success("Subscription Successful");
      return data;
    } catch (error) {
      toast.error("Subscription Failed");
    }
  }

  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-md-7 col-lg-6 ">
          <h1 className="mb-3 d-flex justify-content-between align-items-center">
            Subscribe
          </h1>
          <form className="">
            <div className="form-group ">
              <input
                type="text"
                placeholder="Plan"
                className="form-control"
                onChange={(e) => setPlan(e.target.value)}
              />
            </div>
            <br />
            <span className="text-muted">Plan start from #10,000</span>
            <div className="form-group">
              <input
                type="number"
                placeholder="Price"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Select Interval</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="interval"
                  value="monthly"
                  onChange={(e) => setInterval(e.target.value)}
                />
                <label className="form-check-label">Monthly</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="interval"
                  value="daily"
                  onChange={(e) => setInterval(e.target.value)}
                />
                <label className="form-check-label">Daily</label>
              </div>
            </div>
            <button className="btn btn-primary" onClick={createPlan}>
              Create Plan
            </button>
          </form>

          <form className="mt-3">
            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={createSubscribe}>
              Subscribe
            </button>
          </form>
        </div>

        <div className="col-md-5 col-lg-6 order-md-last">
          <div className="mt-3">
            <h3>Plan Response</h3>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Name: {planResponse.name}</h2>
                <p>Amount: {planResponse.amount}</p>
                <p>Plan Code: {planResponse.plan_code}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
