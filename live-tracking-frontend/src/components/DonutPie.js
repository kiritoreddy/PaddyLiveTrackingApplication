// src/components/DonutPie.js
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js'; // Import registerables

// Register all necessary components
Chart.register(...registerables);

const DonutChart = ({ data }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        data: data.values,
                        backgroundColor: ['#FF6384', '#36A2EB'], // Colors for each part
                        hoverBackgroundColor: ['#FF6384', '#36A2EB'], // Colors on hover
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false, // Hide default legend
                    },
                    tooltip: {
                        callbacks: {
                            label: (tooltipItem) => {
                                const value = tooltipItem.raw;
                                const total = data.values.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(2) + '%'; // Show only percentage on hover
                                return percentage;
                            },
                        },
                    },
                },
            },
        });

        return () => {
            chart.destroy(); // Clean up on unmount
        };
    }, [data]);

    const total = data.values.reduce((a, b) => a + b, 0); // Calculate total value

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'white' }}> {/* Make the donut chart bigger */}
                <canvas ref={canvasRef} />
            </div>
            <div style={{ marginLeft: '20px', fontSize: '14px', lineHeight: '1.5' }}>
                {data.labels.map((label, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <div style={{
                            width: '10px',
                            height: '10px',
                            backgroundColor: ['#FF6384', '#36A2EB'][index],
                            borderRadius: '50%',
                            marginRight: '5px'
                        }} />
                        <span>{`${label}: ${data.values[index]}`}</span>
                    </div>
                ))}
                <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                    <span>Total: {total}</span>
                </div>
            </div>
        </div>
    );
};

export default DonutChart;
