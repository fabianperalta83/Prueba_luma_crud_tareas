const express = require('express');
const router = express.Router();
const db = require('../database');

// Obtener todas las tareas
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM tasks ORDER BY created_at DESC';

    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Obtener una tarea por ID
router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    const params = [req.params.id];

    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!row) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

// Crear nueva tarea
router.post('/', (req, res) => {
    const { title, description, completed } = req.body;

    if (!title) {
        res.status(400).json({ error: 'Title is required' });
        return;
    }

    const sql = 'INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)';
    const params = [title, description || '', completed || 0];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({
            message: 'Task created successfully',
            data: {
                id: this.lastID,
                title,
                description,
                completed: completed || 0
            }
        });
    });
});

// Actualizar tarea
router.put('/:id', (req, res) => {
    const { title, description, completed } = req.body;

    if (!title) {
        res.status(400).json({ error: 'Title is required' });
        return;
    }

    const sql = `
    UPDATE tasks 
    SET title = ?, description = ?, completed = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `;
    const params = [title, description || '', completed || 0, req.params.id];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.json({
            message: 'Task updated successfully',
            data: {
                id: req.params.id,
                title,
                description,
                completed
            }
        });
    });
});

// Eliminar tarea
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    const params = [req.params.id];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.json({
            message: 'Task deleted successfully',
            id: req.params.id
        });
    });
});

module.exports = router;
