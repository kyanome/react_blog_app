import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import DefaultLayout from "./layout/DefaultLayout";
import Contact from "./pages/Contact";

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="posts/:id" element={<PostDetail />}></Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
