import React, { useState } from "react";

const ChecklistForm = () => {
  const [isCitizen, setIsCitizen] = useState(true);
  const [isOver21, setIsOver21] = useState(false);

  return (
    <div>
      <h2>Checklist Form</h2>
      <p>Are you a Citizen: {isCitizen ? "Yes" : "No"}</p>
      <p>Are you over 21: {isOver21 ? "No" : "Yes"}</p>

      <div>
        <label>
          <input
            type="checkbox"
            checked={isCitizen}
            onChange={() => setIsCitizen(!isCitizen)}
          />
          Are you a Citizen?
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={isOver21}
            onChange={() => setIsOver21(!isOver21)}
          />
          Are you over 21?
        </label>
      </div>
    </div>
  );
};

export default ChecklistForm;
