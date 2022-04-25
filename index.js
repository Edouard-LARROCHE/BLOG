const express = require('express');
const app = express();
const cors = require('cors');
require('./config/db');

const PORT = process.env.PORT || '5500';

app.listen(PORT, () => console.log(`Server started: ${PORT}`));
