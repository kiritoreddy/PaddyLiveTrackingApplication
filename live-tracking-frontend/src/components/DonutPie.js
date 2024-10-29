// src/components/DonutPie.js
import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import './DonutPie.css';

Chart.register(...registerables);

const DonutChart = ({ data }) => {
    const canvasRef = useRef(null);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        data: data.values,
                        backgroundColor: ['#FF6384', '#36A2EB'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: (tooltipItem) => {
                                const value = tooltipItem.raw;
                                const total = data.values.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(2) + '%';
                                return percentage;
                            },
                        },
                    },
                },
            },
        });

        return () => {
            chart.destroy();
        };
    }, [data]);

    const total = data.values.reduce((a, b) => a + b, 0);

    return (
        <div
            className="donut-chart-card"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {/* Donut Chart */}
            <div style={{ width: '60%', display: 'flex', justifyContent: 'center', backgroundColor: 'white' }}>
                <canvas ref={canvasRef} style={{ width: '100%', maxWidth: '150px', height: '150px' }} />
            </div>
            {/* Legend and Values */}
            <div style={{ width: '40%', padding: '10px', fontSize: '14px', lineHeight: '1.5' }}>
                {data.labels.map((label, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <div
                            style={{
                                width: '10px',
                                height: '10px',
                                backgroundColor: ['#FF6384', '#36A2EB'][index],
                                borderRadius: '50%',
                                marginRight: '5px',
                            }}
                        />
                        <span>{`${label}: ${data.values[index]}`}</span>
                    </div>
                ))}
                <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                    <span>Total: {total}</span>
                </div>
            </div>
            {/* Tooltip */}
            {showTooltip && (
                <div className="custom-tooltip">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Type A</th>
                                <th>Type C</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Purchased</td>
                                <td>100</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Shifted</td>
                                <td>75</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>To be Shifted</td>
                                <td>25</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default DonutChart;
