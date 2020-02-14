const service = require('./lib/service')
const config = require('./config');

async function init() {
  const configuration = await config.get();
  await service.start(configuration)
}

init();