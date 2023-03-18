import Home from "./Pages/Home";
import Topics from "./Pages/Topics"
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </Router>
)
};

export default App;