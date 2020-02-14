const Hapi = require('@hapi/hapi')
const plugins = require('./plugins')
const api = require('./../api')

async function start (config) {
  const { version } = config;

  const server = await register (config);
  await server.start();

  server.logger().info(`Server ${config.projectName}@${version} running at: ${server.info.uri}`);
  return server;
}

async function register (config) {
  const { service: {host, port} } = config

  const server = new Hapi.Server({
    port,
    host
  });

  server.app.config = config
  await server.register([
    ...plugins.configure(config),
    ...api
  ])

  return server;
}

module.exports = {
  start
}
