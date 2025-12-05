import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <h3>No hay tareas</h3>
                <p>Crea tu primera tarea usando el formulario arriba</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            <h2>Mis Tareas ({tasks.length})</h2>
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
                            <button
                                className="btn btn-edit"
                                onClick={() => onEdit(task)}
                                title="Editar tarea"
                            >
                                Editar
                            </button>
                            <button
                                className="btn btn-delete"
                                onClick={() => onDelete(task.id)}
                                title="Eliminar tarea"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
