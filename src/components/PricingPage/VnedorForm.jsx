import React, { useState } from "react";

const VnedorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    portfolio: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      portfolio: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate backend submission
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("businessName", formData.businessName);
    formDataToSend.append("portfolio", formData.portfolio);

    try {
      // This is where the backend submission code would go
      setSubmitted(true);
      alert("Registration Successful! Confirmation email sent.");
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Vendor Registration</h1>
      {submitted ? (
        <div className="text-green-500">Registration successful!</div>
      ) : (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Upload Portfolio</label>
            <input
              type="file"
              name="portfolio"
              onChange={handleFileChange}
              className="w-full px-4 py-2 mt-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default VnedorForm;
