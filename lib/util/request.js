const Request = require('request-promise-native')

function init (logger) {
  async function sendRequest ({ protocol, method, path, payload, host, port, headers, form }) {
    const servicePath = `${protocol || 'http'}://${host}${port ? ':' + port : ''}${path}`
    const options = {
      method,
      uri: servicePath,
      body: payload,
      form: form,
      headers: headers
    }

    logger.info(options, 'Send request')
    return Request(options)
  }

  return {
    sendRequest
  }
}

module.exports = init