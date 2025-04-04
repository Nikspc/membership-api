require('dotenv').config();
const ingestService = require('./services/ingestService');

(async () => {
    try {
        console.log('🔄 Starting DB2 data ingestion...');

        // Fetch data from DB2
        const db2Data = await ingestService.fetchDB2Data();

        if (db2Data.length === 0) {
            console.log('⚠️ No records found in DB2.');
            process.exit(0);
        }

        console.log(`📥 Fetched ${db2Data.length} records from DB2.`);

        // Insert data into PostgreSQL
        await ingestService.insertIntoPostgres(db2Data);

        console.log('✅ Data successfully ingested into PostgreSQL.');
        process.exit(0);
    } catch (error) {
        console.error('❌ Data ingestion failed:', error);
        process.exit(1);
    }
})();
