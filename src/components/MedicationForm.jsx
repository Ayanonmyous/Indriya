import React from "react";
import { useState } from "react";

const MedicationForm = ({ addMedication }) => {
  const [name, setName] = useState("");
  const [dose, setDose] = useState("");
  const [time, setTime] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();

    if (!name || !dose || !time) return;

    addMedication({
      id: Date.now(),
      name,
      dose,
      time,
      taken: false,
    });

    setTime("");
    setName("");
    setDose("");
  };

  return (
    <>
      <form
        onSubmit={handleSumbit}
        className="bg-white p-4 rounded-2xl shadow mb-4"
      >
        <div className="mb-5">
          <input
            type="text"
            placeholder="Medication Name"
            className="border p-2 w-full rounded-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Dose (eg. 1 pill)"
            className="border p-2 w-full rounded-xl"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <input
            type="time"
            className="border p-2 w-full rounded-xl"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-2xl"
        >
          Add Medication
        </button>
      </form>
    </>
  );
};

export default MedicationForm;
