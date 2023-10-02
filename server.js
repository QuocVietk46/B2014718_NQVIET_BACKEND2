const app = require('./app');
const config = require('./app/config.js');
const MongoDB = require('./app/utils/mongodb.util.js');

async function startServer() {
  try {
    await MongoDB.connect(config.db.uri);
    console.log('Connected to the database');

    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${config.app.port}`);
    });
  } catch (error) {
    console.log('Cannot connect to the database', error);
    process.exit();
  }
}

startServer();
