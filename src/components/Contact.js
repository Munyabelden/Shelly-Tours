import React, { useState } from 'react';
import './styles/Contact.css';
import Footer from './Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    servicesDescription: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    servicesDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      valid = false;
    } else {
      newErrors.fullName = '';
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid Email is required';
      valid = false;
    } else {
      newErrors.email = '';
    }

    // Validate Phone Number
    const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
    if (!formData.phoneNumber.trim() || !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Valid Phone Number is required';
      valid = false;
    } else {
      newErrors.phoneNumber = '';
    }

    // Validate Services Description
    if (!formData.servicesDescription.trim()) {
      newErrors.servicesDescription = 'Services Description is required';
      valid = false;
    } else {
      newErrors.servicesDescription = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div>
      <div className="header-home contact">
        <div className="contact-head">
          <h1>Get In Touch</h1>
          <p>Discover an unparalleled stay in the heart of Cape Town with Shelly Tour. Whether you choose to reach out to us via email at info@shellytours.co.za or prefer the convenience of our user-friendly online form, rest assured that we are eager to curate the perfect experience for you. </p>
        </div>
        <div>
          
        </div>
      </div>
      <div className="form-div">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                Full Name:
                </label>
                <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`mt-1 p-2 w-full rounded-md border ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500`}
                />
                <span className="text-red-500 text-sm">{errors.fullName}</span>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email:
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 p-2 w-full rounded-md border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500`}
                />
                <span className="text-red-500 text-sm">{errors.email}</span>
            </div>

            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                Phone Number:
                </label>
                <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`mt-1 p-2 w-full rounded-md border ${
                    errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500`}
                />
                <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
            </div>

            <div className="mb-4">
                <label htmlFor="servicesDescription" className="block text-sm font-medium text-gray-600">
                Services Description:
                </label>
                <textarea
                id="servicesDescription"
                name="servicesDescription"
                value={formData.servicesDescription}
                onChange={handleChange}
                className={`mt-1 p-2 w-full rounded-md border ${
                    errors.servicesDescription ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-blue-500`}
                />
                <span className="text-red-500 text-sm">{errors.servicesDescription}</span>
            </div>

            <button
                type="submit"
                className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
                Submit
            </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
