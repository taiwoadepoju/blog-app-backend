const express = require('express');
const cors = require('cors');

const app = express();
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());

require('./startup/routes')(app);
require('./startup/db')();

const port = process.env.port || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
