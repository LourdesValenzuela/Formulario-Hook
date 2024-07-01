import { useState } from "react";

const FormPerson = ({ formData, handleChange }) => {
  return (
    <div className="form-person-container">
      <form>
        <div className="input-group input-group-sm mb-3 custom-group">
          <label htmlFor="firstName" className="input-group-text custom-label" id="inputGroup-sizing-sm">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control custom-input"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="input-group input-group-sm mb-3 custom-group">
          <label htmlFor="lastName" className="input-group-text custom-label" id="inputGroup-sizing-sm">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control custom-input"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="input-group input-group-sm mb-3 custom-group">
          <label htmlFor="email" className="input-group-text custom-label" id="inputGroup-sizing-sm">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control custom-input"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="input-group input-group-sm mb-3 custom-group">
          <label htmlFor="password" className="input-group-text custom-label" id="inputGroup-sizing-sm">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control custom-input"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="input-group input-group-sm mb-3 custom-group">
            <label htmlFor="confirmPassword" className="input-group-text custom-label" id="inputGroup-sizing-sm">
                Confirm <br /> Password:
            </label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control custom-input"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
            />
        </div>
      </form>
    </div>
  );
}

export default FormPerson;







