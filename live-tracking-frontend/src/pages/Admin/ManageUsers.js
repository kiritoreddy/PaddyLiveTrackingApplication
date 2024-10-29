import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';

const ManageUsers = () => {
    const [file, setFile] = useState(null);
    const [excelData, setExcelData] = useState([]);
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Fetch all existing users when the page loads
        axios.get('/api/users/all')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
        parseExcel(uploadedFile);
    };

    const parseExcel = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            // Map parsed data to an array of objects for ease of display and validation
            const formattedData = parsedData.slice(1).map(row => ({
                username: row[0],
                password: row[1],
                role: row[2],
            }));
            setExcelData(formattedData);
        };
        reader.readAsArrayBuffer(file);
    };

    const handleUpload = async () => {
        try {
            const response = await axios.post('/api/users/upload-users', excelData);
            setMessage(response.data.message);
            // Refresh user list after upload
            const usersResponse = await axios.get('/api/users/all');
            setUsers(usersResponse.data);
        } catch (error) {
            console.error('Error uploading users:', error);
            setMessage("Failed to upload users.");
        }
    };

    return (
        <div>
            <h2>User Management</h2>

            <input type="file" onChange={handleFileChange} accept=".xlsx, .xls" />
            {file && (
                <div>
                    <h3>Preview Uploaded Data</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {excelData.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={handleUpload}>Confirm and Upload</button>
                </div>
            )}
            <p>{message}</p>

            <h3>All Users</h3>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
