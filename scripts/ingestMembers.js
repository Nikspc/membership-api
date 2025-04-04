//For ingestion or scheduled jobs

require('dotenv').config();
const { ingestMembers } = require('../src/services/ingest.service');

ingestMembers().catch(console.error);