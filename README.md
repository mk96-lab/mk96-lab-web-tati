# mk96-lab-web-tati

Prueba de concepto (POC) de una web corporativa para un negocio de exportación de carnes premium. Está hecha con [Angular](https://angular.dev) 21 y renderizado en el servidor (SSR).

> **Es un experimento.** El contenido es provisional: los textos, las cifras, el teléfono, el correo y la dirección que aparecen en las páginas son de ejemplo y no deben tomarse como datos reales.

## Qué hace

Es un sitio de varias páginas, con una cabecera y un pie comunes.

| Ruta | Página | Contenido |
|---|---|---|
| `/inicio` | Inicio | Presentación de la empresa, botones "Ver Catálogo" y "Solicitar Información", y las razones para elegirla: exportación global, certificaciones, productos premium y logística |
| `/productos` | Productos | Catálogo de productos |
| `/sobre-nosotros` | Sobre nosotros | Historia de la empresa |
| `/contacto` | Contacto | Datos de contacto, horarios y un formulario de mensaje |

La ruta `/` redirige a `/inicio`.

El formulario de contacto **no envía nada**: la web no tiene servidor de datos ni llama a ningún servicio externo. No necesita claves ni cuentas.

## Requisitos

- Node.js 22.12 o superior. Está probado con Node 24.15.
- npm 11, el que indica `packageManager` en `package.json`.

## Arrancar en local

```bash
npm install
npm start
```

Abre `http://localhost:4200`. La página se recarga sola al guardar cambios.

## Compilar y probar

| Comando | Para qué sirve |
|---|---|
| `npm run build` | Compila para producción, con renderizado en el servidor, en `dist/mk96-lab-web-tati/` |
| `npx ng build --configuration development` | Compila en modo desarrollo |
| `npm run serve:ssr:mk96-lab-web-tati` | Arranca el servidor Express con la web ya compilada |
| `npm test` | Ejecuta los tests con [Vitest](https://vitest.dev) |

## Estado actual

Comprobado con Node 24.15:

| Comprobación | Resultado |
|---|---|
| `npm ci` | Correcto |
| Compilación de desarrollo | Correcta |
| Compilación de producción (`npm run build`) | **Falla**: la hoja de estilos de la página "Sobre nosotros" (`about-page.component.scss`) supera por 3 bytes el límite de 8 kB que fija `angular.json` en `budgets` |
| Tests (`npm test`) | **Fallan los 2** de `src/app/app.spec.ts`. Son los de plantilla de Angular y esperan un título (`Hello, web-de-tati`) que la web ya no muestra |

Ambos fallos vienen del proyecto original y están pendientes de corregir.

## Estructura del repositorio

```
.
├── angular.json                    Configuración de Angular: compilación, servidor y límites de tamaño
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── .editorconfig
├── .gitignore
├── README.md
├── .vscode/                        Configuración de VS Code generada por Angular
│   ├── extensions.json
│   ├── launch.json
│   ├── mcp.json
│   └── tasks.json
├── public/
│   └── favicon.ico
└── src/
    ├── index.html
    ├── main.ts                     Arranque en el navegador
    ├── main.server.ts              Arranque en el servidor
    ├── server.ts                   Servidor Express del renderizado en el servidor
    ├── styles.scss                 Estilos globales
    └── app/
        ├── app.ts                  Componente raíz
        ├── app.html
        ├── app.scss
        ├── app.spec.ts             Tests de plantilla (fallan, ver arriba)
        ├── app.config.ts
        ├── app.config.server.ts
        ├── app.routes.ts           Rutas de la web
        ├── app.routes.server.ts
        ├── components/             Piezas comunes
        │   ├── header/             Cabecera: .component.html, .scss y .ts
        │   ├── body/               Cuerpo de la página de inicio: .component.html, .scss y .ts
        │   └── footer/             Pie: .component.html, .scss y .ts
        └── pages/                  Una carpeta por página, cada una con .component.html, .scss y .ts
            ├── main-page/          Inicio
            ├── products-page/      Productos
            ├── about-page/         Sobre nosotros
            └── contact-page/       Contacto
```
