# Animation3DWorld

Starter project for Three.JS with webpack and babel configuration 

## Development / Production

Clone the project and install dependencies:

```bash
git clone https://github.com/deutschkihun/Animation3DWorld
npm i
```

Start webpack development server:

```bash
npm start
```

Bundle dev mode 

```bash
npm run build
```

Bundling prod mode 

```bash
npm run prod
```

## Extra

The code can be formated with prettier:

```bash
npm run format
```

## WebPack

Bundling tool for solving problem in module. Module can't handle order of many different javascript files. Also module doesn't know the dependencies of different javascript file. But by webpck all javascript files will be bundles together, also asset like images and css,scss and so on. For that there are some feature that have to be installed. 

```bash
npm i webpack webpack-cli webpack-dev-server
```

If you want to bundle css as well, then install following packages 

```bash
npm i style-loader css-loader
```
css-loader makes css loadable in javascript file. style-loader applies loaded css in javascript. 

## Babel 

