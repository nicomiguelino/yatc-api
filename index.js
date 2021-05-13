'use strict';

const Hapi = require('@hapi/hapi');

const init = async() => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      const data = {
        message: 'Hello, World 2.0!',
      };

      return h.response(data).code(200);
    }
  });

  await server.start();

  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
