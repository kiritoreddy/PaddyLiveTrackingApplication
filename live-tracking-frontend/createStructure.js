const fs = require('fs');
const path = require('path');

// Function to create a file with basic content
const createFile = (filePath, content) => {
    fs.writeFileSync(filePath, content, { encoding: 'utf8', flag: 'w' });
};

// Main function to create folder structure
const createFolderStructure = () => {
    const srcDir = path.join(__dirname, 'src');

    // Folder structure
    const folders = [
        'components',
        'layouts',
        'pages/Admin',
        'pages/PPC',
        'pages/Common',
        'services',
        'utils'
    ];

    // Create folders
    folders.forEach(folder => {
        fs.mkdirSync(path.join(srcDir, folder), { recursive: true });
    });

    // Create files with basic content
    createFile(path.join(srcDir, 'components', 'Button.js'), '// Button component\nexport const Button = () => <button>Click me</button>;\n');
    createFile(path.join(srcDir, 'components', 'Navbar.js'), '// Navbar component\nexport const Navbar = () => <nav>Navbar</nav>;\n');
    createFile(path.join(srcDir, 'components', 'Sidebar.js'), '// Sidebar component\nexport const Sidebar = () => <aside>Sidebar</aside>;\n');
    createFile(path.join(srcDir, 'components', 'PrivateRoute.js'), '// PrivateRoute component\nimport React from \'react\';\nimport { Route, Redirect } from \'react-router-dom\';\n// Add your private route logic here\n');
    
    createFile(path.join(srcDir, 'layouts', 'AdminLayout.js'), '// Admin layout\nexport const AdminLayout = ({ children }) => <div>{children}</div>;\n');
    createFile(path.join(srcDir, 'layouts', 'PPCLayout.js'), '// PPC layout\nexport const PPCLayout = ({ children }) => <div>{children}</div>;\n');

    createFile(path.join(srcDir, 'pages/Admin', 'Dashboard.js'), '// Admin Dashboard\nexport const Dashboard = () => <div>Admin Dashboard</div>;\n');
    createFile(path.join(srcDir, 'pages/Admin', 'ManageUsers.js'), '// Manage Users\nexport const ManageUsers = () => <div>Manage Users</div>;\n');
    createFile(path.join(srcDir, 'pages/Admin', 'Reports.js'), '// Reports\nexport const Reports = () => <div>Reports</div>;\n');
    
    createFile(path.join(srcDir, 'pages/PPC', 'Dashboard.js'), '// PPC Dashboard\nexport const Dashboard = () => <div>PPC Dashboard</div>;\n');
    createFile(path.join(srcDir, 'pages/PPC', 'Form.js'), '// PPC Form Entry\nexport const Form = () => <div>PPC Form</div>;\n');
    createFile(path.join(srcDir, 'pages/PPC', 'Reports.js'), '// PPC Reports\nexport const Reports = () => <div>PPC Reports</div>;\n');

    createFile(path.join(srcDir, 'pages/Common', 'Login.js'), '// Login Page\nexport const Login = () => <div>Login Page</div>;\n');
    createFile(path.join(srcDir, 'pages/Common', 'NotFound.js'), '// 404 Page\nexport const NotFound = () => <div>404 Not Found</div>;\n');

    createFile(path.join(srcDir, 'services', 'AuthService.js'), '// AuthService for managing authentication\nexport const AuthService = {\n    // Your auth logic here\n};\n');
    createFile(path.join(srcDir, 'services', 'ApiService.js'), '// ApiService for API requests\nexport const ApiService = {\n    // Your API request logic here\n};\n');

    createFile(path.join(srcDir, 'utils', 'tokenHelper.js'), '// Token management utility\nexport const TokenHelper = {\n    // Your token management logic here\n};\n');
    createFile(path.join(srcDir, 'utils', 'roleHelper.js'), '// Role management utility\nexport const RoleHelper = {\n    // Your role management logic here\n};\n');

    createFile(path.join(srcDir, 'App.js'), '// Root App component\nimport React from \'react\';\nimport Routes from \'./routes\';\n\nconst App = () => {\n    return <Routes />;\n};\n\nexport default App;\n');
    createFile(path.join(srcDir, 'index.js'), '// Entry point for the React application\nimport React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport App from \'./App\';\nimport { BrowserRouter } from \'react-router-dom\';\n\nReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById(\'root\'));\n');
    createFile(path.join(srcDir, 'routes.js'), '// Centralized route configuration\nimport React from \'react\';\nimport { Route, Switch } from \'react-router-dom\';\n\nconst Routes = () => {\n    return (\n        <Switch>\n            {/* Define your routes here */}\n        </Switch>\n    );\n};\n\nexport default Routes;\n');
};

// Run the function to create the folder structure and files
createFolderStructure();
console.log('Folder structure and files created successfully!');
