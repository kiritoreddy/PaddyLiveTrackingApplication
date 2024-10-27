// src/components/CustomCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCard = ({ title, icon, value }) => {
    return (
        <Card className="custom-card" style={{ backgroundColor: '#e6e0f8', margin: '10px', color: '#333' }}> {/* Grayish background */}
            <Card.Body>
                <h6 className="mb-4">{title}</h6>
                <div className="row d-flex align-items-center">
                    <div className="col-9">
                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                            <i className={`feather ${icon} f-30 m-r-5`} /> {value}
                        </h3>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CustomCard;
