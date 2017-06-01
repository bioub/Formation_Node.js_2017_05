/*
Soit de manière synchrone (facile), soit avec des promesses
(difficile)
1 - Créer un répertoire dist s'il n'existe pas
(fs.stat, sync try .. catch)
1.bis - idem pour dist/css et dist/js (voir ensureDir dans fs-extra)
2 - Regrouper les 2 fichiers css -> dist/css/app.css
2.bis - idem pour dist/js/app.js
3 - Déplacer le fichier index.html dans dist en remplacer les
balise link vers le fichier app.css
et idem pour les scripts (API String sur MDN)
 */

const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname + '/dist');
const distCssPath = path.resolve(distPath + '/css');
const distJsPath = path.resolve(distPath + '/js');

const createDirIfNotExist = function(dirPath) {
    try {
        fs.statSync(dirPath);
    }
    catch (err) {
        fs.mkdirSync(dirPath);
    }
};

createDirIfNotExist(distPath);
createDirIfNotExist(distCssPath);
createDirIfNotExist(distJsPath);

const concatenate = function(arrayPath, dest) {
    try {
        fs.unlinkSync(dest);
    } catch(err) {}

    arrayPath.forEach(path => {
        const bufferSrcCssAPath = fs.readFileSync(path);
        fs.appendFileSync(dest, bufferSrcCssAPath);
    });
};

const srcCssAPath = path.resolve(__dirname + '/src/css/a.css');
const srcCssBPath = path.resolve(__dirname + '/src/css/b.css');
const distCssFilePath = path.resolve(distCssPath + '/app.css');
concatenate([srcCssAPath, srcCssBPath], distCssFilePath);

const srcJsAPath = path.resolve(__dirname + '/src/js/a.js');
const srcJsBPath = path.resolve(__dirname + '/src/js/b.js');
const distJsFilePath = path.resolve(distJsPath + '/app.js');
concatenate([srcJsAPath, srcJsBPath], distJsFilePath);


const srcIndexPath = path.resolve(__dirname + '/src/index.html');
const distIndexPath = path.resolve(__dirname + '/dist/index.html');
const bufferSrcIndexPath = fs.readFileSync(srcIndexPath);
let contentIndex = bufferSrcIndexPath.toString();

contentIndex = contentIndex.replace(
    '<link rel="stylesheet" href="css/a.css">',
    '',
);
contentIndex = contentIndex.replace(
    '<link rel="stylesheet" href="css/b.css">',
    '<link rel="stylesheet" href="css/app.css">',
);

contentIndex = contentIndex.replace(
    '<script src="js/a.js"></script>',
    '',
);
contentIndex = contentIndex.replace(
    '<script src="js/b.js"></script>',
    '<script src="js/app.js"></script>',
);


fs.appendFileSync(distIndexPath, contentIndex);