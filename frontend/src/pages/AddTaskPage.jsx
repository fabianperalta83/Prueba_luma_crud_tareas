import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../services/api';

const AddTaskPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        completed: false
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            setError('El título es requerido');
            return;
        }

        try {
            setLoading(true);
            setError(null);
            await createTask(formData);
            navigate('/');
        } catch (err) {
            setError('Error al crear la tarea. Intenta nuevamente.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h1> Agregar Nueva Tarea</h1>
            </div>

            <div className="form-container">
                <form className="task-form-page" onSubmit={handleSubmit}>
                    {error && (
                        <div className="error-banner">
                            ⚠️ {error}
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="title">Título *</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Ingresa el título de la tarea"
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Ingresa una descripción (opcional)"
                            rows="5"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="completed"
                                checked={formData.completed}
                                onChange={handleChange}
                                disabled={loading}
                            />
                            <span>Marcar como completada</span>
                        </label>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Guardando...' : ' Guardar Tarea'}
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={handleCancel} disabled={loading}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTaskPage;
