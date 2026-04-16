# Movie Database - Frontend Component

Aplicacion frontend desarrollada con React y CSS que consume la API externa de TMDB para mostrar informacion de peliculas de forma clara, visual y responsive.

Este proyecto nace como una migracion de una version previa construida con JavaScript, HTML y CSS hacia una arquitectura basada en React y CSS. En versiones posteriores, la capa de estilos se migrara progresivamente de CSS a SCSS para mejorar la escalabilidad y la organizacion del codigo.

## Descripcion del proyecto

La aplicacion muestra un catalogo basico de peliculas consumidas desde TMDB (The Movie Database), organizadas en cuatro categorias principales:

- En cartelera
- Proximamente
- Populares
- Mejor valoradas

El usuario puede visualizar los resultados en dos modos distintos:

- Vista `grid`
- Vista `list`

Ademas, al hacer click sobre una tarjeta de pelicula, se accede a la vista de detalle correspondiente, donde se muestra informacion ampliada de la pelicula seleccionada.

Durante el desarrollo se ha tenido especialmente en cuenta:

- La calidad visual de la interfaz
- La experiencia de usuario
- El comportamiento responsive
- Un enfoque de diseno `desktop first`

## Objetivos de la migracion

- Reestructurar el proyecto hacia una arquitectura basada en componentes reutilizables en React
- Mejorar la mantenibilidad del codigo respecto a una base inicial en JavaScript, HTML y CSS
- Facilitar la escalabilidad futura del proyecto
- Preparar la aplicacion para una futura migracion de estilos de CSS a SCSS

## Stack tecnologico

- React
- React Router DOM
- Vite
- CSS
- ESLint
- TMDB API

## Funcionalidades principales

- Consumo de una API externa para obtener peliculas
- Navegacion por categorias
- Visualizacion en formato grid y lista
- Busqueda de peliculas por nombre
- Acceso al detalle individual de cada pelicula
- Carga de informacion ampliada en la pagina de detalles
- Interfaz responsive adaptada a distintos tamanos de pantalla

## Estructura general del proyecto

```text
FRONTEND_COMPONET/
|- public/
|- src/
|  |- Components/
|  |- layout/
|  |- Pages/
|  |- Services/
|  |- Styles/
|  |- App.jsx
|  |- App.css
|  |- index.css
|  |- main.jsx
|- .env
|- .gitignore
|- eslint.config.js
|- index.html
|- package.json
|- vite.config.js
```

## Instalacion

1. Clonar o descargar el proyecto.
2. Acceder a la carpeta del frontend:

```bash
cd Movie_DataBase_Filmax_API_CALLLS/FRONTEND_COMPONET
```

3. Instalar las dependencias:

```bash
npm install
```

## Dependencias del proyecto

### Dependencias principales

```bash
npm install react react-dom react-router-dom dotenv
```

### Dependencias de desarrollo

```bash
npm install -D vite @vitejs/plugin-react eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh globals @types/react @types/react-dom
```

## Variables de entorno

Para que la aplicacion funcione correctamente, es necesario disponer de un archivo `.env` en la raiz del frontend con las siguientes variables:

```env
VITE_BASE_URL=...
VITE_API_KEY=...
VITE_URL_IMAGES=...
```

### Significado de cada variable

- `VITE_BASE_URL`: endpoint base de TMDB para peliculas
- `VITE_API_KEY`: clave de acceso a la API de TMDB
- `VITE_URL_IMAGES`: URL base para construir las imagenes de posters y perfiles

Importante:

- La API key debe obtenerse desde una cuenta valida de TMDB
- No se recomienda exponer claves reales en repositorios publicos

## Ejecucion en desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicacion se levantara en el entorno local de Vite, normalmente en:

```text
http://localhost:5173
```

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo
- `npm run build`: genera la version de produccion
- `npm run preview`: previsualiza la build de produccion
- `npm run lint`: ejecuta el analisis estatico con ESLint

## Flujo principal de uso

1. El usuario entra en la aplicacion.
2. Se cargan peliculas desde TMDB segun la categoria seleccionada.
3. El usuario puede cambiar entre vista grid y vista list.
4. El usuario puede buscar peliculas por nombre.
5. Al hacer click en una pelicula, accede a su pagina de detalles.
6. En la vista de detalle se muestra informacion ampliada, incluyendo datos adicionales como reparto.

## Enfoque de UI y responsive

El proyecto se ha desarrollado cuidando la calidad de la UI para ofrecer una experiencia visual clara, limpia y funcional. La maquetacion se ha planteado con un enfoque `desktop first`, y posteriormente se ha adaptado a resoluciones menores para mantener una correcta visualizacion en distintos dispositivos.

## Arquitectura funcional

- `Components`: componentes reutilizables de interfaz
- `Pages`: paginas principales de la aplicacion
- `layout`: estructura general compartida entre vistas
- `Services`: configuracion de API y funciones de consumo de datos
- `Styles`: hojas de estilo del proyecto

## Mejoras previstas

- Migracion de los estilos de CSS a SCSS en futuras versiones
- Posible ampliacion de filtros y busquedas
- Mejora del tratamiento de errores y estados de carga
- Incorporacion de nuevas vistas o funcionalidades relacionadas con peliculas

## Requisitos recomendados

- Node.js instalado
- npm disponible
- Conexion a Internet para consumir la API de TMDB
- Clave valida de TMDB

## Autor

**IOSF**

## Nota final

Este proyecto tiene un enfoque academico y practico orientado a consolidar conceptos de:

- Migracion de proyectos a React
- Consumo de APIs externas
- Componentizacion
- Navegacion entre vistas
- Diseno responsive
- Organizacion de frontend moderna con Vite
