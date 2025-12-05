

RESPUESTAS  DE Prueba / Mensaje para candidato: Full-Stack Junior

1. Mini-ejercicio (práctico) — Crea una pequeña app full-stack (puede ser con Node/Express + React, o Laravel + Vue, o similar) que permita crear, listar y eliminar "tareas" (CRUD mínimo). En el README indica cómo correrla localmente y cómo probar las rutas.
Nota: si no tienes tiempo para frontend completo, sube solo una API con ejemplos de llamadas (curl / Postman).

R./ ES EL PROGRAMA ENTREGADO

2. ¿Cuál es la diferencia entre var, let y const en JavaScript? Da un ejemplo donde elegir let sea mejor que const. 

R./var es una variable que no tiene la nesesdad de declara valor apenas se genera y es de uso global, let es una variable que se declara valor apenas se genera y es de uso local, const es una variable que se declara valor apenas se genera y es de uso local, pero const no puede ser modificada por lo tanto es mejor let para algun ciclo com un for o tambien preguntar por un valor y guardarlo en una variable let
   Ejemplo: let contador = 0;

            for (let s = 0; s < 3; s++) {
                contador++;
            }

            console.log(contador); // 3

            const contador = 0;
            contador++; //X sale error

            console.log(contador); // 1

3. Explica brevemente el flujo de una petición HTTP desde el navegador hasta que el servidor responde. (menciona DNS, TCP/HTTPS, servidor, controlador, DB si aplica).

R/. 
     1. El navegador envía una petición HTTP al servidor DNS hasta      
        obtener la IP del servidor
     2. el servidor establece la conexión TCP/HTTPS
     3. El navegador envía una petición HTTP o POST, al servidor 
     4. El servidor responde con una respuesta HTTP, si no tiene 
        dependencias a otros servidores, si es asi se comunica con ellos
     5. El navegador recibe la respuesta HTTP
     6. El navegador muestra la respuesta HTTP, si es archivo lo 
        descarga o si es html lo muestra y si es json lo procesa

4. Bases de datos: ¿Cuál diferencia hay entre una consulta SQL con JOIN y una consulta separada (N + 1 problem)? ¿Cómo lo evitarías?

R./ el Join es la union de dos o mas tablas en una consulta pero hacerlas separadas o indexadas genera una carga mucha mas grande al servidor ya que genera mas de una consulta

5. Control de versiones: Describe un flujo simple de trabajo con Git para una nueva feature (branching, commits, PR). ¿Qué comandos usarías y por qué?

R./ 
     1. Preparación Inicial
        -cd proyecto
        -git config --global credential.helper store  #te pedira usuario y contraseña si no has ingresado
        -git clone https://github.com/usuario/proyecto.git  # solo la primera vez
     2. Crear Rama de Desarrollo (si no existe)
        -git checkout -b develop
        -git push -u origin develop
     3. Crear Feature Branch
        -git checkout develop
        -git pull origin develop
        -git checkout -b feature/nueva-funcionalidad
     4. Desarrollo y Commits
        -git add .                      # Todos los archivos
        -git add archivo.js             # Archivo específico
        -git add src/                   # Carpeta específica
        -git commit -m "feat: agregar formulario de registro
        -git add -p                    # Seleccionar cambios interactivamente
     5. Mantener la Rama Actualizada
        - git checkout feature/nueva-funcionalidad
        - git fetch origin
        - git merge origin/develop
     6. Finalizar el Desarrollo
        -git diff develop
        -git push -u origin feature/nueva-funcionalidad

6. CSS / UI: ¿Cómo harías que un contenedor sea responsive y muestre 4 tarjetas por fila en desktop, 2 en tablet y 1 en móvil? (explica la idea: grid/flex + breakpoints).

R./

.cards-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr); /* Desktop: 4 columnas */
}

/* Tablet */
@media (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Móvil */
@media (max-width: 600px) {
  .cards-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

    ----Por qué funciona---

    display: grid → permite dividir el espacio en columnas iguales.

    repeat(4, 1fr) → 4 columnas iguales (desktop).

    @media (max-width: ... ) → cuando la pantalla es más pequeña, se modifican las columnas.

    La propiedad gap agrega espacio entre tarjetas.

7. Testing: ¿Qué tipo de tests conoces (unit, integration, e2e)? Da un ejemplo breve de cuándo escribirías cada uno en la app del ejercicio.

R./ 
    -Unit test: o pruebas unitarias son pruebas que se realizan en una unidad de código, como una función o un método.

    - Integrator test: o prueba de integracion es cuando se mira la integracion o acoplamiento de dos modulos de un programa

    - E2E text : end to end es un text que se realiza al programa por completo en todo su flujo de trabajo algo asi: navegador → frontend → backend → DB → frontend.

8. Seguridad básica: Menciona 3 buenas prácticas para proteger una API pública (autenticación, validación, CORS, rate limiting, etc.) y explica por qué son importantes.

    R./ 
    - Autenticacion: es la forma de identificar a un usuario y darle permisos para acceder a ciertas funcionalidades
    - Validacion: es la forma de validar que los datos ingresados sean correctos y seguros
    - CORS: es la forma de controlar los permisos de acceso a una API
    - Rate limiting: es la forma de limitar el numero de peticiones que se pueden hacer a una API

9. Problema lógico/código: Escribe una función en JavaScript que reciba un array de números y devuelva un nuevo array con los duplicados eliminados (no uses Set — explica la solución y su complejidad temporal). Puedes subir el código en el repo.

R./ - se deja la funcion en el archivo eliminarDuplicados.js del directorio raiz
    - ejecutar la orden "node eliminarDuplicados.js" en el terminal

10. Autocrítica y aprendizaje: Describe un proyecto previo (personal o laboral) donde aprendiste algo importante. ¿Qué falló, qué hiciste para solucionarlo y qué harías distinto ahora?

R./  en salud total se desarrollo una APP en Xamarin, pero lo habria hecho mejor en Microsoft Power Platform, ya que esta vigente y en Xamarin ya lo descontinuaron, lo importante es ver en que plataforma se hace el desarrollo y a pesar de solicitud del cliente es mejor insistir mas en plataformas que garanticen la seguridad y la estabilidad de la app, a travez del tiempo 
