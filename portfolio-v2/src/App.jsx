import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>Home Page</h1>
        <p>This is the home page.</p>
      </div>
      <Footer />  
    </div>
  );
}

export default App;