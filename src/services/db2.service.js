const ibmdb = require('ibm_db');
const connStr = process.env.DB2_URL;

// exports.fetchMembers = async () => {
//   return new Promise((resolve, reject) => {
//     ibmdb.open(connStr, (err, conn) => {
//       if (err) return reject(err);
//       conn.query('SELECT ID, NAME, EMAIL FROM DB2MEMBERS', (err, data) => {
//         if (err) reject(err);
//         else resolve(data);
//         conn.close();
//       });
//     });
//   });
// };
exports.fetchMembers = async () => {
  return [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' }
  ];
};
