

Aplicación completa de gestión de tareas con backend Node.js/Express y frontend React.

Instalacion y ejecucion

backend puerto 5000

```bash
cd backend
npm install
npm start
```

El servidor estará disponible en: `http://localhost:5000`



frontend puerto 3000

```bash
cd frontend
npm install
npm run dev
```

La aplicación React estará disponible en: `http://localhost:3000`

api rest endpoints

url: `http://localhost:5000/api/tasks`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tasks` | Obtener todas las tareas |
| GET | `/api/tasks/:id` | Obtener una tarea específica |
| POST | `/api/tasks` | Crear nueva tarea |
| PUT | `/api/tasks/:id` | Actualizar tarea existente |
| DELETE | `/api/tasks/:id` | Eliminar tarea |




base de datos sqlite local nombre: tasks y tabla: tasks

Notas Importantes

1. orden de inicio: Inicia primero el backend (puerto 5000) y luego el frontend (puerto 3000)
2. CORS : El backend está configurado para aceptar peticiones del frontend
3. base de datos es en SQLite y crea automáticamente el la tabla tasks si no esta creada




flujo de trabajo

1. iniciar backend: El servidor Express se conecta a SQLite y expone la API REST
2. iniciar frontend: La aplicación React se conecta al backend
3. usar la aplicacion: 
- Crear tareas usando el formulario
- Ver todas las tareas en la lista
- Editar tareas haciendo clic en "Editar"
- Eliminar tareas con el botón "Eliminar"
- Marcar tareas como completadas


Si tienes problemas:
- Verifica que ambos servidores estén corriendo
- Revisa la consola del navegador para errores
- Verifica que los puertos 3000 y 5000 estén disponibles
