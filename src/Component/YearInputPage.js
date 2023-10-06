import React, { useState } from "react";

const YearInputPage = ({ onNext }) => {
  const [year, setYear] = useState("");

  const handleNextClick = () => {
    // Validate the input and navigate to the calendar page if the year is valid
    const parsedYear = parseInt(year);
    if (!isNaN(parsedYear) && parsedYear >= 1900 && parsedYear <= 2100) {
      onNext(parsedYear);
    } else {
      alert("Please enter a valid year between 1900 and 2100.");
    }
  };

  return (
    <div>
      <h2>Enter Year</h2>
      <input
        type="number"
        placeholder="Enter a year (1900-2100)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default YearInputPage;