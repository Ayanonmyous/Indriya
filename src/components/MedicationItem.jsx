import React from "react";

const MedicationItem = ({ med, toggleTaken, deleteMedication }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
        <div>
          <h2 className="font-semibold">{med.name}</h2>
          <p className="text-sm text-gray-700">
            {med.dose} Pills at {med.time}
          </p>
          <p
            className={`text-xs ${
              med.taken ? "text-green-600" : "text-red-600"
            }`}
          >
            {med.taken ? "Taken" : "Not Taken"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleTaken(med.id)}
            className={`px-2 py-1 rounded ${
              med.taken ? "bg-green-500" : "bg-yellow-500"
            } text-white`}
          >
            {med.taken ? "Undo" : "Mark Taken"}
          </button>

          <button
            onClick={() => deleteMedication(med.id)}
            className="px-2 py-1 rounded bg-red-500 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default MedicationItem;
