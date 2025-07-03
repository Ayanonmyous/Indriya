import React from "react";
import MedicationItem from "./MedicationItem";

const MedicationList = ({ medications, toggleTaken, deleteMedication }) => {
  return (
    <>
      <div className="space-y-2">
        {medications.length === 0 && (
          <p className="text-gray-600">No Medications Added.</p>
        )}

        {medications.map((med) => (
          <MedicationItem
            key={med.id}
            med={med}
            toggleTaken={toggleTaken}
            deleteMedication={deleteMedication}
          />
        ))}
      </div>
    </>
  );
};

export default MedicationList;
