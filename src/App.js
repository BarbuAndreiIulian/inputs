import React, { useState } from "react";
import "./App.css";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
  });

  function handleChange(el) {
    setFormData((prev) => {
      return {
        ...prev,
        [el.target.name]: el.target.value,
      };
    });
  }

  console.log(formData);

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="firstName"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <textarea
        type="text"
        placeholder="Comments"
        name="comments"
        onChange={handleChange}
      />
    </div>
  );
}
