import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="posts/:id" element={<PostDetail />}></Route>
      </Routes>
    </DefaultLayout>
  );
}

export default App;
