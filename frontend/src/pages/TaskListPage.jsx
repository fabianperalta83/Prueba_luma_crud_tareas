import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllTasks } from '../services/api';

const TaskListPage = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllTasks();
            setTasks(data);
        } catch (err) {
            setError('Error al cargar las tareas. Asegúrate de que el servidor esté corriendo.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="page-container">
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Cargando tareas...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-container">
                <div className="error-message">
                    <p>⚠️ {error}</p>
                    <button className="btn btn-primary" onClick={loadTasks}>
                        Reintentar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1> Lista de Tareas</h1>
                <Link to="/add" className="btn btn-primary">
                    Nueva Tarea
                </Link>
            </div>

            {tasks.length === 0 ? (
                <div className="empty-state">
                    <h3>No hay tareas</h3>
                    <p>Crea tu primera tarea</p>
                    <Link to="/add" className="btn btn-primary">
                        Crear Tarea
                    </Link>
                </div>
            ) : (
                <div className="tasks-grid">
                    {tasks.map(task => (
                        <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
                            <div className="task-header">
                                <h3>{task.title}</h3>
                                <span className={`status-badge ${task.completed ? 'completed' : 'pending'}`}>
                                    {task.completed ? '✓ Completada' : '○ Pendiente'}
                                </span>
                            </div>

                            {task.description && (
                                <p className="task-description">{task.description}</p>
                            )}

                            <div className="task-meta">
                                <small>Creada: {new Date(task.created_at).toLocaleDateString('es-ES')}</small>
                            </div>

                            <div className="task-actions">
                                <Link to={`/edit/${task.id}`} className="btn btn-edit">
                                    Editar
                                </Link>
                                <Link to={`/delete/${task.id}`} className="btn btn-delete">
                                    Eliminar
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskListPage;
