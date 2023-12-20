// App.js
import React, { useState } from "react";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import Header from "./component/header";

const App = () => {
  const [selectedItem, setSelectedItem] = useState("Campaign");
  const items = ["Item 1", "Item 2", "Item 3"];

  const handleItemClick = (index) => {
    setSelectedItem(items[index]);
  };

  return (
    <div style={{ display: "flex", backgroundColor: "#DAE6FF", height: "100vh" }}>
      <Sidebar onItemClick={handleItemClick} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", backgroundColor: "#DAE6FF" }}>
        <div>
          <Navbar />
        </div>
        <div>
          <Header />
        </div>
      </div>
    </div>
  );
};

export default App;
