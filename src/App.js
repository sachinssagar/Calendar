import React, { useState } from "react";
import YearInputPage from "./Component/YearInputPage";
import CalendarPage from "./Component/CalendarPage";

function App() {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearSelected = (year) => {
    setSelectedYear(year); // Update the selectedYear state
  };

  return (
    <div className="App">
      {selectedYear === null ? (
        <YearInputPage onNext={handleYearSelected} />
      ) : (
        <CalendarPage year={selectedYear} />
      )}
    </div>
  );
}

export default App;
