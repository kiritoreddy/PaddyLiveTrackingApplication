import React, { useState } from "react";
import "./MainForm.css";
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


  const totalBags = parseInt(oldBags) + parseInt(newBags);
  const totalFarmer = parseInt(gradeA) + parseInt(gradeC);
  const totalGradeABags = parseInt(oldGradeABags) + parseInt(newGradeABags);
  const totalGradeCBags = parseInt(oldGradeCBags) + parseInt(newGradeCBags);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bags and Farmer Info:", {
      oldBags,
      newBags,
      gradeA,
      gradeC,
      oldGradeABags,
      newGradeABags,
      oldGradeCBags,
      newGradeCBags,
    });
  };

  return (
    <div className="container">
      <h1>Bags Calculation</h1>

      <div className="section-bar">
        <div className="bag-input">
          <label>Old Bags:</label>
          <input
            type="number"
            value={oldBags}
            onChange={(e) => setOldBags(parseInt(e.target.value))}
          />
        </div>
        <span className="operator">+</span>
        <div className="bag-input">
          <label>New Bags:</label>
          <input
            type="number"
            value={newBags}
            onChange={(e) => setNewBags(e.target.value)}
          />
        </div>
        <span className="operator">=</span>
        <div className="bag-input">
          <label>Total Bags:</label>
          <input type="text" value={totalBags} readOnly />
        </div>
      </div>

      <div className="section-bar">
        <div className="bag-input">
          <label>Grade A:</label>
          <input
            type="number"
            value={gradeA}
            onChange={(e) => setGradeA(e.target.value)}
          />
        </div>
        <span className="operator">+</span>
        <div className="bag-input">
          <label>Grade C:</label>
          <input
            type="number"
            value={gradeC}
            onChange={(e) => setGradeC(e.target.value)}
          />
        </div>
        <span className="operator">=</span>
        <div className="bag-input">
          <label>Total Farmer:</label>
          <input type="text" value={totalFarmer} readOnly />
        </div>
      </div>

      <div className="section-bar">
        <div className="bag-input">
          <label>Old Grade A Bags:</label>
          <input
            type="number"
            value={oldGradeABags}
            onChange={(e) => setOldGradeABags(e.target.value)}
          />
        </div>
        <span className="operator">+</span>
        <div className="bag-input">
          <label>New Grade A Bags:</label>
          <input
            type="number"
            value={newGradeABags}
            onChange={(e) => setNewGradeABags(e.target.value)}
          />
        </div>
        <span className="operator">=</span>
        <div className="bag-input">
          <label>Total Grade A Bags:</label>
          <input type="text" value={totalGradeABags} readOnly />
        </div>
      </div>

      <div className="section-bar">
        <div className="bag-input">
          <label>Old Grade C Bags:</label>
          <input
            type="number"
            value={oldGradeCBags}
            onChange={(e) => setOldGradeCBags(e.target.value)}
          />
        </div>
        <span className="operator">+</span>
        <div className="bag-input">
          <label>New Grade C Bags:</label>
          <input
            type="number"
            value={newGradeCBags}
            onChange={(e) => setNewGradeCBags(e.target.value)}
          />
        </div>
        <span className="operator">=</span>
        <div className="bag-input">
          <label>Total Grade C Bags:</label>
          <input type="text" value={totalGradeCBags} readOnly />
        </div>
      </div>

     
      <DynamicForm />

      <div className="form-footer">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default MainForm;
