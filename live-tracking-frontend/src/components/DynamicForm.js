import React, { useState } from "react";
import "./DynamicForm.css";
const DynamicForm = () => {

  const [formList, setFormList] = useState([
    {
      capitalValue: "",
      dropdownValue: "",
      oldValue: 0,
      newValue: 0,
      numberValue: "",
      gradeValue: "",
      isMinimized: false,
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newList = [...formList];
    newList[index][name] =
      name === "capitalValue" ? value.toUpperCase() : value;
    setFormList(newList);
  };

  const handleOldChange = (e, index) => {
    const value = parseInt(e.target.value) || 0;
    const newList = [...formList];
    newList[index].oldValue = value;
    setFormList(newList);
  };

  const handleNewChange = (e, index) => {
    const value = parseInt(e.target.value) || 0;
    const newList = [...formList];
    newList[index].newValue = value;
    setFormList(newList);
  };

  const handleGradeChange = (e, index) => {
    const { value } = e.target;
    const newList = [...formList];
    newList[index].gradeValue = value;
    setFormList(newList);
  };

  const handleAddForm = () => {
    setFormList([
      ...formList,
      {
        capitalValue: "",
        dropdownValue: "",
        oldValue: 0,
        newValue: 0,
        numberValue: "",
        gradeValue: "",
        isMinimized: false,
      },
    ]);
  };


  const handleDeleteForm = (index) => {
    const newList = formList.filter((_, i) => i !== index);
    setFormList(newList);
  };


  const handleToggleMinimize = (index) => {
    const newList = [...formList];
    newList[index].isMinimized = !newList[index].isMinimized;
    setFormList(newList);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dynamic Forms:", formList);
  };

  return (
    <div>
      <h2>Truck Sheet Details</h2>
      <form onSubmit={handleSubmit}>
        {formList.map((form, index) => (
          <div key={index} className="dynamic-form">
            {form.isMinimized ? (
              <div
                className="minimized-bar"
                onClick={() => handleToggleMinimize(index)}
              >
                <span>
                  {form.capitalValue
                    ? `Capital: ${form.capitalValue}`
                    : `Truck Detail ${index + 1}`}
                </span>
                <button type="button" onClick={() => handleDeleteForm(index)}>
                  Delete
                </button>
              </div>
            ) : (
              <div>
                <div>
                  <label>Truck Number:</label>
                  <input
                    type="text"
                    name="capitalValue"
                    value={form.capitalValue}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder={`Enter Truck Number ${index + 1}`}
                  />
                </div>
                <div>
                  <label>Mil Id:</label>
                  <select
                    name="dropdownValue"
                    value={form.dropdownValue}
                    onChange={(e) => handleInputChange(e, index)}
                  >
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="old-new-total">
                  <div>
                    <label>Old:</label>
                    <input
                      type="number"
                      name="oldValue"
                      value={form.oldValue}
                      onChange={(e) => handleOldChange(e, index)}
                      placeholder={`Old value`}
                    />
                  </div>
                  <div>
                    <label>New:</label>
                    <input
                      type="number"
                      name="newValue"
                      value={form.newValue}
                      onChange={(e) => handleNewChange(e, index)}
                      placeholder={`New value`}
                    />
                  </div>
                  <div>
                    <strong>Total: {form.oldValue + form.newValue}</strong>
                  </div>
                </div>
                <div>
                  <label>Farmer Count:</label>
                  <input
                    type="number"
                    name="numberValue"
                    value={form.numberValue}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder={`Enter a number ${index + 1}`}
                  />
                </div>
                <div>
                  <label>Grade:</label>
                  <div onChange={(e) => handleGradeChange(e, index)}>
                    <input
                      type="radio"
                      value="A"
                      name={`grade${index}`}
                      checked={form.gradeValue === "A"}
                    />{" "}
                    A
                    <input
                      type="radio"
                      value="C"
                      name={`grade${index}`}
                      checked={form.gradeValue === "C"}
                    />{" "}
                    C
                  </div>
                </div>
                <div className="dynamic-buttons">
                  <button
                    type="button"
                    onClick={() => handleToggleMinimize(index)}
                  >
                    Minimize
                  </button>
                  <button type="button" onClick={() => handleDeleteForm(index)}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="form-footer">
          <button
            type="button"
            onClick={handleAddForm}
            className="add-form-btn"
          >
            Add Another Truck Sheet
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
