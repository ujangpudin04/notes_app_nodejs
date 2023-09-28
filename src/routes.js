const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');



const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => 'Halaman tidak dapat diakses dengan method tersebut'
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, _h) => 'Homepage'
    },
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
      options: {
        cors: {
          origin: ['*'],
        },
        // collect:true,
      },
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
    },
    {
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;
