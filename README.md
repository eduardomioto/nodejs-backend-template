# nodejs-backend-template

```
npm init -y
npm install --save-dev typescript
nano tsconfig.json
```

```
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```

```
npm install --save express@4.17.1
npm install -save-dev @types/express@4.17.1
mkdir src
nano src/app.ts
```

```
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
```

```
npx tsc
npm install --save-dev eslint
npm init @eslint/config@latest
```