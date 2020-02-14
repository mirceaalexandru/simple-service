function handler(req) {
  return {
    data: req.server.app.config.data
  }
}

module.exports = {
  handler
}