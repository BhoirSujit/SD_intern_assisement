import axios from "axios";

// Base URL for your backend API
const BASE_URL = import.meta.env.VITE_BACKEND_URL + "/api";

// Register a new user
export const registerUser = async (data: {
  name: string;
  email: string;
  dob: string;
  phoneno: string;
  address: string;
}) => {
  try {
    const response = await axios.post(`${BASE_URL}/user`, data);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.message ||
      "An error occurred while registering the user."
    );
  }
};

// Fetch all users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user`);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.message || "An error occurred while fetching users."
    );
  }
};

// Fetch user by ID
export const fetchUserById = async (userId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.message || "An error occurred while fetching the user."
    );
  }
};

// Update user details
export const updateUser = async (userId: number, updatedData: any) => {
  try {
    const response = await axios.put(`${BASE_URL}/user/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.message || "An error occurred while updating the user."
    );
  }
};

// Delete a user
export const deleteUser = async (userId: number) => {
  try {
    const response = await axios.delete(`${BASE_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.message || "An error occurred while deleting the user."
    );
  }
};
