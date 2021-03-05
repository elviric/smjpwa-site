import React, { useState } from "react";
import ModalD from "./components/ModalD";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [address, setAddr] = useState("");
  

  return (
    <main>
      <section className="container">
        <h3>Fusi Whitelist</h3>
        <input
          type="text"
          className="address"
          placeholder="Enter you Address..."
          value={address}
          onChange={(e) => setAddr(e.target.value)}
        />
        <button onClick={() => setModalShow(true)}>Submit</button>
      </section>
      <ModalD show={modalShow} onHide={() => setModalShow(false)} />
    </main>
  );
}

export default App;
