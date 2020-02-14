const Boom = require('boom');
const init = require('./../util/request');

async function handler(req) {
  const {
    sendRequest
  } = init(req.logger)

  if (!req.server.app.config.next_service) {
    // next service not set, will respond just with simple data
    return  {
      data: req.server.app.config.data
    }
  }

  try {
    const response = await sendRequest({
      method: 'get',
      path: '/v1/complete',
      host: req.server.app.config.next_service,
      port: req.server.app.config.service.port
    })

    return {
      data: `${req.server.app.config.data}, ${response}`
    }
  }catch(err) {
    req.logger.error(err, 'Error retrieving data from next service');
    return Boom.internal();
  }
}

module.exports = {
  handler
}