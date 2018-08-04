# TODO A bettter way to deploy (perhaps something like "npm run deploy")
#
set -e
jsdoc2md src/*.jsx > js-doc.md
browserify out/moar-health.js | babel -f moar-health.js > public/moar-health.min.js
firebase deploy
rm public/moar-health.min.js
