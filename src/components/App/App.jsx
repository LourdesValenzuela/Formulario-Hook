import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormPerson from "../FormPerson/FormPerson";
import Person from "../Person/Person";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <FormPerson formData={formData} handleChange={handleChange} />
      </div>
      <h2>Your Form Data</h2>
      <div className="person-container">
        <Person formData={formData} />
      </div>
    </div>
  );
}

export default App;

