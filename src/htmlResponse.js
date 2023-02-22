const fs = require('fs');

//html
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const libraryPage = fs.readFileSync(`${__dirname}/../client/library.html`);
const mediaPage = fs.readFile(`${__dirname}/../client/addMedia.html`);
//css
const css = fs.readFileSync(`${__dirname}/../client/style.css`);

const getIndex = (request, response) => {//home
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getMediaPage = (request, response) => {//add and edit data
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(mediaPage);
  response.end();
};

const getLibrary = (request, response) => {//library
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(libraryPage);
  response.end();
};

const getCSS = (request, response) => {//css
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

module.exports = {
  getIndex,
  getLibrary,
  getMediaPage,
  getCSS,
};
