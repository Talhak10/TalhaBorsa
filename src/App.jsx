import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Altin from "./components/Altin"
import Kripto from "./components/kripto/Kripto";

const App = () => {
  return (
    <Router>
      <div className="max-w-6xl mx-auto p-4 xl:px-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/altin" element={<Altin />} />
          <Route path="/kripto" element={<Kripto />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
