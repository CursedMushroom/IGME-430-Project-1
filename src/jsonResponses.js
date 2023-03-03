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

const addMedia = (request, response, body) => {
  const responseJSON = {
    message: 'Title, Media Type and Progress Required.',
  };

  if (!body.title || !body.type) { // || !body.type || !body.progress
    responseJSON.id = 'missingParams';
    return respondJSON(request, response, 400, responseJSON);
  }

  let responseCode = 204;

  if (!library[body.title]) {
    responseCode = 201;
    library[body.title] = {};
  }

  library[body.title].title = body.title;
  library[body.title].type = body.type;
  if (body.genres & body.genres != "") library[body.title].genres = body.genres;
  if (body.notes) library[body.title].notes = body.notes;

  if (responseCode === 201) {
    responseJSON.message = 'created successfully';
    return respondJSON(request, response, responseCode, responseJSON);
  }
  console.log(library);
  return respondJSONMeta(request, response, responseCode);
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
  addMedia,
  getLibrary,
  getLibraryMeta,
  notFound,
  notFoundMeta,
};
