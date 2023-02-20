const http = require('http');
const url = require('url');

const htmlHandler = require('./htmlResponse.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    GET: {
      '/': htmlHandler.getIndex,
      '/style.css': htmlHandler.getCSS, 
      //notFound/404 
    },
    HEAD: {
        //notFound/404 
    },
  
  };