const PermissionChecker = require('../../services/iam/permissionChecker');
const permissions = require('../../security/permissions')
  .values;
const LoanService = require('../../services/loanService');

module.exports = async (req, res) => {
  try {
    new PermissionChecker(req).validateHas(
      permissions.loanEmail,
    );

    await new LoanService(req).sendEmails(
      req.body.ids,
    );

    const payload = true;

    res.status(200).send(payload);
  } catch (error) {
    if ([400, 403, 404].includes(error.code)) {
      return res.status(error.code).send(error.message);
    }

    console.error(error);
    return res.status(500).send(error.message);
  }
};
