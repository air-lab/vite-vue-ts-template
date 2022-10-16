# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Setup Node.js

Install **Node.js** and **PNPM** package manager
Check your platform on the website <https://nodejs.org/en/>. 

You can download and install a binary installer from the website. For MacOS it can be easily installed by [brew](https://brew.sh).


```sh
brew install node
```

or for Microsoft Windows you can use [chocolately](https://chocolatey.org/install)

```sh
choco install nodejs
```

Or if you need to manage more node versions - take a look at "Node Version Manager" <https://github.com/nvm-sh/nvm>

### Setup package manager: PNPM (YARN, NPM)

We're using alternative node package manager [pnpm](https://pnpm.io/installation). There is the main reason why we prefer to use it because it reduces `node_modules` size on the disk, has super-fast performance, and compatible with npm.

> **pnpm** creates hard links from the global store to the project's `node_modules` folders. Hard links point to the same place on the disk where the original files are. So, for example, if you have `foo` in your project as a dependency and it occupies 1MB of space, then it will look like it occupies 1MB of space in the project's `node_modules` folder and the same amount of space in the global store. However, that 1MB is the same space on the disk addressed from two different locations. So in total foo occupies 1MB, not 2MB.


### Start & Build

```sh
npm start
```

```sh
npm run build
```


To preview your build:


```sh
npm run preview
```
## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) +  [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Auto Formating

Install extention

- [VS Code](https://code.visualstudio.com/) + [Multi Command](https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command)

Add custom `VS Code` keybinding to fix Vue files formating.

```json
[
    {
        "key": "alt+cmd+l",
        "command": "extension.multiCommand.execute",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor",
        "args": { 
            "sequence": [
                "editor.action.formatDocument",
                "stylelint.executeAutofix"
            ]
        },
        "languages": ["vue"]
    }
]
```

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
