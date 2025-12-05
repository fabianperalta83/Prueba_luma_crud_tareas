import React from 'react';

const TaskForm = ({ onSubmit, editingTask, onCancel }) => {
    const [formData, setFormData] = React.useState({
        title: '',
        description: '',
        completed: false
    });

    React.useEffect(() => {
        if (editingTask) {
            setFormData({
                title: editingTask.title || '',
                description: editingTask.description || '',
                completed: editingTask.completed || false
            });
        } else {
            setFormData({
                title: '',
                description: '',
                completed: false
            });
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) {
            alert('El título es requerido');
            return;
        }
        onSubmit(formData);
        setFormData({ title: '', description: '', completed: false });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>{editingTask ? 'Editar Tarea' : 'Nueva Tarea'}</h2>

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
                    rows="3"
                />
            </div>

            <div className="form-group checkbox-group">
                <label>
                    <input
                        type="checkbox"
                        name="completed"
                        checked={formData.completed}
                        onChange={handleChange}
                    />
                    <span>Completada</span>
                </label>
            </div>

            <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                    {editingTask ? 'Actualizar' : 'Crear Tarea'}
                </button>
                {editingTask && (
                    <button type="button" className="btn btn-secondary" onClick={onCancel}>
                        Cancelar
                    </button>
                )}
            </div>
        </form>
    );
};

export default TaskForm;
