import React, { useState } from "react";
import "./CommonStyle.css";
import DynamicForm from "./DynamicForm";

const MainForm = () => {
  const [oldBags, setOldBags] = useState(0);
  const [newBags, setNewBags] = useState(0);
  const [gradeA, setGradeA] = useState(0);
  const [gradeC, setGradeC] = useState(0);
  const [oldGradeABags, setOldGradeABags] = useState(0);
  const [newGradeABags, setNewGradeABags] = useState(0);
  const [oldGradeCBags, setOldGradeCBags] = useState(0);
  const [newGradeCBags, setNewGradeCBags] = useState(0);

  const totalBags = parseInt(oldBags || 0) + parseInt(newBags || 0);
  const totalFarmer = parseInt(gradeA || 0) + parseInt(gradeC || 0);
  const totalGradeABags = parseInt(oldGradeABags || 0) + parseInt(newGradeABags || 0);
  const totalGradeCBags = parseInt(oldGradeCBags || 0) + parseInt(newGradeCBags || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", {
      totalBags,
      totalFarmer,
      totalGradeABags,
      totalGradeCBags,
    });
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h4>Bags Calculation</h4>
        <div className="bag-calculation">
          <div className="grid-container">
            <div className="form-group">
              <label>Old Bags:</label>
              <input type="number" className="small-input" value={oldBags} onChange={(e) => setOldBags(e.target.value)} />
            </div>
            <div className="form-group">
              <label>New Bags:</label>
              <input type="number" className="small-input" value={newBags} onChange={(e) => setNewBags(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Grade A:</label>
              <input type="number" className="small-input" value={gradeA} onChange={(e) => setGradeA(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Grade C:</label>
              <input type="number" className="small-input" value={gradeC} onChange={(e) => setGradeC(e.target.value)} />
            </div>
          </div>
          <div className="totals">
            <p>Total Bags: {totalBags}</p>
            <p>Total Farmer: {totalFarmer}</p>
            <p>Total Grade A Bags: {totalGradeABags}</p>
            <p>Total Grade C Bags: {totalGradeCBags}</p>
          </div>
        </div>
        <hr />
        <DynamicForm />
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className="summary-container">
        <h4>Summary</h4>
        <p>Total Bags: {totalBags}</p>
        <p>Total Farmer: {totalFarmer}</p>
        <p>Total Grade A Bags: {totalGradeABags}</p>
        <p>Total Grade C Bags: {totalGradeCBags}</p>
      </div>
    </div>
  );
};

export default MainForm;
