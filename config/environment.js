const {
  version
} = require('./../package');

const config = () => {
  return {
    projectName: process.env.PROJECT_NAME,
    version,
    service: {
      port: process.env.SERVICE_PORT,
      host: process.env.SERVICE_HOST
    },
    data: process.env.DATA,
    env: process.env.NODE_ENV,
    next_service: process.env.NEXT
  }
}

module.exports = config