import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    addressType: "",
    address: "",
    gender: "",
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("came ejer", { name, value });
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log("heyyy");
    e.preventDefault();
    console.log(formData);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is mandatory";
    }

    if (!formData.email) {
      newErrors.email = "email is mandatory";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.addressType) {
      newErrors.addressType = "addressType is mandatory";
    }

    if (!formData.address) {
      newErrors.address = "address is mandatory";
    }
    if (!formData.gender) {
      newErrors.gender = "gender is mandatory";
    }

    return newErrors;
  };
  // name snd value is mandatory
  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">
            Name:{" "}
            <input
              id="nameInput"
              name="name"
              type="text"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              id="emailInput"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="addressType">
            Address Type:
            <select
              name="addressType"
              id="addressType"
              placeholder="Select type"
              value={formData.addressType}
              onChange={handleChange}
            >
              <option value="Permanent">Permanent</option>
              <option value="Current">Current</option>
              <option value="Correspondence">Correspondence</option>
            </select>
          </label>
          {errors.addressType && <p className="error">{errors.addressType}</p>}
        </div>
        <div>
          <label htmlFor="address">
            Address:
            <textarea
              name="address"
              id="address"
              placeholder="Enter Address"
              maxLength={50}
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              onChange={handleChange}
              checked={formData.gender === "Female"}
            />
            Female
          </label>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
