# Practica02, Backend y Frontend

Este repositorio contiene el código para el backend en Laravel y el frontend en Angular para un portafolio personal creado en la Practica01.


## Requisitos Previos
 Para que funcione el codigo se debe tener instalado:

 - Tener Composer.
 - Instala PHP.
 - Instala Node.js.
 - Instala Angular CLI.
 - Instala XAMPP.


## Configuración de la Backend 

1. Asegurate de tener instalado SQL Server.

2. Crea una base de datos.

3. Clona el repositorio.

4. Abre el proyecto en tu editor de código.

5. Navega al directorio del backend: `cd backend`.
    
6. Instala las dependencias de Composer: `composer install`.
    
7. Copia el archivo de configuración: `cp .env.example .env`.
    
8. Genera la clave de la aplicación: `php artisan key:generate`.
    
9. Configura la base de datos en el archivo con tus datos `.env`.
    
10. Ejecuta las migraciones y los seeders: `php artisan migrate --seed`.
    
11. Inicia el servidor: `php artisan serve`.


## Configuración del Frontend (React)

1. Abre la carpeta del frontend en tu terminal.

    ```bash
    cd frontend
    ```

2. Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados.

3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

4. Inicia la aplicación React:

    ```bash
    ng serve -o
    ```

5. El frontend estará disponible en `http://localhost:4200/portfolio` por defecto.

## Uso

### Endpoint de la API

El backend proporciona un endpoint:

- **URL:** `http://localhost:8000/api/profile`
- **Método:** GET
- **Respuesta Esperada:** Un JSON con información del perfil, frameworks y hobbies.

### Interacción con el Frontend

El frontend consume el endpoint de la API y muestra la información del perfil en la URL `/portfolio`. Accede a esta URL en tu navegador para ver el portafolio personal.