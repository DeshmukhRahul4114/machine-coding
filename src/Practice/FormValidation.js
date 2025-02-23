import React, { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    state: '',
    adult: false,
    date: '',
    switch: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const formErrors = {};

    if (!formData.name) {
      formErrors.name = 'Name is required';
    }

    if (!formData.age || formData.age <= 0) {
      formErrors.age = 'Age must be a valid number greater than 0';
    }

    if (!formData.state) {
      formErrors.state = 'State is required';
    }

    if (!formData.date) {
      formErrors.date = 'Date is required';
    }

    if (formData.age < 18 && !formData.adult) {
      formErrors.adult = 'You must be an adult';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      alert('Form submitted successfully!');
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
        </div>

        <div>
          <label>State:</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option value="California">California</option>
            <option value="Texas">Texas</option>
            <option value="Florida">Florida</option>
          </select>
          {errors.state && <span style={{ color: 'red' }}>{errors.state}</span>}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="adult"
              checked={formData.adult}
              onChange={handleChange}
            />
            Are you an adult?
          </label>
          {errors.adult && <span style={{ color: 'red' }}>{errors.adult}</span>}
        </div>

        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="switch"
              checked={formData.switch}
              onChange={handleChange}
            />
            Switch
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
