# Eressea Solutions Bootstrap/Vue Boilerplate

Proyecto base para codificar con Bootstrap 5 y Vue 3.

Vue.js es llamado como recurso. Se utiliza la base de Vue-Cli

## Instalación e inicio

Programas necesarios
- Instalar [npm](https://www.npmjs.com/)

Para inicializar el programa se debe correr los siguientes pasos:
1. Correr `npm install` para instalar las dependencias de Node.js
2. Correr `npm run serve` para iniciar el proyecto.
3. Correr `npm run build` para construir el proyecto.
4. Correr `npm run lint` para corregir errores y Lint.

## Conexión con API de E-Commerce
Para conectar con la API de E-Commerce crear un archivo con el nombre `.env` en el directorio raíz con el siguiente contenido:

`VUE_APP_PUBLIC_URL_API=https://training.melian.me/backend-ecommerce/api/`

Se debe volver a ejecutar el comando `npm run serve` al crear o al hacer algún cambio en el archivo .env.

## Registro de páginas y componentes Vue

`src/pages` -> Lugar donde se encuentran las páginas. Estas páginas deben estar en .vue. En /examples/ se encuentra el ejemplo de una página vacía.

`src/components` -> Lugar donde se encuentran los componentes. Estos componentes deben estar en .vue. En /examples/ se encuentra el ejemplo de un componente vacío.

En `main.js` se deben realizar las siguientes tareas según se necesite.

### 1. Registro de Rutas para páginas
  ```js
{ path: '/url', component: NombrePaginaPage }
{ path: '/users/:id', component: User, props: true} // Accesible con props: ['id']
```

### 2. Registro de Componentes Globales
  ```js
app.component('loader-component', LoaderComponent);
```

## Releases

### 1.1
- Axios interceptors y utilidades

### 1.0
- Vue 3
- Bootstrap 5
- Axios

## Copyright y licencia
Código lanzando con la licencia [MIT License](https://github.com/renesilva/es-boilerplate-vue/blob/master/LICENSE).
