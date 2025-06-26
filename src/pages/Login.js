import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserByUsername from "../api/users";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError("Please enter complete information");
      return;
    }
    const user = await getUserByUsername(username);
    if (!user || user.password !== password) {
      setError("Wrong account or password");
      console.log("Receive user", username);
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <form
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Login</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <input
          className="w-full mb-4 px-4 py-2 border border-blue-300 rounded-lg"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="w-full mb-6 px-4 py-2 border border-blue-300 rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
