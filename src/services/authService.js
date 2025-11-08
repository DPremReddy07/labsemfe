// src/services/authService.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8808/api/auth"; // backend URL

// Signup request
export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || error.message;
  }
};

// Login request
export const login = async (username, password) => {
  try {
    const response = await axios.post(
      "http://localhost:8808/api/auth/login",
      { username, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error.response?.data?.error || "Login failed";
  }
};;
