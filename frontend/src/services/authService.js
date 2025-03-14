const API_URL = "http://localhost:5000/auth";

const authService = {
  login: async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },
  register: async (name, email, password) => {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    return response.json();
  },
  getUser: async () => {
    const response = await fetch(`${API_URL}/user`, { method: "GET" });
    return response.json();
  },
};

export default authService;
