import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTask, deleteTask } from '../services/api';

const DeleteTaskPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadTask();
    }, [id]);

    const loadTask = async () => {
        try {
            setLoading(true);
            setError(null);
            const taskData = await getTask(id);
            setTask(taskData);
        } catch (err) {
            setError('Error al cargar la tarea');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
            setDeleting(true);
            setError(null);
            await deleteTask(id);
            navigate('/');
        } catch (err) {
            setError('Error al eliminar la tarea. Intenta nuevamente.');
            console.error(err);
            setDeleting(false);
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    if (loading) {
        return (
            <div className="page-container">
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Cargando tarea...</p>
                </div>
            </div>
        );
    }

    if (error && !task) {
        return (
            <div className="page-container">
                <div className="error-message">
                    <p>⚠️ {error}</p>
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>
                        Volver a la lista
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1> Eliminar Tarea</h1>
            </div>

            <div className="delete-container">
                <div className="delete-warning">

                    <h2>¿Estás seguro de que quieres eliminar esta tarea?</h2>
                    <p>Esta acción no se puede deshacer.</p>
                </div>

                {task && (
                    <div className="task-preview">
                        <h3>Detalles de la tarea:</h3>
                        <div className="preview-content">
                            <div className="preview-field">
                                <strong>Título:</strong>
                                <p>{task.title}</p>
                            </div>
                            {task.description && (
                                <div className="preview-field">
                                    <strong>Descripción:</strong>
                                    <p>{task.description}</p>
                                </div>
                            )}
                            <div className="preview-field">
                                <strong>Estado:</strong>
                                <p>
                                    <span className={`status-badge ${task.completed ? 'completed' : 'pending'}`}>
                                        {task.completed ? '✓ Completada' : '○ Pendiente'}
                                    </span>
                                </p>
                            </div>
                            <div className="preview-field">
                                <strong>Creada:</strong>
                                <p>{new Date(task.created_at).toLocaleString('es-ES')}</p>
                            </div>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="error-banner">
                        ⚠️ {error}
                    </div>
                )}

                <div className="delete-actions">
                    <button
                        className="btn btn-danger"
                        onClick={handleDelete}
                        disabled={deleting}
                    >
                        {deleting ? 'Eliminando...' : ' Sí, Eliminar Tarea'}
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={handleCancel}
                        disabled={deleting}
                    >
                        No, Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteTaskPage;
