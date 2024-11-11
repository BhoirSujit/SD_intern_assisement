import React, { useState } from "react";
import { registerUser } from "../api/user";

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    phoneno: "",
    address: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    setSuccess(false); // Reset success state

    try {
      // Call the registerUser API function
      const result = await registerUser(formData);
      setSuccess(true); // On success, set success to true
      console.log("User registered successfully:", result);
    } catch (error: any) {
      setError(error); // If there’s an error, set the error message
    }
  };

  return (
    <div className="p-4 bg-white rounded-md=">
      <h2 className="font-bold mb-4 text-xl">User Registration</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
      {success && <p className="text-green-500 mb-4">User registered successfully!</p>} {/* Display success message */}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Name</label>
          <input
            className="border border-gray-300 rounded-md block w-full px-3 py-2 outline-blue-200 focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            className="border border-gray-300 rounded-md block w-full px-3 py-2 outline-blue-200 focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Date of Birth</label>
          <input
            className="border border-gray-300 rounded-md block w-full px-3 py-2 outline-blue-200 focus:ring-2 focus:ring-blue-500"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Phone Number</label>
          <input
            className="border border-gray-300 rounded-md block w-full px-3 py-2 outline-blue-200 focus:ring-2 focus:ring-blue-500"
            type="tel"
            name="phoneno"
            value={formData.phoneno}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Address</label>
          <textarea
            className="border border-gray-300 rounded-md block w-full px-3 py-2 outline-blue-200 focus:ring-2 focus:ring-blue-500"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700 transition duration-200"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;
