import React, { useState } from "react";
import "./CommonStyle.css"; // Make sure to style this component
import { MdOutlineDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

const DynamicForm = () => {
  const initialFormState = {
    truckSheetNumber: "",
    dropdownValue: "Mill A", // Default dropdown value
    gradeAFarmer: "",
    gradeABags: 0,
    gradeBFarmer: "",
    gradeBBags: 0,
    gradeSFarmer: "",
    gradeSBags: 0,
    gradeRNRFarmer: "",
    gradeRNRBags: 0,
    gradeBPTFarmer: "", // Add Grade BPT Farmer
    gradeBPTBags: 0,    // Add Grade BPT Bags
    isExpanded: false,   // State to toggle the expanded section
    isMinimized: false,  // State to toggle minimize
    isEditable: true,    // State to manage editability
  };

  const [formList, setFormList] = useState([initialFormState]);
  const [savedData, setSavedData] = useState([]);

  const handleAddForm = () => {
    setFormList([...formList, { ...initialFormState }]);
  };

  const handleDeleteForm = (index) => {
    setFormList(formList.filter((_, i) => i !== index));
    setSavedData(savedData.filter((_, i) => i !== index));
  };

  const handleSaveForm = (index) => {
    const formData = formList[index];
    console.log("Saved form:", formData);

    const updatedSavedData = [...savedData];
    updatedSavedData[index] = formData;
    setSavedData(updatedSavedData);

    const updatedList = [...formList];
    updatedList[index].isEditable = false;
    setFormList(updatedList);

    alert(`Truck Detail ${index + 1} saved successfully!`);
  };

  const handleEditForm = (index) => {
    const updatedList = [...formList];
    updatedList[index].isEditable = true;
    setFormList(updatedList);
  };

  const handleToggleMinimize = (index) => {
    const updatedList = [...formList];
    updatedList[index].isMinimized = !updatedList[index].isMinimized;
    setFormList(updatedList);
  };

  const handleToggleExpand = (index) => {
    const updatedList = [...formList];
    updatedList[index].isExpanded = !updatedList[index].isExpanded;
    setFormList(updatedList);
  };

  const handleChange = (index, field, value) => {
    const updatedList = [...formList];
    updatedList[index][field] = value;
    setFormList(updatedList);
  };

  return (
    <div className="dynamic-form-container">
      <div className="header-container">
        <h4>Truck Details</h4>
        <div className="add-action" onClick={handleAddForm}>
          <IoMdAdd size={20} />
          <span>Add Truck Detail</span>
        </div>
      </div>

      {formList.map((form, index) => (
        <div key={index} className="dynamic-form">
          {form.isMinimized ? (
            <div className="minimized-bar" onClick={() => handleToggleMinimize(index)}>
              <span>{`Truck Sheet: ${form.truckSheetNumber || 'N/A'}`}</span>
              <span>{`Mill: ${form.dropdownValue}`}</span>
              <RxCrossCircled
                size={20}
                className="minimize-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleMinimize(index);
                }}
              />
            </div>
          ) : (
            <div className="form-content">
              <div className="form-header">
                <span>{`Truck Detail ${index + 1}`}</span>
                <RxCrossCircled
                  size={20}
                  className="close-icon"
                  onClick={() => handleToggleMinimize(index)}
                />
              </div>

              {/* Truck Sheet Number and Rice Mill Detail */}
              <div className="toggle-expand" onClick={() => handleToggleExpand(index)}>
                    <button>{form.isExpanded ? "SD Grade" : "A and C grade"}</button>
                  </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Sheet Number:</label>
                  <input
                    type="text"
                    value={form.truckSheetNumber}
                    onChange={(e) => handleChange(index, "truckSheetNumber", e.target.value)}
                    disabled={!form.isEditable}
                  />
                </div>
                <div className="form-group">
                  <label>Rice Mill Detail:</label>
                  <select
                    value={form.dropdownValue}
                    onChange={(e) => handleChange(index, "dropdownValue", e.target.value)}
                    disabled={!form.isEditable}
                  >
                    <option value="Mill A">Mill A</option>
                    <option value="Mill B">Mill B</option>
                    <option value="Mill C">Mill C</option>
                  </select>
                </div>
              </div>

              {/* Show initial fields */}
              {!form.isExpanded ? (
                <>
                  {/* Grade A fields */}
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Grade A Farmer:</label>
                      <input
                        type="text"
                        value={form.gradeAFarmer}
                        onChange={(e) => handleChange(index, "gradeAFarmer", e.target.value)}
                        disabled={!form.isEditable}
                      />
                    </div>
                    <div className="form-group">
                      <label>Grade A Bags:</label>
                      <input
                        type="number"
                        value={form.gradeABags}
                        onChange={(e) => handleChange(index, "gradeABags", e.target.value)}
                        disabled={!form.isEditable}
                      />
                    </div>
                  </div>

                  {/* Grade B fields */}
                  <div className="form-row">
                    <div className="form-group">
                      <label>Grade B Farmer:</label>
                      <input
                        type="text"
                        value={form.gradeBFarmer}
                        onChange={(e) => handleChange(index, "gradeBFarmer", e.target.value)}
                        disabled={!form.isEditable}
                      />
                    </div>
                    <div className="form-group">
                      <label>Grade B Bags:</label>
                      <input
                        type="number"
                        value={form.gradeBBags}
                        onChange={(e) => handleChange(index, "gradeBBags", e.target.value)}
                        disabled={!form.isEditable}
                      />
                    </div>
                  </div>

                  {/* Toggle button for showing/hiding additional details */}
                  
                </>
              ) : (
                <div className="expanded-details">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Grade S Farmer:</label>
                      <input
                        type="text"
                        value={form.gradeSFarmer}
                        onChange={(e) => handleChange(index, "gradeSFarmer", e.target.value)}
                        disabled={!form.isEditable}
                      />
                    </div>
                    <div className="form-group">
                      <label>Grade S Bags:</label>
                      <input
                        type="number"
                        value={form.gradeSBags}
                        onChange={(e) => handleChange(index, "gradeSBags", e.target.value)}
                        disabled={!form.isEditable}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Grade RNR Farmer:</label>
                      <input
                        type="text"
                        value={form.gradeRNRFarmer}
                        onChange={(e) => handleChange(index, "gradeRNRFarmer", e.target.value)}
                        disabled={!form.isEditable}
                      />
                    </div>
                    <div className="form-group">
                      <label>Grade RNR Bags:</label>
                      <input
                        type="number"
                        value={form.gradeRNRBags}
                        onChange={(e) => handleChange(index, "gradeRNRBags", e.target.value)}
                        disabled={!form.isEditable}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Grade BPT Farmer:</label>
                      <input
                        type="text"
                        value={form.gradeBPTFarmer}
                        onChange={(e) => handleChange(index, "gradeBPTFarmer", e.target.value)}
                        disabled={!form.isEditable}
                      />
                    </div>
                    <div className="form-group">
                      <label>Grade BPT Bags:</label>
                      <input
                        type="number"
                        value={form.gradeBPTBags}
                        onChange={(e) => handleChange(index, "gradeBPTBags", e.target.value)}
                        disabled={!form.isEditable}
                      />
                    </div>
                  </div>

              

                  {/* <div className="toggle-expand" onClick={() => handleToggleExpand(index)}>
                    <button>{form.isExpanded ? "SD Grade" : "A and C grade"}</button>
                  </div> */}
                </div>
              )}

              <div className="form-actions">
                {form.isEditable ? (
                  <>
                    <button className="save-button" onClick={() => handleSaveForm(index)}>
                      Save
                    </button>
                    <button className="edit-button" onClick={() => handleEditForm(index)}>
                      Edit
                    </button>
                  </>
                ) : (
                  <button className="edit-button" onClick={() => handleEditForm(index)}>
                    Edit
                  </button>
                )}
                <button className="delete-button" onClick={() => handleDeleteForm(index)}>
                  <MdOutlineDelete size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
