// src/pages/Admin/Dashboard.js
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'; // Import Row for layout
import Sidebar from '../../components/Sidebar';
import CustomCard from '../../components/CustomCard';
import DonutChart from '../../components/DonutPie'; // Import DonutChart
import './Dashboard.css';

const Dashboard = () => {
    const cardData = [
        { title: 'Sales', icon: 'feather-dollar-sign', value: '$249.95', className: 'bg-success' },
        { title: 'Users', icon: 'feather-users', value: '120', className: 'bg-info' },
        { title: 'Revenue', icon: 'feather-pie-chart', value: '$150.00', className: 'bg-warning' },
        { title: 'Growth', icon: 'feather-arrow-up', value: '15%', className: 'bg-danger' }
    ];

    // Dummy data for the single donut chart
    const donutData = { labels: ['Part A', 'Part B'], values: [70, 30] }; // Data for the donut chart

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <Container fluid className="card-container">
                    <Col className="d-flex flex-column align-items-end">
                        {cardData.map((data, index) => (
                            <CustomCard
                                key={index}
                                title={data.title}
                                icon={data.icon}
                                value={data.value}
                                className={data.className}
                            />
                        ))}
                    </Col>
                </Container>
                {/* Adding the Donut Chart */}
                <Container className="donut-chart-container mt-4">
                    <Row className="justify-content-end">
                        <Col className="donut-chart">
                            <DonutChart data={donutData} />
                            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                <strong>Total: {donutData.values.reduce((a, b) => a + b, 0)}</strong>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Dashboard;
