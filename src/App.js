import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Pages from "./pages/Pages";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
