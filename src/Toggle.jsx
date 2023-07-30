import { useState } from "react";





const ToggleChallenge = () => {
    const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {/* toggle the state when a user clicks */}
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        toggle
      </button>
      {/* conditionally render component/ element */}
      
      {/* {showAlert && <Alert />} */}
      {showAlert && (
        <div className="alert alert-success">
          <h3>Hello, My name is Emeka</h3>
        </div>
      )}
    </div>
  );
};

// const Alert = () => {
//   return (
//     <div className="alert alert-success">
//         Hello, my name is Emeka
//     </div>
//   )
// }

export default ToggleChallenge;
