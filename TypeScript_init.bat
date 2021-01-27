mkdir "./src"
mkdir "./build"

echo {"name": "appname", "version": "1.0.0", "description": "", "main": "index.js", "dependencies": { "fs": "^0.0.1-security", "typescript": "^4.1.3" }, "devDependencies": {}, "scripts": { "test": "echo \"Error: no test specified\" && exit 1" }, "author": "Mateusz#4711", "license": "GPL-3.0" } > package.json

echo { "compilerOptions": { "target": "ES6", "module": "commonjs", "lib": ["es6", "dom"], "outDir": "./build", "strict": true, "moduleResolution": "node", "baseUrl": "./src", "typeRoots": ["node_modules/@types"], "esModuleInterop": true, "experimentalDecorators": true, "emitDecoratorMetadata": true, "resolveJsonModule": true, "incremental": true } } > tsconfig.json

npm install

npm install @types/node @types/ws


pause