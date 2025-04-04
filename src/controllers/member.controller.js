const memberService = require('../services/member.service');

exports.getAllMembers = async (req, res) => {
  const members = await memberService.getAll();
  res.json(members);
};

exports.getMemberById = async (req, res) => {
  const member = await memberService.getById(req.params.id);
  if (!member) return res.status(404).send('Not found');
  res.json(member);
};
