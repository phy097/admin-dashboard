import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 gap-0 bg-light pe-3">
          <Sidebar />
        </div>
        <div className="col-10 bg-secondary px-0">
          <Home />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
