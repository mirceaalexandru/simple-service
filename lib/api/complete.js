const { handler } = require('./../handlers/complete')

exports.plugin = {
  register: server => {
    server.route({
      path: '/v1/complete',
      method: 'GET',
      handler
    })
  },
  name: 'complete',
  version: '1.0.0'
}
