import { useState } from "react";
import getUserByUsername, { createUser } from "../api/users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");
    if (!username || !password || !confirmPassword) {
      setError("Please enter complete information");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const existedUser = await getUserByUsername(username);
      if (existedUser) {
        setError("Username already exists");
        return;
      }
      const user = await createUser({ username, password });
      localStorage.setItem("token", user.id);
      localStorage.setItem("username", user.username);
      toast.success("Registration Successful!");
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      setError("Registration failed!");
    }
  };

  if (localStorage.getItem("token")) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <form
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl text-center font-bold mb-6 text-blue-700">
          Register
        </h2>
        {error && <div className="text-center mb-4 text-red-500">{error}</div>}
        <input
          className="w-full mb-4 px-4 py-2 border border-blue-300 rounded-lg"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="w-full mb-4 px-4 py-2 border border-blue-300 rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          className="w-full mb-6 px-4 py-2 border border-blue-300 rounded-lg"
          type="password"
          placeholder="Re-enter password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
