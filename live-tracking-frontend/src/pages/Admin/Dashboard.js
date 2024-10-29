// src/pages/Admin/Dashboard.js
import React from 'react';
import { Container, Col, Row,Card,Tabs,Tab } from 'react-bootstrap'; // Import Row for layout
import Sidebar from '../../components/Sidebar';
import DonutChart from '../../components/DonutPie'; // Import DonutChart
import ContentTable from '../../components/ContentTable';
import CustomCard from '../../components/CustomCard';
import {shifitingColumns,shiftingData,OPMSData,opmsColumns} from './details.js';
import './Dashboard.scss';


const Dashboard = () => {
    const cardData = [
        { title: 'Sales', icon: 'feather-dollar-sign', value: '$249.95', className: 'bg-success' },
        { title: 'Users', icon: 'feather-users', value: '120', className: 'bg-info' },
        { title: 'Revenue', icon: 'feather-pie-chart', value: '$150.00', className: 'bg-warning' },
        { title: 'Growth', icon: 'feather-arrow-up', value: '15%', className: 'bg-danger' }
    ];
    const dashSalesData = [
        { title: 'Daily Sales', amount: '$249.95', icon: 'icon-arrow-up text-c-green', value: 50, class: 'progress-c-theme' },
        { title: 'Monthly Sales', amount: '$2.942.32', icon: 'icon-arrow-down text-c-red', value: 36, class: 'progress-c-theme2' },
        { title: 'Yearly Sales', amount: '$8.638.32', icon: 'icon-arrow-up text-c-green', value: 70, color: 'progress-c-theme' }
      ];

    // Dummy data for the single donut chart
    const donutData = { labels: ['Part A', 'Part B'], values: [70, 30] }; // Data for the donut chart

    return (
        <div className="Dashboard">
            
            <div className="dashboard-content">
            <Row>
            {dashSalesData.map((data, index) => {
          return (
            <Col key={index} xl={4} xxl={4}>
              <Card >
                <Card.Body>
                  <h6 className="mb-4">{data.title}</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className={`feather ${data.icon} f-30 m-r-5`} /> $249.95
                      </h3>
                    </div>
                    <div className="col-3 text-end">
                      <p className="m-b-0">{data.value}%</p>
                    </div>
                  </div>
                  <div className="progress m-t-30" style={{ height: '7px' }}>
                    <div
                      className={`progress-bar ${data.class}`}
                      role="progressbar"
                      style={{ width: `${data.value}%` }}
                      aria-valuenow={data.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
                
                {/* Adding the Donut Chart */}
                
                <Col md={6} xl={8} className="d-flex">
                <div className='tableCard'>
                    <Card>
                        <Tabs defaultActiveKey="ShiftingDetails" id="uncontrolled-tab-example">
                            <Tab eventKey="ShiftingDetails" title="Shifting Details">
                                <ContentTable columns={shifitingColumns} data={shiftingData} />
                            </Tab>
                            <Tab eventKey="OPMS" title="OPMS">
                                <ContentTable columns={opmsColumns} data={OPMSData} />
                            </Tab>
                        </Tabs>
                    </Card>
                </div>
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
                </Col>
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
                </Row>
            </div>
        </div>
    );
}

export default Dashboard;