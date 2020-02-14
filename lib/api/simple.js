const { handler } = require('./../handlers/simple')

exports.plugin = {
  register: server => {
    server.route({
      path: '/v1/simple',
      method: 'GET',
      handler
    })
  },
  name: 'simple',
  version: '1.0.0'
}
