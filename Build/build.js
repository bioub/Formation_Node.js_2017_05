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