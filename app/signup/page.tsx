"use client";
import React, { useState } from "react";
// import { POST } from "../api/route";

const page = () => {
  const [name, setname] = useState<string>("");
  const [age, setage] = useState<number>(18);
  const [amount, setamount] = useState<number>(0);
  const [gender, setgender] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  async function submitForm() {
    console.log({ name, age, amount, email, password });
    let userDetails = { name, age, amount, gender, email, password };
    const resp = await fetch("/api/signup", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(userDetails),
    });
    // let data = await resp.json();
    console.log(resp);
    if (resp.status == 201) {
      alert("Signup successful");
    }
  }

  return (
    <div className="text-4xl text-cyan-600 text-center mt-20">
      <h1>Sign Up</h1>
      <div>
        <form action="">
          <div>
            <label htmlFor="">Name:</label>
            <input onChange={(e) => setname(e.target.value)} type="text" />
          </div>
          <div>
            <label htmlFor="">Age:</label>
            <input
              onChange={(e) => setage(Number(e.target.value))}
              type="number"
            />
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <input onChange={(e) => setgender(e.target.value)} type="text" />
          </div>
          <div>
            <label htmlFor="">Gender:</label>
            <input onChange={(e) => setemail(e.target.value)} type="text" />
          </div>
          <div>
            <label htmlFor="">Amount:</label>
            <input
              onChange={(e) => setamount(e.target.valueAsNumber)}
              type="number"
            />
          </div>
          <div>
            <label htmlFor="">Password:</label>
            <input onChange={(e) => setpassword(e.target.value)} type="text" />
          </div>
          <div>
            <button onClick={submitForm} type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
