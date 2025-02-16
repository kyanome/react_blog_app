import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="posts/:id" element={<PostDetail />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
