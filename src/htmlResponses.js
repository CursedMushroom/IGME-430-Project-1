const fs = require('fs');

// html
const index = fs.readFileSync(`${__dirname}/../client/client.html`);// home
const libraryPage = fs.readFileSync(`${__dirname}/../client/library.html`);
const mediaPage = fs.readFileSync(`${__dirname}/../client/addMedia.html`);
// css
const css = fs.readFileSync(`${__dirname}/../client/style.css`);
// js
const photoSelect = fs.readFileSync(`${__dirname}/../client/src/photo-select.js`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getLibrary = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(libraryPage);
  response.end();
};

const getMediaPage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(mediaPage);
  response.end();
};

const getCSS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

const getPhotoSelect = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/javascript' });
  response.write(photoSelect);
  response.end();
};

module.exports = {
  getIndex,
  getLibrary,
  getMediaPage,
  getCSS,
  getPhotoSelect,
};
