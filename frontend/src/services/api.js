import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

// Obtener todas las tareas
export const getAllTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

// Obtener una tarea
export const getTask = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching task:', error);
        throw error;
    }
};

// Crear nueva tarea
export const createTask = async (taskData) => {
    try {
        const response = await axios.post(API_URL, taskData);
        return response.data.data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

// Actualizar tarea
export const updateTask = async (id, taskData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, taskData);
        return response.data.data;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};

// Eliminar tarea
export const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};
