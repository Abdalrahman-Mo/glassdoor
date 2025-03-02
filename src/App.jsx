import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
// Pages importing
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import Salaries from "./pages/Salaries";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route index path="/" element={<Jobs />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/salaries" element={<Salaries />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
