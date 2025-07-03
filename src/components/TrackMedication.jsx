import React from "react";
import { useState, useEffect } from "react";
import MedicationForm from "./MedicationForm";
import MedicationList from "./MedicationList";

const TrackMedication = () => {
  const [medications, setMedication] = useState([]);

  useEffect(() => {
    const storedMeds = JSON.parse(localStorage.getItem("medications"));
    if (storedMeds) setMedication(storedMeds);
  }, []);

  useEffect(() => {
    localStorage.setItem("medications", JSON.stringify(medications));
  }, [medications]);

  const addMedication = (med) => {
    setMedication([...medications, med]);
  };

  const toggleTaken = (id) => {
    setMedication(
      medications.map((m) => (m.id === id ? { ...m, taken: !m.taken } : m))
    );
  };

  const deleteMedication = (id) => {
    setMedication(medications.filter((m) => m.id !== id));
  };

  return (
    <>
      <div className=" mt-10 p-15 ">
        <h2 className="text-4xl  mt-10 text-center text-blue-400 mb-6 font-extrabold">
          Medication Tracker
        </h2>

        <MedicationForm addMedication={addMedication} />

        <MedicationList
          medications={medications}
          toggleTaken={toggleTaken}
          deleteMedication={deleteMedication}
        />
      </div>
    </>
  );
};

export default TrackMedication;
