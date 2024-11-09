import { Button } from "@chakra-ui/react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Chat from "./page/Chat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
