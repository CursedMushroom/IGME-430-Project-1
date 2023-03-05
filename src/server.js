const http = require('http');
const url = require('url');
const query = require('querystring');

const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  GET: {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCSS,
    '/library': htmlHandler.getLibrary, // libraryPage//getData
    '/addMedia': htmlHandler.getMediaPage,
    '/getLibrary': jsonHandler.getLibrary,
    // media sent
    '/notFound': jsonHandler.notFound, // notFound/404

    '/photoSelect': htmlHandler.getPhotoSelect,
    '/app-footer': htmlHandler.getFooter,
    '/card': htmlHandler.getCard,

    notFound: jsonHandler.notFound,
    index: htmlHandler.getIndex,
  },
  HEAD: {
    // notFound/404
  },

};

// post
const parseBody = (request, response, handlerFunction) => {
  const body = [];

  request.on('error', (err) => {
    console.dir(err);
    response.statusCode = 400;
    response.end();
  });

  request.on('data', (chunk) => {
    body.push(chunk);
  });

  request.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    const bodyParams = query.parse(bodyString);

    handlerFunction(request, response, bodyParams);
  });
};

const handlePost = (request, response, parsedUrl) => {
  if (parsedUrl.pathname === '/submitMedia') {
    parseBody(request, response, jsonHandler.addMedia);
  }
};

// -------------------//

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  if (request.method === 'POST') {
    return handlePost(request, response, parsedUrl);
  }
  if (!urlStruct[request.method]) {
    return urlStruct.HEAD.notFound(request, response);
  }
  if (urlStruct[request.method][parsedUrl.pathname]) {
    urlStruct[request.method][parsedUrl.pathname](request, response);
  }
  return null;
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1: ${port}`);
});
