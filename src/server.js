const Hapi = require('@hapi/hapi');
const routes = require('./routes');


const init = async () => {
const server = Hapi.server({
  port: 5000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

  server.route(routes);

  server.events.on('log', (event, tags) => {

    if (tags.error) {
        console.log(`Server error: ${event.error ? event.error.message : 'unknown'}`);
    }
})
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
