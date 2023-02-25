// {{
//     name:, required
//     type:, required
//     progress:, required
//     genre:[],
//     rating:,
//     adNotes:,
//     img:,

// },{...},};

const library = {};

const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.end();
};

const getLibrary = (request, response) => {
  const responseJSON = {
    library,
  };
  return respondJSON(request, response, 200, responseJSON);
};

const getLibraryMeta = (request, response) => respondJSONMeta(request, response, 200);

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  return respondJSON(request, response, 404, responseJSON);
};

const notFoundMeta = (request, response) => respondJSONMeta(request, response, 404);

module.exports = {
  getLibrary,
  getLibraryMeta,
  notFound,
  notFoundMeta,
};
