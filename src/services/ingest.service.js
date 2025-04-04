const db2Service = require('./db2.service');
const memberService = require('./member.service');

exports.ingestMembers = async () => {
  const members = await db2Service.fetchMembers();
  for (const member of members) {
    await memberService.save(member);
  }
};
