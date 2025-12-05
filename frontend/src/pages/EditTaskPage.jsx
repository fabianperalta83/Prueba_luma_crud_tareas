import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTask, updateTask } from '../services/api';

const EditTaskPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        completed: false
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadTask();
    }, [id]);

    const loadTask = async () => {
        try {
            setLoading(true);
            setError(null);
            const task = await getTask(id);
            setFormData({
                title: task.title || '',
                description: task.description || '',
                completed: task.completed || false
            });
        } catch (err) {
            setError('Error al cargar la tarea');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

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
            setSaving(true);
            setError(null);
            await updateTask(id, formData);
            navigate('/');
        } catch (err) {
            setError('Error al actualizar la tarea. Intenta nuevamente.');
            console.error(err);
        } finally {
            setSaving(false);
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

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Editar Tarea</h1>
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
                            disabled={saving}
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
                            disabled={saving}
                        />
                    </div>

                    <div className="form-group checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="completed"
                                checked={formData.completed}
                                onChange={handleChange}
                                disabled={saving}
                            />
                            <span>Marcar como completada</span>
                        </label>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary" disabled={saving}>
                            {saving ? 'Guardando...' : ' Actualizar Tarea'}
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={handleCancel} disabled={saving}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTaskPage;
