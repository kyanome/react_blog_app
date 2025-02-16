import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="posts/:id" element={<PostDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
