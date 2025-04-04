const ibmdb = require('ibm_db');

const connStr = `DATABASE=${process.env.DB2_DATABASE};HOSTNAME=${process.env.DB2_HOST};PORT=${process.env.DB2_PORT};UID=${process.env.DB2_USER};PWD=${process.env.DB2_PASSWORD};`;

const db2 = ibmdb.openSync(connStr);

module.exports = db2;
