const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const memberRoutes = require('./routes/member.routes');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/members', memberRoutes);

app.get('/health', (_, res) => res.send('API is healthy'));

module.exports = app;
