import "../App.css";
import "./modal.css";

const Modal = ({ setActiveModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h3>Theme Color</h3>
          <h4>Change Theme</h4>
        </div>
        <ul>
          <li>
            <p>Font Color</p>
            <div>
              <p>#444444</p>
              <div
                className="color"
                style={{ backgroundColor: "#444444" }}
              ></div>
            </div>
          </li>
          <li>
            <p>Background Color</p>
            <div>
              <p>#FFFFFF</p>
              <div
                className="color"
                style={{ backgroundColor: "#FFFFFF" }}
              ></div>
            </div>
          </li>
          <li>
            <p>Button Color</p>
            <div>
              <p>#2072EF</p>
              <div
                className="color"
                style={{ backgroundColor: "#2072EF" }}
              ></div>
            </div>
          </li>
          <li>
            <p>Button Border Color</p>
            <div>
              <p>#2072EF</p>
              <div
                className="color"
                style={{ backgroundColor: "#2072EF" }}
              ></div>
            </div>
          </li>
          <li>
            <p>Buttons Mouseover Color</p>
            <div>
              <p>#0053D1</p>
              <div
                className="color"
                style={{ backgroundColor: "#0053D1" }}
              ></div>
            </div>
          </li>
        </ul>

        <div className="buttons">
          <button className="cancelBtn" onClick={() => setActiveModal(false)}>
            Cancel
          </button>
          <button onClick={() => setActiveModal(false)}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
