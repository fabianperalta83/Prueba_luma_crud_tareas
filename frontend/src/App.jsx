import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskListPage from './pages/TaskListPage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import DeleteTaskPage from './pages/DeleteTaskPage';

function App() {
    return (
        <Router>
            <div className="app">
                <header className="app-header">
                    <div className="container">
                        <Link to="/" className="header-title">
                            <h1>Gestor de Tareas</h1>
                        </Link>
                        
                    </div>
                </header>

                <main className="container">
                    <Routes>
                        <Route path="/" element={<TaskListPage />} />
                        <Route path="/add" element={<AddTaskPage />} />
                        <Route path="/edit/:id" element={<EditTaskPage />} />
                        <Route path="/delete/:id" element={<DeleteTaskPage />} />
                    </Routes>
                </main>

                <footer className="app-footer">
                    
                </footer>
            </div>
        </Router>
    );
}

export default App;
