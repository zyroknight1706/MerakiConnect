import Home from "./Pages/Home";
import Topics from "./Pages/Topics"
import Login from "./Pages/Login";
import Profile from './Pages/Profile';
import SignUp from "./Pages/SignUp";
import { GlobalStyles } from "./Components/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProfileData from "./Components/data/ProfileData.js"
import styled from "styled-components";

const Container = styled.div`
  background-color: #000;
`

const App = () => {
  return (
    <Container>
    <GlobalStyles />
  <Router>
    <Routes>
      <Route path="/" element={<Home LoggedIn={true}/>} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profile item={ProfileData}/>} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  </Router>
  </Container>
)
};

export default App;