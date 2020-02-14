function handler(req) {
  return {
    name: req.server.app.config.projectName,
    version: req.server.app.config.version
  }
}

module.exports = {
  handler
}