const replaceable = [
    {
        stubName: "index.html.ejs",
        replaces: {},
        target: {
            fileName: "index.html",
            directory: "./",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "vite.config.js.ejs",
        replaces: {
            name: "componentNamePascalCase",
            fileName: "kebabCase",
        },
        target: {
            fileName: "vite.config.js",
            directory: "./",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "package.json.ejs",
        replaces: {
            directory: "directory",
            kebabCase: "kebabCase",
        },
        target: {
            fileName: "package.json",
            directory: "./",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "README.md.ejs",
        replaces: {},
        target: {
            fileName: "README.md",
            directory: "./",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: ".gitignore.ejs",
        replaces: {},
        target: {
            fileName: ".gitignore",
            directory: "./",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "main.js.ejs",
        replaces: {},
        target: {
            fileName: "main.js",
            directory: "./src",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "App.vue.ejs",
        replaces: {
            componentName: "componentNamePascalCase",
        },
        target: {
            fileName: "App.vue",
            directory: "./src",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "index.js.ejs",
        replaces: {
            componentName: "componentName",
        },
        target: {
            fileName: "index.js",
            directory: "./src/components",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "componentName.vue.ejs",
        replaces: {
            componentNamePascalCase: "componentNamePascalCase",
            componentName: "componentName",
        },
        target: {
            fileName: "*.vue",
            directory: "./src/components",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "componentName.scss.ejs",
        replaces: {},
        target: {
            fileName: "*.scss",
            directory: "./src/assets/scss",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "vite-env.d.ts.ejs",
        replaces: {},
        target: {
            fileName: "vite-env.d.ts",
            directory: "./src",
        },
        language: [
            "ts"
        ]
    },
    {
        stubName: "tsconfig.json.ejs",
        replaces: {},
        target: {
            fileName: "tsconfig.json",
            directory: "./",
        },
        language: [
            "ts"
        ]
    },
    {
        stubName: "tsconfig.node.json.ejs",
        replaces: {},
        target: {
            fileName: "tsconfig.node.json",
            directory: "./",
        },
        language: [
            "ts"
        ]
    },
    /**
     * copy files
     */
    {
        stubName: "index.js.ejs",
        replaces: {},
        target: {
            fileName: "index.js",
            directory: "./src/router",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "index.js.ejs",
        replaces: {},
        target: {
            fileName: "index.js",
            directory: "./src/store",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "index.vue.ejs",
        replaces: {
            componentName: "index",
        },
        target: {
            fileName: "index.vue",
            directory: "./src/views",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "entry.esm.js.ejs",
        replaces: {},
        target: {
            fileName: "entry.esm.js",
            directory: "./src",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "nuxt.config.setup.js.ejs",
        replaces: {},
        target: {
            fileName: "nuxt.config.setup.js",
            directory: "./src",
        },
        language: [
            "js", "ts"
        ]
    },
];
export default replaceable;
