import NavBar from "./components/NavBar";
import Comments from "./views/Comments";
import Users from "./views/Users";
import Form from "./views/Form";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/form" element={<Form />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
