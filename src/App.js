import "./App.css";
import Modal from "./components/Modal.jsx";
import { useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className="App">
      <div>
        <button className="showPopup" onClick={() => setActiveModal(true)}>
          show popup
        </button>
      </div>
      {activeModal && <Modal setActiveModal={setActiveModal} />}
    </div>
  );
}

export default App;
