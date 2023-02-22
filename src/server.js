const http = require('http');
const url = require('url');

const htmlHandler = require('./htmlResponse.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  GET: {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCSS,
    '/library': htmlHandler.getLibrary,//libraryPage//getData
    '/addMedia': htmlHandler.getMediaPage,//addData/editData
    '/notFound': jsonHandler.notFound,//notFound/404 

    notFound: jsonHandler.notFound,
    index: htmlHandler.getIndex,
  },
  HEAD: {
    //notFound/404 
  },

};

//post

const onRequest=(request,response)=>{

}
//create server
http.createServer(onRequest).listen(port,()=>{
  console.log(`Listening on 127.0.0.1: ${port}`);
});