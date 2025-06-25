import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <Loading>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 p-4 mt-0 bg-gray-500">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Loading>
  );
}
export default App;
