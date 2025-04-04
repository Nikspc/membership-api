// const db2Service = require('./db2.service');
// const memberService = require('./member.service');

// exports.ingestMembers = async () => {
//   const members = await db2Service.fetchMembers();
//   for (const member of members) {
//     await memberService.save(member);
//   }
// };

const db2 = require('../config/db2');  // DB2 connection
const pgp = require('../config/db');   // PostgreSQL connection

// Fetch data from DB2
async function fetchDB2Data() {
    const query = "SELECT member_id, name, email, join_date FROM members";
    return new Promise((resolve, reject) => {
        db2.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

// Insert data into PostgreSQL
async function insertIntoPostgres(db2Data) {
    const insertQuery = `
        INSERT INTO members (member_id, name, email, join_date)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (member_id) DO UPDATE
        SET name = EXCLUDED.name, email = EXCLUDED.email, join_date = EXCLUDED.join_date;
    `;

    const insertPromises = db2Data.map(record =>
        pgp.none(insertQuery, [record.MEMBER_ID, record.NAME, record.EMAIL, record.JOIN_DATE])
    );

    await Promise.all(insertPromises);
}

module.exports = { fetchDB2Data, insertIntoPostgres };
