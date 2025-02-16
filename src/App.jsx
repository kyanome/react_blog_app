import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Header />
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
