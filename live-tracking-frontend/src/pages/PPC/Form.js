import React from 'react';

const Form = () => {
    return (
        <div className="container mt-5">
            <h2>Paddy Purchase Form</h2>
            <form>
                {/* Form fields go here */}
                <div className="form-group">
                    <label htmlFor="newGunnies">New Gunnies Received Today</label>
                    <input type="number" className="form-control" id="newGunnies" required />
                </div>
                {/* Additional form fields */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Form;
