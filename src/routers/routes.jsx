import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingPage } from "../pages/LoadingPage";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoadingPage />} />
      </Routes>
    </Router>
  );
}
