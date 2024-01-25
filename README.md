# Configuraciones del Proyecto

Esta configuración es para crear una plantilla de proyecto con Astro, React, Svelte, Prettier, ESLint, TypeScript y TailwindCSS.

Formatea el código con Prettier con las reglas de StandardJS, (comillas simples en Js y Ts, sin punto y coma y comillas dobles en formato HTML tanto en Astro y Svelte).

:::danger IMPORTANTE
En React no se puede usar comillas dobles en los atributos de los elementos HTML, por lo que se debe usar comillas simples. Esto debido a que React usa JSX y no HTML y la libreria Standard lo reconoce como un error.
:::

## settings.json (VSCode)

```json
  // CONFIGURACION DE PRETTIER
  "editor.formatOnSave": true,
  "prettier.requireConfig": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[svelte]": {
    "editor.defaultFormatter": "svelte.svelte-vscode"
  },
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  }
```

## Extensiones de VSCode

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [Oxc](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [StandardJS](https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard)
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## package.json

```json
{
  "name": "astro-kit",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.4.1",
    "@astrojs/react": "^3.0.9",
    "@astrojs/svelte": "^5.0.3",
    "@astrojs/tailwind": "^5.1.0",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "astro": "^4.2.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "svelte": "^4.2.9",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3"
  },
  "devDependencies": {
    "prettier-plugin-svelte": "^3.1.2",
    "ts-standard": "^12.0.2"
  }
}
```

## .prettierrc.json

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "all",
  "plugins": ["prettier-plugin-svelte"],
  "pluginSearchDirs": ["."],
  "overrides": [
    {
      "files": "*.{js*,ts*}",
      "options": {
        "jsxSingleQuote": true,
        "singleQuote": true,
        "semi": false
      }
    },
    {
      "files": "*.astro",
      "options": {
        "jsxSingleQuote": false,
        "singleQuote": true,
        "semi": false
      }
    },
    {
      "files": "*.svelte",
      "options": {
        "parser": "svelte",
        "singleQuote": true,
        "semi": false
      }
    }
  ]
}
```
