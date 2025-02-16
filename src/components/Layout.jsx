import React from "react";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto my-10 px-4">{children}</div>;
    </>
  );
}

export default Layout;
