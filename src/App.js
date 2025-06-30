import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Loading from "./components/loading/Loading";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/hooks/ProtectedRoute";
// import UnauthRoute from "./components/UnauthRoute";

function App() {
  return (
    <Loading>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-4 mt-0 bg-gray-500">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ToastContainer />
    </Loading>
  );
}
export default App;
