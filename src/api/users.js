import axios from "axios";

const API_URL = "http://localhost:3001/users";

const getUserByUsername = async (username) => {
  const res = await axios.get(`${API_URL}?username=${username}`);
  return res.data[0];
};

export default getUserByUsername;
