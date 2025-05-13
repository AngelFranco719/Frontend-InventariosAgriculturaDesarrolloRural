import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./Views/Main/Main";
import { InventoryViewer } from "./Views/InventoryViewer/InventoryViewer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            justifyItems: "right",
            width: "100%",
          }}
        ></div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Bien/:inventario" element={<InventoryViewer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
